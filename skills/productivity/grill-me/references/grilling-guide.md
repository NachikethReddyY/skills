# Grilling Guide

Reference for **grill-me**: best practices, failure modes, and voice-friendly batch questioning.

---

## Batch questioning (default)

Grill in **rounds**, not drips. Each round groups related decisions on the same branch of the tree.

| Setting | Guideline |
|---------|-----------|
| Questions per round | **5–12** when the user is answering (voice-friendly) |
| First round | Scope only: what's in/out (2–4 questions max) |
| Grouping | Same subsystem or dependency chain in one batch |
| Recommendations | Include a recommended answer per question |
| After user replies | Parse all answers; confirm each decision in a compact table; then next batch |

### Voice dictation format

Structure every grilling round like this so the user can answer in one pass:

```markdown
## Grill round 3 — Auth & sessions

Answer in one message (voice is fine). Reply as `1: <choice>, 2: <choice>, ...` or answer inline.

1. **Session storage** — cookies vs JWT in localStorage?
   - *Recommend:* httpOnly cookies
2. **OAuth providers** — which social logins?
   - *Recommend:* Google only for v1
3. ...

**Quick options:** say "all recommendations" to accept every *Recommend* above.
```

**Rules:**
- Number every question
- Keep each question scannable (bold label, one line of context)
- Offer **"all recommendations"** when defaults are sensible
- Never send a single question and wait — that wastes voice workflow

---

## Best practices

### Manage scope

- Plan **one slice per session** — not the entire product roadmap
- Split by subsystem before hitting ~**120k tokens** ("dumb zone")
- Close the slice or `handoff` to a fresh session for the next slice

### Active engagement

- **User** leads: steer, skip, defer, or say "enough"
- **Agent** batches focused questions; does not ramble when user is disengaged
- **Both** stop when ready to code (see stop conditions in SKILL.md)

### Use prototyping for the ungrillable

Text cannot settle UI feel, spacing, animation, or subjective UX. Route to **`handoff`** → prototype → return to parent grill session.

### Preserve context

Sessions are intellectual property. Do not suggest clearing chat. Export via `handoff`, 2prd, or project docs; reference paths.

### Parallelize (user workflow)

Run 2–3 grill sessions on different slices in parallel; each agent stays in its lane.

---

## Nine failure modes

| # | Failure mode | Symptom | Mitigation |
|---|--------------|---------|------------|
| 1 | High-fidelity questions | Debating UI feel in text | `handoff` to prototype |
| 2 | Excessive scope | Planning the whole platform at once | Split scope; defer branches |
| 3 | Passivity | User says "you decide" on everything | User picks next branch; agent proposes ordered list |
| 4 | Over-activity | Grilling after decisions are sufficient | Stop; summarize; offer build / handoff |
| 5 | Wasting session value | "Start a new chat" after productive grilling | Preserve session; export artifact |
| 6 | Using a dumb model | Shallow reasoning on architecture | Use a frontier model for grilling |
| 7 | Neglecting parallelism | One mega-session | Parallel sessions per subsystem |
| 8 | Ignoring context windows | Quality drops past ~120k tokens | Close slice; handoff; new session |
| 9 | Lack of handoff discipline | Prototype/PRD disconnected from grill | Chain grill → handoff → return → PRD |

---

## Stop conditions

Stop grilling when:

- All in-scope branches are decided
- Remaining items are deferred with owner + trigger
- User says "enough, let's build"
- Further questions rehash settled decisions

Then: summarize → implement, `handoff`, or PRD export.
