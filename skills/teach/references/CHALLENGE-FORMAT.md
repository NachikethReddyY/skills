# Challenge Format

Challenges prove skill. A concept is not learned until a challenge is completed. Challenges live in `{topic}/records/` as numbered records.

## Template

```md
---
tags: [topic/{name}, type/challenge]
aliases: ["Challenge: {Name}"]
---

# Challenge: {Name}

## Concept
[[Concept Name]]

## Type
{Build | Explain | Solve | Critique}

## Task
{What to do. Be specific about context and constraints.}

## Success Criteria
- {Observable outcome 1}
- {Observable outcome 2}
- {Observable outcome 3}

## Stretch Goal
{Harder variant if the user completes quickly}

## Hints
{Conditional hints — reveal only if stuck}
```

## Rules

- **One challenge per major concept.** Minor sub-concepts can share.
- **Match type to concept.** Build for implementation, Explain for conceptual, Solve for analytical, Critique for evaluation.
- **Success criteria must be observable.** "Understands it" is not criteria. "Explains from memory" is.
- **Hints are conditional.** Start with none. Reveal progressively.
