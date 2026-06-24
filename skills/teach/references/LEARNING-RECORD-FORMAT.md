# Learning Record Format

Learning records live in `learning-records/` and use sequential numbering: `0001-slug.md`, `0002-slug.md`, etc. Create the directory lazily — only when the first record is written.

Learning records capture demonstrated understanding and changes in the knowledge base. They feed into the skill graph (`SKILL-GRAPH.md`) and knowledge map (`KNOWLEDGE_MAP.md`), which are the canonical records of what the user knows.

## Template

```md
# {Short title of what was learned or established}

{1-3 sentences: what was learned (or what prior knowledge was established), and why it matters for future sessions.}

**Skill graph:** [[SKILL-GRAPH.md#{concept}]]
**Connections:** [[Related Concept A]], [[Related Concept B]]
```

## Optional sections

Only include these when they add genuine value. Most records won't need them.

- **Status** frontmatter (`active | superseded by LR-NNNN`) — useful when an earlier understanding turns out to be wrong and is replaced.
- **Evidence** — how the user demonstrated the understanding (a question answered, a challenge completed, prior experience cited).
- **Implications** — what this unlocks or rules out for future sessions. Worth recording when non-obvious.

## Numbering

Scan `learning-records/` for the highest existing number and increment by one.

## When to write a learning record

Write one when any of these is true:

1. **The user demonstrated genuine understanding of something non-trivial** — not just exposure, but evidence they can use the concept correctly (challenge completed, teach-back passed, novel problem solved).
2. **The user disclosed prior knowledge** — "I already know X." Record it so future sessions don't re-teach it. Also record the _depth_ claimed and update the skill graph accordingly.
3. **A misconception was corrected** — the user previously believed something wrong and now sees why. These are high-value: they predict future stumbling blocks for related topics.
4. **The mission shifted** — the user discovered they cared about something different than they thought. Cross-link to MISSION.md and update it.
5. **A connection was discovered** — the user noticed a relationship between two concepts that wasn't previously captured. Update CONNECTIONS.md as well.

### What does _not_ qualify

- Material that was merely covered. Coverage is not learning. Wait for evidence.
- Anything already captured in the skill graph or knowledge map. Don't duplicate.
- Session-by-session activity logs. Learning records are not a journal — they are decision-grade insights.

## Supersession

When a later record contradicts an earlier one (the user's understanding deepened or corrected), mark the old record `Status: superseded by LR-NNNN` rather than deleting it. Also update the skill graph and knowledge map.
