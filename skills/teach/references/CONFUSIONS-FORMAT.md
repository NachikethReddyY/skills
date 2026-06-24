# Confusions Format

`CONFUSIONS.md` tracks unresolved confusions, prioritized by importance. Lessons address the highest-priority confusion before introducing new material.

## Template

```md
# Confusions

## High Priority
- {Specific unresolved question} — related to [[Related Concept]]
- {Specific unresolved question} — related to [[Related Concept]]

## Lower Priority
- {Question that can wait} — related to [[Related Concept]]
```

## Example

```md
# Confusions

## High Priority
- Why does [[MCP]] use [[JSON-RPC]] instead of [[REST]]?
- What's the difference between [[MCP Tools]] and [[MCP Resources]]?

## Lower Priority
- When should prompts become tools rather than resources?
```

## Rules

- **Be specific.** "I don't get MCP" is too vague. "Why does MCP use JSON-RPC instead of REST?" is actionable.
- **Link to related concepts.** Every confusion should reference the concepts involved via `[[wiki-links]]`.
- **Prioritize.** High priority = blocking real work or understanding. Lower priority = curiosity that can wait.
- **Strike through resolved confusions.** When a lesson resolves one, strikethrough it: ~~resolved confusion~~.
- **Don't delete.** Keep the history of resolved confusions visible — they predict future stumbling blocks.
- **Add freely.** Confusions are not failures. They are the most valuable signal for what to teach next.
