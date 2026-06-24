# Connections Format

`CONNECTIONS.md` captures cross-domain insights and unexpected links between concepts. This is where isolated facts become a mental model.

## Template

```md
## {Concept A} → {Concept B}

[[Concept A]] {explanation of the connection} [[Concept B]]. {Why this connection matters}.
```

## Example

```md
# Connections

## MCP Tools → API Design
[[MCP Tools]] expose capabilities through a [[JSON-RPC]] interface, which is fundamentally an [[API Design]] pattern. The same abstraction tradeoffs apply: granularity, versioning, discoverability.

## Git Commits → Event Sourcing
[[Git]] commits form an append-only log of state changes. This is the same pattern as [[Event Sourcing]] in distributed systems.

## React Rendering → Compiler Passes
[[React]]'s render → reconcile → commit phases mirror [[Compiler]] frontend → optimizer → backend. Both are pipeline architectures where each stage transforms the representation.
```

## Rules

- **Add after every lesson.** Each lesson should produce at least 3 connections.
- **Be specific.** "React is like Vue" is too shallow. "React's reconciler and Svelte's compiler solve the same problem (DOM diffing) with different tradeoffs (runtime vs. compile-time)" is a real connection.
- **Link both sides.** Every connection uses `[[wiki-link]]` for both concepts.
- **Include the "why".** The connection is interesting. Why it matters is what builds understanding.
- **Unexpected connections are the most valuable.** "Git commits resemble event sourcing" is worth more than "React looks like Vue."
