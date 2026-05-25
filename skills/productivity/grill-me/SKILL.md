---
name: grill-me
description: Replace plan mode by batch-interviewing the user on a plan or design until every decision branch is resolved. Ask 5-12 numbered questions per round (optimized for voice dictation). Use for stress-testing designs or when the user says "grill me". Pair with handoff for prototyping. See references/grilling-guide.md for best practices and failure modes.
version: 1.1.0
category: productivity
portable: true
---

# Grill Me

## Purpose

Replace passive "plan mode" with active interrogation. Walk the design decision tree until you and the user share the same mental model.

**Default interaction:** **Batch questions** (5–12 per round), optimized for **voice dictation** — the user answers everything in one message. Do **not** drip one question per turn unless the user explicitly asks for that mode.

Read `references/grilling-guide.md` for best practices, failure modes, and round formatting.

## When to Use

Use when:
- Starting a feature, system, or refactor and alignment is unclear
- User says "grill me", "stress-test this plan", or "help me think through this"
- User is on **voice dictation** and wants to answer many decisions at once

Do not use when:
- Quick factual answer only (no decision tree)
- Decisions already locked in a PRD and task is pure implementation
- **High-fidelity subjective design** (UI feel, motion, visual hierarchy) — use `handoff` to prototype (see grilling-guide Failure Mode 1)

## Core Workflow

### 1. Establish scope (first round — small batch)

Ask **2–4 questions max** to lock scope:

- What is the **single slice**? (one feature, flow, migration — not the whole app)
- What's **in** and **out** of this session?
- Anything to **defer** to another session?

If scope is too large, propose splits before deep grilling.

### 2. Grill in batches

```
WHILE open decisions remain:
   1. Pick the next unresolved branch (dependencies first)
   2. Explore codebase for answers already in code
   3. Emit ONE grilling round: 5–12 numbered questions (see format below)
   4. Include a recommended answer per question
   5. Wait for user's batch reply (voice or text)
   6. Parse reply → confirm each decision in a table → update Decision log
   7. Check stop conditions → continue or stop
```

**Batch format (required):**

```markdown
## Grill round N — <topic>

Answer in one message (voice OK). Use `1: ..., 2: ...` or answer inline.

1. **<Decision label>** — <question>?
   - *Recommend:* <default>
2. ...

**Quick options:** "all recommendations" | "skip N" | "defer N"
```

**Batch rules:**
- **5–12 questions per round** (default). Fewer only for scope round or final cleanup.
- **Never** send a single question and wait — unless user says `one at a time` or `slow mode`
- Group questions that share the same subsystem or dependency chain
- Each question must change a real decision (no filler)
- Offer **"all recommendations"** when defaults are reasonable

### 3. Stop conditions — start coding

Stop when:

- All in-scope branches are resolved or explicitly deferred
- User says "enough, let's build"
- Further rounds only rehash settled decisions

Then summarize locked decisions → implement, `handoff`, or PRD export.

## Decision log

Update after each batch reply:

```markdown
## Scope
- In: ...
- Out: ...

## Decisions
| # | Topic | Decision | Notes |
|---|-------|----------|-------|

## Open / Deferred
- ...

## Next
- [ ] implement | [ ] handoff | [ ] export PRD
```

## Integration

| Skill | When |
|-------|------|
| **handoff** | Prototype, implement sub-slice, or child grill; pass decisions + open questions |
| **preflight** | After foundations are locked, multi-agent plan review |
| **grill-with-docs** *(planned)* | Grilling + domain language + ADRs |

## Quality Bar

- Scope declared before deep batches
- **5–12 questions per round** with numbered voice-friendly format
- User batch reply parsed; every decision confirmed explicitly
- Codebase consulted before asking what code already answers
- High-fidelity topics routed to prototype, not text debate
- Session preserved; no "clear context and start over"

## Agent Failure Modes

Avoid:

- **One question per message** (breaks voice workflow — unless user opted into slow mode)
- Tiny batches of 1–2 questions when 5+ decisions are ready to ask
- Unnumbered questions hard to map in voice replies
- Assuming answers the user never gave
- Grilling without declared scope
- Mixing unrelated subsystems in one round
