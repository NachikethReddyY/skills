---
name: teach
description: Teach the user a new skill or concept across multiple sessions.
disable-model-invocation: true
argument-hint: "What would you like to learn about?"
---

# Teach

The user wants to learn something over multiple sessions.

## When to Use

`/teach`, "teach me [topic]", "I want to learn [X]", resuming a session. Not for one-shot Q&A.

## Two Modes

- **Mode A (Obsidian vault):** workspace root is `teaching/` (or `learning/`). Use when learning a topic for its own sake inside a personal knowledge base. All files are visible, linkable via `[[wiki-links]]`.
- **Mode B (standalone / code repo):** workspace root is `.teach/` at the project or repo root. Use when learning inside a codebase where you don't want artifacts cluttering the source tree.

### Detection

1. If `teaching/` exists → Mode A, root is `teaching/`
2. If `learning/` exists → Mode A, root is `learning/`
3. If `MISSION.md` exists in current dir → Mode A, root is current dir
4. Otherwise → Mode B, create `.teach/` at the git root (walk up from current dir to find the repo root). If not in a git repo, use the current directory.

For Mode B, also check if `.learn/` already exists (legacy name) and use it if found.

## Workspace Layout

```
{root}/
├── _index_.md            # orientation — what each file does
├── notes.md              # preferences, things to watch for
├── knowledge-map.md      # collates everything across topics
├── reference/            # cheat sheets, syntax refs (HTML)
├── assets/               # reusable lesson components
├── {topic}/
│   ├── lessons/          # HTML files
│   ├── records/          # journals, feedback per lesson
│   ├── references.md     # every source used
│   ├── mission.md        # what to learn this topic
│   └── glossary.md       # terminology
└── {other-topic}/
    └── ...
```

`{root}` is `teaching/`, `learning/`, `.teach/`, or `.learn/` depending on mode.

## _index_.md

Created at `{root}/_index_.md` during setup. Lists every file and what it does, plus links to each topic. Acts as a table of contents for the workspace. The agent writes it once and updates it when new topics are added.

Format:

```md
---
tags: [type/index]
aliases: ["Teaching Workspace"]
---

# Teaching Workspace

*Orientation. What each file does and how they connect.*

## Root Files

- `_index_.md` — this file
- `notes.md` — learning preferences
- `knowledge-map.md` — cross-topic connections

## Topics

- [[{topic}/mission.md|{topic}]] — {one-line summary}
```

## Zone of Proximal Development

The core teaching principle. Always teach where the user is perfectly challenged — not bored, not intimidated. Read their records to gauge level. If too easy, accelerate or skip. If overwhelming, break into smaller steps. Records/ is the feedback loop that tells you where their ZPD is.

## Obsidian Conventions

Every file has frontmatter (`tags`, `aliases`) and `[[wiki-links]]` to related concepts. Use `#topic/{name}` and `#type/{lesson|record|mission|references|glossary}`.

**Note:** The format templates in `references/` include frontmatter in their code blocks. When creating files, always include frontmatter matching the file's type and topic.

## Design UI

Lessons are single HTML files (inline CSS + SVG). Delegate to design-ui skill.

## Workflow

**Setup** — detect mode, create `{root}/`, write `_index_.md`.

**1. Mission** — if the user already stated a topic, draft a provisional `{topic}/mission.md` based on what they said, then confirm/refine with them. Use `references/MISSION-FORMAT.md`. Each topic gets its own mission. Push for measurable outcomes.

Bad: "Learn AI." Good: "Build and deploy 3 AI agents."

**2. References** — build `{topic}/references.md` via `references/REFERENCES-FORMAT.md`. Pull sources from outside (docs, articles) and inside (codebase files, design docs). Optionally find communities (forums, subreddits, local groups) — only if the topic benefits from community discussion. Skip for narrow or well-documented topics.

**3. Lesson** — one HTML file in `{topic}/lessons/`. Teach → interactive practice → cite sources. Create the file and tell the user its path.

**4. Record** — after user engages with a lesson, write a journal entry in `{topic}/records/` via `references/RECORD-FORMAT.md`. Capture: what clicked, what didn't, improvements. This tailors the next lesson and tracks ZPD.

**5. Challenge** — assign prove-it via `references/CHALLENGE-FORMAT.md`. Not learned until completed.

**6. Teach-Back** — user explains from memory at 3 depths via `references/TEACH-BACK-FORMAT.md`.

**7. Knowledge Map** — after each lesson, update `knowledge-map.md` at root to connect everything.

**8. Reviews** — spaced at Day 1, 3, 7, 14, 30, 90 in `{topic}/records/`. Retrieval-based.

## Glossary

Per-topic in `{topic}/glossary.md` via `references/GLOSSARY-FORMAT.md`. Add terms only when understood.

## NOTES.md

One global file at `{root}/notes.md`. Stores preferences, things to watch for, and adjustments that apply across all topics. Per-topic observations go in `{topic}/records/`. Refer back before each session.
