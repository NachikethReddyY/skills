# Review Schedule Format

Reviews are retrieval-based practice sessions scheduled at increasing intervals. They convert fluency into storage strength. Review files live in `REVIEWS/YYYY-MM-DD-concept-name.md`.

## Schedule

Every lesson spawns reviews at:

- Day 1
- Day 3
- Day 7
- Day 14
- Day 30
- Day 90

## Template

```md
# Review: {Concept} — {Date}

## Retrieval Questions

Answer from memory without looking at the lesson.

1. {Question about the concept}
2. {Question about a key detail}
3. {Question that requires applying the concept}

## Teach-Back Attempt

Try to explain the concept in 2-3 sentences. Then rate your confidence (1-5).

## Cross-Domain Connection

Where else does this pattern appear? What does this remind you of that isn't directly related?

## Result

- Pass / Partial / Fail
- Notes: {what was strong, what was weak}
- Next review: {reschedule if failed}
```

## Example

```md
# Review: JSON-RPC — 2026-01-07

## Retrieval Questions

1. What are the three required fields in a JSON-RPC 2.0 request?
2. What error code is used for "method not found"?
3. When would you use a notification instead of a request?

## Teach-Back Attempt

JSON-RPC is a stateless protocol where clients call methods on servers using JSON. Each request has a method, params, and an id. The server responds with a matching id and either a result or error.

Confidence: 4/5

## Cross-Domain Connection

This is like calling a function in any programming language — JSON-RPC is just making that callable over a network. The same pattern as gRPC, but simpler and text-based.

## Result

Pass
Notes: Strong on basics. Forgot -32601 code (method not found).
Next review: Day 14
```

## Rules

- **Retrieval only.** No re-reading. If the user can't answer, that's useful data — don't reveal the answer immediately, note the gap and revisit.
- **Three questions minimum.** One recall (fact), one detail (specific), one application (synthesis).
- **Include cross-domain connection.** This is the most valuable part — it forces networked recall.
- **Rate result.** Pass = all questions answered correctly. Partial = some answers but gaps. Fail = couldn't answer most. Schedule next review accordingly.
- **Revise skill graph on fail.** If the user can't answer, drop the concept's proficiency level and schedule a re-lesson.
