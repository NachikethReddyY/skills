# REFERENCES.md Format

`REFERENCES.md` lives at `{topic}/references.md`. It is the curated set of sources used in this topic's lessons — pulled from outside (docs, articles, videos) and inside (codebase files, design docs). Include communities where the user can ask questions.

## Structure

```md
---
tags: [topic/{name}, type/references]
aliases: ["{Topic} References"]
---

# {Topic} References

## Knowledge

- [Title — Author](https://example.com)
  What it covers. When to reach for it.

- [Article: "Title" — Author](https://example.com)
  What it covers. When to reach for it.

## Wisdom (Communities)

- [r/subreddit](https://reddit.com/r/subreddit)
  What kind of questions to ask here.

- Local: {meetup or class name}
  Use for: real-time feedback.
```

## Rules

- **High-trust only.** Prefer primary sources, recognised experts, peer-reviewed work.
- **Annotate every entry.** A bare link is useless in three months.
- **Group by Knowledge / Wisdom.**
- **Surface gaps explicitly.** If no good source exists for something the mission needs, write a `## Gaps` section.
- **Prune ruthlessly.** Remove sources that turned out wrong or shallow.
- **Record community preferences.** If the user opted out of communities, note it.
