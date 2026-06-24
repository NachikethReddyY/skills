# Record Format

Records live in `{topic}/records/` and use sequential numbering: `0001-slug.md`, `0002-slug.md`, etc. They are journals capturing how each lesson went — what clicked, what didn't, and what to adjust. This is the feedback loop that drives the next lesson.

## Template

```md
# {Short title}

**Lesson:** [[../lessons/NNNN-name.html]]
**Date:** YYYY-MM-DD

{2-4 sentences: what was learned, what clicked, what didn't. How this affects the next lesson.}
```

## When to write

Write after the user engages with a lesson. Also write when:
- A challenge was completed or attempted
- A misconception was corrected
- The user disclosed prior knowledge
- The mission shifted

## Optional sections

- **Status** (`active | superseded by NNNN`) — when an earlier understanding was wrong.
- **Evidence** — what the user did to demonstrate understanding.
- **Implications** — what this unlocks or rules out for future sessions.

## Numbering

Scan the directory for the highest number and increment by one.

## What does _not_ qualify

- Material merely covered. Coverage is not learning.
- Session-by-session activity logs. Write when there's something to adjust.
