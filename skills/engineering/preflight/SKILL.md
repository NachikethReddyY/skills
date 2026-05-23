---
name: preflight
description: Orchestrate parallel AI agent reviews for plan validation before implementation. Use this skill when the user wants to validate an idea, code change, or design through structured multi-agent review. Triggers: "preflight", "review this", "should I build this", "validate this plan", "check this architecture", "run reviews".
version: 0.1.0
category: engineering
portable: true
status: draft
---

# Preflight

## Purpose

Orchestrate 4 parallel AI agents to review plans, code changes, and designs. Each agent produces structured JSON output. The orchestrator synthesizes outputs and decides:

- **Auto-approve**: All agents >= 8/10 confidence AND no high risk
- **Human-in-the-loop**: Otherwise

## Agent Descriptions

Each agent has a dedicated role file. Read these before orchestration:

| Agent | Role File | Responsibility |
|-------|-----------|----------------|
| **Eng Reviewer** | `agents/eng-reviewer.md` | Architecture, code quality, technical risk |
| **Design Reviewer** | `agents/design-reviewer.md` | UX, states, scope classification (tweak/page/redesign) |
| **QA Reviewer** | `agents/qa-reviewer.md` | Test coverage, edge cases, critical paths |
| **Security Reviewer** | `agents/security-reviewer.md` | Attack surface, vulnerabilities, auth boundaries |
| **Orchestrator** | `agents/orchestrator.md` | Synthesize outputs, make final decision |

## When to Use

Use this skill when:
- User describes an idea to implement ("build me a login page")
- User wants code reviewed ("check this architecture")
- User asks for validation ("what do you think about this approach?")
- User says "preflight", "review this", or "should I build this?"

Do not use this skill when:
- Simple informational question only ("how do I sort an array?")
- User explicitly wants to skip reviews and just build
- Trivial single-line fix (typo, text change only) — but wait: Design Reviewer has a scope_type field. Even text changes should go through preflight because scope classification might surprise you.

## Inputs

Accepts three input types:

| Type | Description | Handling |
|------|-------------|----------|
| **A** | Markdown plan file | Review directly |
| **B** | Chat description ("build me X") | First generate structured plan |
| **C** | Existing code/diff | Review directly |

## Workflow

### Phase 0: Input Classification & Prep

```
IF input is Type B (chat description):
   1. Generate structured plan document
   2. Include: goal, components, approach, tradeoffs
   3. Proceed to Phase 1 with this plan

ELSE:
   Proceed directly to Phase 1
```

### Phase 1: Load Agent Definitions

**Read all 5 agent description files** using the Read tool:

```
agents/eng-reviewer.md
agents/design-reviewer.md
agents/qa-reviewer.md
agents/security-reviewer.md
agents/orchestrator.md
```

These files define:
- Each agent's role and persona
- Exact JSON output schema required
- Evaluation criteria
- Scoring rules
- Risk determination rules

### Phase 2: Parallel Agent Reviews

Spin up **4 agents simultaneously** using the Task tool. Pass each agent:
1. The plan/code to review
2. Their agent description (from the files you read)
3. Instruction: "Output ONLY valid JSON matching your schema."

**Agents run in parallel, NOT sequentially.**

#### Agent Task: Eng Reviewer

```
Prompt for subagent:

You are a Senior Software Engineer. Read the following role definition, then review the plan.

--- ROLE DEFINITION ---
[Paste contents of agents/eng-reviewer.md]
--- END ROLE ---

Plan to review:
[The plan/code]

Output ONLY valid JSON matching the schema in your role definition. Do NOT output any other text.
```

#### Agent Task: Design Reviewer

```
Prompt for subagent:

You are a Senior Product Designer. Read the following role definition, then review the plan.

--- ROLE DEFINITION ---
[Paste contents of agents/design-reviewer.md]
--- END ROLE ---

Plan to review:
[The plan/code]

Output ONLY valid JSON matching the schema in your role definition. Do NOT output any other text.

IMPORTANT: Your scope_type field is CRITICAL. Read the Scope Classification table carefully.
- "tweak" = button color, text change, position adjustment ONLY
- "page" or higher = ALWAYS risk="high" and triggers human-in-the-loop
```

#### Agent Task: QA Reviewer

```
Prompt for subagent:

You are a Senior QA Engineer. Read the following role definition, then review the plan.

--- ROLE DEFINITION ---
[Paste contents of agents/qa-reviewer.md]
--- END ROLE ---

Plan to review:
[The plan/code]

Output ONLY valid JSON matching the schema in your role definition. Do NOT output any other text.
```

#### Agent Task: Security Reviewer

```
Prompt for subagent:

You are a Security Engineer. Read the following role definition, then review the plan.

--- ROLE DEFINITION ---
[Paste contents of agents/security-reviewer.md]
--- END ROLE ---

Plan to review:
[The plan/code]

Output ONLY valid JSON matching the schema in your role definition. Do NOT output any other text.

IMPORTANT CRITICAL RULES:
- Auth boundary change = ALWAYS risk="high"
- Infrastructure change = ALWAYS risk="high"
- Any vulnerability = confidence caps at 4, risk="high"
```

