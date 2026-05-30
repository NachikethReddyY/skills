---
name: preflight
description: "Lock nine foundation decisions (schema, types, validation, routing, auth, CSS, UI, client-server, folders) through structured Q&A, then orchestrate parallel AI agent reviews before implementation. Use when validating ideas, plans, or architecture. Triggers: \"preflight\", \"review this\", \"should I build this\", \"validate this plan\", \"check this architecture\", \"run reviews\", \"plan before building\"."
version: 0.2.0
category: engineering
portable: true
---

# Preflight

## Purpose

Two phases before implementation:

1. **Foundation discovery** — Walk through nine architectural decisions with the user using a consistent ask → research → options → pros/cons → choose loop.
2. **Multi-agent review** — Orchestrate 4 parallel AI agents to review the resulting plan. Each agent produces structured JSON output. The orchestrator synthesizes outputs and decides:
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
- User wants to lock stack decisions before coding (schema, auth, routing, etc.)
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
| **A** | Markdown plan file | Run foundation pass on gaps, then review |
| **B** | Chat description ("build me X") | Foundation discovery → generate plan |
| **C** | Existing code/diff | Infer foundations from code; confirm gaps with user, then review |

## Foundation Decision Loop

Use this loop for **each** of the nine foundation areas (and for any open question during discovery):

```
1. ASK     — Ask the user what they want or already decided.
2. RESEARCH — If they don't know (or say "you decide"), research:
              - Read the codebase (package.json, existing patterns, folder layout)
              - Web search for stack-appropriate defaults when the repo is greenfield
3. OPTIONS — If nothing is specified, return 2–4 concrete options (not vague categories).
4. PROS/CONS — For each option, list brief pros and cons tied to this project.
5. CHOOSE  — Ask which option to use. Do not proceed on assumptions.
```

**Rules:**
- Do not skip areas because the user "seems in a hurry" — at minimum confirm existing project defaults.
- If the user already stated a choice in chat, confirm it once, record it, move on.
- Batch questions when areas are independent, but still get explicit confirmation per area.
- Record every locked decision in the plan's `## Foundations` section before reviews.

**Nine foundation areas** (details in `references/foundations.md`):

| # | Area | Core question |
|---|------|----------------|
| 1 | Database Schema | Data relationships and ownership — planned manually before table generation |
| 2 | TypeScript Types | Shared data shapes and API interfaces across client/server |
| 3 | Validation Strategy | Single validation approach (e.g. Zod, Standard Schema–compliant) |
| 4 | Routing Structure | Route outline: public, private, admin |
| 5 | Auth Flow | Authentication and access control (early — ties to schema ownership) |
| 6 | CSS Methodology | Styling rules (Tailwind, modules, naming) — one consistent approach |
| 7 | UI Framework | Component system to reuse (avoid redundant primitives) |
| 8 | Client–Server Communication | Primary pattern: REST, RPC, Server Components, etc. — no mixing |
| 9 | Folder Structure | Where routes, components, hooks, and utils live |

Read `references/foundations.md` when running Phase 0 for per-area prompts and comparison dimensions.

## Workflow

### Phase 0: Foundation Discovery

Run **before** multi-agent review for all input types.

```
FOR each foundation area (1–9):
   1. Apply the Foundation Decision Loop
   2. Record: decision, rationale, rejected alternatives

IF input is Type A and plan already has ## Foundations:
   - Verify completeness; only loop on missing or contradictory items

IF input is Type C (existing code):
   - Infer decisions from codebase first
   - Present inferences to user: "I see X — confirm or change?"
   - Loop only on gaps or conflicts

WHEN all nine areas are locked:
   Proceed to Phase 1
```

**Output of Phase 0:** A `## Foundations` section (append to existing plan or hold in chat) listing all nine decisions. Example:

```markdown
## Foundations

| Area | Decision | Notes |
|------|----------|-------|
| Database Schema | ... | ER sketch or link |
| TypeScript Types | ... | |
| ... | ... | |
```

### Phase 1: Input Classification & Plan Prep

```
IF input is Type B (chat description) OR foundations were just completed:
   1. Generate structured plan document
   2. Include: goal, components, approach, tradeoffs
   3. Include: ## Foundations (from Phase 0)
   4. Proceed to Phase 2 with this plan

IF input is Type A with complete foundations:
   Proceed to Phase 2

IF input is Type C:
   Attach ## Foundations + code context; proceed to Phase 2
```

### Phase 2: Load Agent Definitions

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

### Phase 3: Parallel Agent Reviews

Spin up **4 agents simultaneously** using the Task tool. Pass each agent:
1. The full plan/code to review (must include `## Foundations` from Phase 0)
2. Their agent description (from the files you read)
3. Instruction: "Output ONLY valid JSON matching your schema. Flag conflicts between the plan and locked foundation decisions."

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

### Phase 4: Orchestrator Synthesis

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

### Phase 5: Persist Output

Write orchestrator JSON to disk:

```bash
mkdir -p ~/.temp
TIMESTAMP=$(date +%Y%m%d-%H%M%S)
echo "<orchestrator-json>" > ~/.temp/preflight-$TIMESTAMP.json
```

### Phase 6: Present to User

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
- All nine foundation areas are addressed with the ask → research → options → pros/cons → choose loop
- User explicitly confirms each foundation decision (no silent defaults)
- Plan includes a complete `## Foundations` section before agent reviews
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
- Skipping foundation discovery and jumping straight to parallel reviews
- Auto-picking stack choices without user confirmation
- Mixing pros/cons into walls of text — keep each option scannable
- Sequential execution of review agents (must be parallel)
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
