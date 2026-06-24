# Skill Graph Format

`SKILL-GRAPH.md` is the canonical record of every concept the user has engaged with, tracked at one of five proficiency levels. It determines the zone of proximal development.

## Proficiency Levels

| Level | Meaning | Evidence Required |
|-------|---------|-------------------|
| **Understand** | Can explain what it is | Read the lesson |
| **Explain** | Can teach it to someone else | Teach-back recorded |
| **Apply** | Can use it in a real context | Challenge completed |
| **Modify** | Can adapt it to novel situations | Unfamiliar problem solved |
| **Teach** | Can teach it from memory at multiple depths | Full teach-back passed on Day 7+ |

## Template

```md
# Skill Graph

## {Category}

**{Concept Name}**:
- [x] Understand
- [ ] Explain
- [ ] Apply
- [ ] Modify
- [ ] Teach

Connections: [[Related Concept A]], [[Related Concept B]]

---

**{Next Concept}**:
- [x] Understand
- [x] Explain
- [x] Apply
- [ ] Modify
- [ ] Teach

Connections: [[Related Concept C]]
```

## Rules

- **Advance one level at a time.** Don't skip from Understand to Apply without evidence.
- **Connections are required.** Every concept links to at least 3 others via `[[wiki-links]]`.
- **Use checkboxes.** `[x]` for done, `[ ]` for not done. Update after every lesson or challenge.
- **Group by category.** Mirror the knowledge map hierarchy so the two files stay in sync.
- **Don't advance past Apply without proof.** "I read it" is not enough. The user must build, explain from memory, solve a novel problem, or critique a bad example.
- **Revise levels downward.** If a review reveals the user can no longer explain a concept, drop it to the level they can demonstrate.