### Phase 3: Orchestrator Synthesis

Collect all 4 JSON outputs from the parallel agents.

Now act as the Orchestrator. Read `agents/orchestrator.md` again and follow its decision logic **EXACTLY**.

#### Decision Logic (MANDATORY)

```
Step 1: Calculate min_confidence = MIN(eng.confidence, design.confidence, qa.confidence, security.confidence)

Step 2: Check has_high_risk = (eng.risk == "high") OR (design.risk == "high") OR (qa.risk == "high") OR (security.risk == "high")

Step 3: Check any_block = (eng.recommendation == "block") OR (design.recommendation == "block") OR ...

Step 4: DECISION:

IF min_confidence >= 8 AND has_high_risk == false AND any_block == false:
   decision = "auto_approve"
ELSE:
   decision = "human_in_loop"
```

#### Threshold Reference

| Condition | Threshold |
|-----------|-----------|
| Minimum confidence for auto-approve | >= 8/10 |
| High risk blocks auto-approve | Always |
| Block recommendation blocks auto-approve | Always |

### Phase 4: Persist Output

Write orchestrator JSON to disk:

```bash
mkdir -p ~/.temp
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
echo "<orchestrator-json>" > ~/.temp/preflight-$TIMESTAMP.json
```

### Phase 5: Present to User

#### If decision = "auto_approve"

```
✅ Auto-Approved

TLDR: <tldr>
Overall Confidence: <overall_confidence>/10 (unanimous >= 8/10)
Overall Risk: Low

Summary by agent:
- Eng: <eng.summary> — <eng.confidence>/10
- Design: <design.summary> — <design.confidence>/10
- QA: <qa.summary> — <qa.confidence>/10
- Security: <security.summary> — <security.confidence>/10

Saved to: ~/.temp/preflight-$TIMESTAMP.json

Ready to implement. Proceed?
```

#### If decision = "human_in_the_loop"

```
⚠️ Human Review Required

TLDR: <tldr>

Reason: <decision_reason>
- Min confidence: <min_confidence>/10 (< 8)
- High risk flagged: <yes/no, which agent>
- Block recommendation: <yes/no, which agent>

---

**Confidence Scores:**
- Eng: <eng.confidence>/10 — Risk: <eng.risk> — <eng.summary>
- Design: <design.confidence>/10 — Risk: <design.risk> — <design.summary>
- QA: <qa.confidence>/10 — Risk: <qa.risk> — <qa.summary>
- Security: <security.confidence>/10 — Risk: <security.risk> — <security.summary>

---

**Key Findings:**
<iterate through key_findings>

---

Saved to: ~/.temp/preflight-$TIMESTAMP.json
```

Then ask what to do next:
- A) Approve as-is and implement
- B) Revise the plan first
- C) Ask specific questions about any review
- D) Cancel

## Quality Bar

The skill works correctly if:
- All 4 agent descriptions are read from files
- All 4 agents run in parallel via Task tool
- Each outputs valid JSON with all required fields
- Orchestrator follows decision logic EXACTLY
- min_confidence >= 8 AND no high risk = auto-approve
- Otherwise = human-in-the-loop
- Output persisted to `~/.temp/preflight-*.json`
- User gets clear summary with TLDR at top

## Failure Modes

Avoid:
- Sequential execution (must be parallel)
- Not reading agent files (hardcoding roles inline)
- Incorrect decision logic (e.g., auto-approving when security flags high risk)
- Rounding confidence up (7.9 stays 7, not 8)
- Waiving "high risk" for any reason
- Not persisting output to disk
- Incomplete JSON fields from agents

## Critical Agent Rules (Summary)

| Agent | Auto "high risk" triggers |
|-------|---------------------------|
| Design | scope_type = page, redesign, multi_page |
| Security | auth boundary change, infrastructure change, any vulnerability |
| All | See their respective role files for full details |

## Test Prompts (evals)

See `evals/evals.json` for 7 test cases:

| ID | Prompt | Expected Decision | Reason |
|----|--------|-------------------|--------|
| 1 | Change button color blue→red | auto-approve | scope_type = tweak |
| 2 | Reposition login button | auto-approve | scope_type = tweak |
| 3 | Build login page with auth | human-in-the-loop | scope_type = page |
| 4 | Add Stripe payment processing | human-in-the-loop | security: infrastructure + auth |
| 5 | Review this auth middleware code | human-in-the-loop | security: auth boundary + vulnerability |
| 6 | Add analytics with dashboard | human-in-the-loop | scope_type = page + system |
| 7 | Fix typo: '99$' → '$99' | auto-approve | text only, no logic changes |

## Deferred for v1.0

| Component | Purpose | Priority |
|-----------|---------|----------|
| Preamble | Session tracking, config, telemetry, artifacts sync | Medium |
| Persisted Learnings | Remember decisions from past reviews per project | High |
| Dual Voices | Two models per review type for consensus | Medium |
| Interactive Revise | User asks for changes → re-run affected reviews | High |
| Memory System Integration | Tie into user's upcoming memory system | High |
