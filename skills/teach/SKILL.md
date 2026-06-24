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

- **Mode A (Obsidian vault):** workspace root is the current directory
- **Mode B (code repo):** creates `.learn/` at repo root, references codebase docs

Detection: MISSION.md exists → A. `.learn/` exists → B. Otherwise → create `.learn/`.

## Workspace Layout

```
teaching/
├── notes.md              # preferences, things to watch for
├── knowledge-map.md      # collates everything across topics
├── reference/            # cheat sheets, syntax refs (HTML)
├── assets/
├── Tailwind/
│   ├── lessons/          # HTML files
│   ├── records/          # journals, feedback per lesson
│   ├── references.md     # every source used
│   ├── mission.md        # what to learn this topic
│   └── glossary.md       # terminology
└── react/
    ├── lessons/
    ├── records/
    ├── references.md
    ├── mission.md
    └── glossary.md
```

Mode B mirrors this inside `.learn/`.

## Zone of Proximal Development

The core teaching principle. Always teach where the user is perfectly challenged — not bored, not intimidated. Read their records to gauge level. If too easy, accelerate or skip. If overwhelming, break into smaller steps. Records/ is the feedback loop that tells you where their ZPD is.

## Obsidian Conventions

Every file has frontmatter (`tags`, `aliases`) and `[[wiki-links]]` to related concepts. Use `#topic/{name}` and `#type/{lesson|record}`.

## Design UI

Lessons are single HTML files (inline CSS + SVG). Delegate to design-ui skill.

## Workflow

**Setup** — detect mode, create structure, write `_index_.md`.

**1. Mission** — write `{topic}/mission.md` via `references/MISSION-FORMAT.md`. Interview for measurable outcomes. Each topic gets its own mission.

**2. References** — build `{topic}/references.md` via `references/REFERENCES-FORMAT.md`. Pull sources from outside (docs, articles) and inside (codebase files, design docs). Find communities (forums, subreddits, local groups) where they can ask questions and get wisdom.

**3. Lesson** — one HTML file in `{topic}/lessons/`. Teach → interactive practice → cite sources. Open it.

**4. Record** — after user engages with a lesson, write a journal entry in `{topic}/records/` via `references/RECORD-FORMAT.md`. Capture: what clicked, what didn't, improvements. This tailors the next lesson and tracks ZPD.

**5. Challenge** — assign prove-it via `references/CHALLENGE-FORMAT.md`. Not learned until completed.

**6. Teach-Back** — user explains from memory at 3 depths via `references/TEACH-BACK-FORMAT.md`.

**7. Knowledge Map** — after each lesson, update `knowledge-map.md` at root to connect everything.

**8. Reviews** — spaced at Day 1, 3, 7, 14, 30, 90 in `{topic}/records/`. Retrieval-based.

## Glossary

Per-topic in `{topic}/glossary.md` via `references/GLOSSARY-FORMAT.md`. Add terms only when understood.

## NOTES.md

Record preferences, things to watch for, any adjustments to approach. Refer back before each session.
