# Patterns Format

`PATTERNS.md` tracks recurring patterns that appear across multiple domains. The goal: stop learning technologies and start recognizing patterns.

## Template

```md
## {Pattern Name}

Seen in: [[Domain A]], [[Domain B]], [[Domain C]]
{1-2 sentence description of the pattern and why it recurs}

Key insight: {What understanding this pattern unlocks}
```

## Example

```md
## Abstraction Layer

Seen in: [[React Components]], [[MCP Tools]], [[Database ORMs]], [[Operating Systems]]
A boundary that hides implementation complexity behind a simplified interface. Every abstraction leaks eventually.

Key insight: The tradeoff is always the same — developer ergonomics vs. control. Choose based on how often you need to escape.

## Producer / Consumer

Seen in: [[Kafka]], [[Event Queues]], [[React State]], [[AI Agent Workflows]]
One component produces data/events, another consumes them. A channel or buffer decouples them.

Key insight: The decoupling is the point. Producers and consumers can evolve independently as long as the interface between them is stable.
```

## Rules

- **Add a pattern only when you've seen it in at least 2 domains.** One occurrence is an observation; two is the start of a pattern.
- **Link every occurrence.** Each "Seen in" entry is a `[[wiki-link]]` to the concept in the skill graph.
- **Capture the key insight.** The pattern itself is descriptive. The insight is what makes it useful.
- **Review quarterly.** As you learn more, patterns may need updating or clarification.
