---
name: teach
description: Knowledge integration system. Teach the user anything over multiple sessions using project-first learning, skill graphs with proficiency levels, spaced repetition, confusion tracking, Obsidian-style [[wiki-links]], and repo-aware workspaces (.learn/ dir or dedicated learning repo). Resolves existing design docs (DESIGN.md, README.md) and generates consistent HDLs. For HTML output, delegates styling to the design-ui skill. Use when user says "/teach", "teach me", "I want to learn", "help me understand", "walk me through", or returns to continue learning. Do not use for one-shot Q&A or quick answers.
version: 2.0.0
category: productivity
portable: true
argument-hint: "What would you like to learn about?"
---

# Teach — Knowledge Integration System

## Purpose

Transform learning from isolated lessons into a **networked knowledge base**. Every concept links to existing knowledge. Every lesson requires proof. Every skill has a tracked proficiency level. The workspace becomes a second brain — a living map of what you know, what confuses you, and what connects.

## When to Use

Use this skill when:
- User says `/teach` or "teach me [topic]"
- User says "I want to learn [topic]", "help me understand [concept]"
- User says "walk me through [process]"
- User returns to continue a previous session (MISSION.md exists)
- User asks "what should I learn next?" and a workspace is active
- User wants to review, practice, or test retention on something learned

Do not use this skill when:
- User asks a simple factual question — just answer it
- User wants a one-shot explanation without follow-through
- User is debugging, code reviewing, or doing casual problem-solving
- User explicitly says "just tell me, don't teach me"

## Inputs

- The user's stated topic or question
- All workspace files (see below)
- Obsidian-style `[[wiki-links]]` between documents — follow them to discover related knowledge before teaching

## Workspace Detection

The skill runs in two modes. Detect which one applies:

### Mode A: Dedicated Learning Repo
The current directory is itself the learning workspace (e.g. an Obsidian vault or a repo created for learning). Do this check first: if `MISSION.md` or `SKILL-GRAPH.md` exists at the repo root, use the current directory directly.

### Mode B: `.learn/` Inside a Code Repo
The user wants to learn something in an existing code repository. Create `.learn/` at the repo root. All teaching artifacts go there. This keeps learning state separate from source code.

Detection logic:
1. If `MISSION.md` or `SKILL-GRAPH.md` exists in current directory → Mode A
2. If `.learn/` directory exists → Mode B, use `.learn/` as workspace root
3. If neither exists → default to Mode B. Create `.learn/` directory. Check if `MISSION.md` or `SKILL-GRAPH.md` exists one level up (maybe user ran from inside a subdirectory)

All paths below are relative to the **workspace root** (either current dir or `.learn/`).

## Workspace Structure

```
MISSION.md               # the reason — concrete, measurable
SKILL-GRAPH.md           # every concept with proficiency level
KNOWLEDGE_MAP.md         # hierarchical map of what you know
CONFUSIONS.md            # unresolved confusions, prioritized
QUESTIONS.md             # open investigations
PATTERNS.md              # recurring patterns seen across topics
CONNECTIONS.md           # cross-domain insights and unexpected links
HDL.md                   # High-Level Design — consistent format across repos
PROJECTS/                # project-first learning drivers
LESSONS/                 # one tight concept per lesson
CHALLENGES/              # prove-it checkpoints
REVIEWS/                 # spaced repetition review sessions
TEACH-BACKS/             # explain-it-from-memory artifacts
reference/               # compressed knowledge (cheat sheets, glossaries, syntax refs)
assets/                  # reusable components
```

All inter-document links use `[[wiki-link]]` syntax. Every document links to related concepts.

## Design Document Resolution

When starting a teaching workspace inside a code repo, find existing design documentation and create a consistent HDL (High-Level Design). This grounds learning in the actual architecture of the code the user works with.

Search order (first match wins):
1. `.learn/HDL.md` — already exists from a previous session
2. `.learn/DESIGN.md` — placed in the learning workspace
3. `HDL.md` — at repo root
4. `DESIGN.md` — at repo root
5. `README.md` — at repo root (extract architecture section)
6. `docs/DESIGN.md` or `docs/HDL.md` — in docs directory
7. Parent directory (one level up) — same search pattern

If none found, generate `HDL.md` from scratch using `references/HDL-FORMAT.md`. Interview the user about the system architecture if needed.

All resolved design docs are copied or symlinked into `.learn/` as `HDL.md`. Every HDL follows the same format regardless of source so the agent can navigate any repo consistently.

## Design UI Integration

When creating HTML files (lesson pages in `LESSONS/`, reference documents in `reference/`, cheat sheets), load the **design-ui** skill from this skills repo (`skills/design/design-ui/`) and follow its styling guidance.

The design-ui skill provides Apple HIG-compliant typography, spacing, layout, and visual consistency. Use it to make:
- Lesson HTML files beautiful and readable (Tufte-style)
- Reference documents print-friendly and scanable
- Cheat sheets clean and information-dense

To invoke: load the design-ui skill, then pass it the content and desired output format. The skill handles all CSS, layout, and visual design decisions.

Do NOT inline ad-hoc CSS or make formatting decisions yourself — always delegate to design-ui for HTML output.

## Workflow

### Phase 0: Workspace Setup

1. **Detect workspace mode.** Run the detection logic from Workspace Detection. If Mode B (`.learn/` inside a code repo), create `.learn/` directory at repo root. All subsequent paths are relative to the workspace root.
2. **Resolve design documentation.** Run the Design Document Resolution search order. Copy or generate `HDL.md` into the workspace root. All HDLs follow the same format — see `references/HDL-FORMAT.md`.
3. **Load design-ui skill.** If this session will produce HTML output, pre-load the design-ui skill from `skills/design/design-ui/` so it's available for styling.

### Phase 1: Foundation

4. **Establish the mission.** If MISSION.md doesn't exist, interview: "What do you want to be able to do? What changes when you know this?" Push for measurable outcomes (e.g. "build and deploy 3 AI agents" not "learn AI"). Write MISSION.md.
5. **Map what you know.** Read existing workspace files. Build the initial SKILL-GRAPH.md and KNOWLEDGE_MAP.md from any prior learning records.
6. **Choose the next project or concept.** Project-first: design a real project and derive lessons from it. If no project fits, pick the next concept in the knowledge map that's in the zone of proximal development.

### Phase 2: Lesson Design

7. **Check confusions and questions.** Read CONFUSIONS.md and QUESTIONS.md. Prioritize unresolved confusions before introducing new material. If the user has an open question that the lesson can address, it anchors motivation.
8. **Find connections.** Before writing, read PATTERNS.md, CONNECTIONS.md, and the knowledge map. Identify at least 3 existing concepts the new material links to. Every lesson must end with explicit `[[wiki-link]]` connections.
9. **Design the lesson.** One tight concept. Ground it in the project or mission. Stay within working memory limits. Give one tangible win.
10. **Check assets/ for reuse.** Read assets/. Reuse components before writing new ones.
11. **Create the lesson.** Write to `LESSONS/NNNN-dash-case-name.md` (or `.html` if rich formatting is needed). Must include:
    - The concept taught
    - Citations to trusted resources
    - `## Connections` section with `[[wiki-links]]` to at least 3 existing concepts
    - `## This reminds me of...` section for loose analogies
    - A primary source recommendation
    - A prompt for follow-up questions
    If creating HTML output, delegate styling to the **design-ui skill** — load it and pass the content for layout/typography decisions.

### Phase 3: Proof

12. **Assign a prove-it challenge.** Write a challenge in `CHALLENGES/NNNN-name.md`. One of:
    - Build something using the concept
    - Explain it from memory (record in TEACH-BACKS/)
    - Solve a novel problem
    - Critique a bad example
    The user must complete this before the concept is marked past "Understand" on the skill graph.
13. **Update the skill graph.** After the user proves understanding, update SKILL-GRAPH.md with their proficiency level.

### Phase 4: Integration

14. **Write connections.** Update CONNECTIONS.md with any cross-domain links the lesson surfaced. Update PATTERNS.md if the concept matches a recurring pattern.
15. **Update the knowledge map.** Add the concept to KNOWLEDGE_MAP.md under its parent categories.
16. **Update confusions and questions.** If the lesson resolved a confusion, strike it from CONFUSIONS.md. If it raised new questions, add them to QUESTIONS.md.

### Phase 5: Retention

17. **Schedule spaced reviews.** Add entries to `REVIEWS/` at intervals: Day 1, Day 3, Day 7, Day 14, Day 30, Day 90. Each review is retrieval-based (answer from memory, never re-read).
18. **Schedule a teach-back.** Add a teach-back challenge in `TEACH-BACKS/` for Day 7: explain the concept at 3 depths (30 seconds, 5 minutes, 15 minutes).
19. **Schedule knowledge compression.** Every 4-6 weeks, run a compression exercise: reduce the last 10 lessons into 1 page, then 10 bullets, then 3 principles, then 1 sentence.

### Phase 6: Maintenance

20. **Cross-domain review.** Each review session, additionally ask: "Where else does this pattern appear? What does this connect to that you wouldn't expect?"
21. **Monthly synthesis.** Generate a SYNTHESIS report: What did I learn? What themes appeared? What assumptions changed? What still doesn't make sense?

## Proficiency Levels (Skill Graph)

Every concept in SKILL-GRAPH.md is tracked at one of these levels:

| Level | Meaning | Evidence Required |
|-------|---------|-------------------|
| **Understand** | Can explain what it is | Read the lesson |
| **Explain** | Can teach it to someone else | Teach-back recorded |
| **Apply** | Can use it in a real context | Challenge completed |
| **Modify** | Can adapt it to novel situations | Unfamiliar problem solved |
| **Teach** | Can teach it from memory at multiple depths | Full teach-back passed |

Example:

```md
## React Query

- [x] Understand
- [x] Explain
- [x] Apply
- [ ] Modify
- [ ] Teach

Connections: [[HTTP Caching]], [[Async JavaScript]], [[SWR]]
```

The skill graph is the source of truth for the zone of proximal development. Don't advance past "Apply" until the user has demonstrated proof.

## Knowledge Map (`KNOWLEDGE_MAP.md`)

A hierarchical representation of everything the user knows. Updated after every lesson.

```md
# Knowledge Map

AI Engineering
├── MCP
│   ├── JSON-RPC
│   ├── Tool Calling
│   ├── Resources
│   └── Prompts
├── Agents
│   ├── Tool Use
│   └── Planning
└── RAG
    ├── Chunking
    └── Embeddings
```

Every entry links to its skill-graph entry: `→ [[SKILL-GRAPH.md#MCP]]`.

## Connections (`CONNECTIONS.md`)

Captures cross-domain insights. Every lesson must produce at least 3.

```md
# Connections

## MCP Tools → API Design
[[MCP Tools]] expose capabilities through a [[JSON-RPC]] interface, which is fundamentally an [[API Design]] pattern. The same abstraction tradeoffs apply: granularity, versioning, discoverability.

## Git Commits → Event Sourcing
[[Git]] commits form an append-only log of state changes. This is the same pattern as [[Event Sourcing]] in distributed systems.
```

## Recurring Patterns (`PATTERNS.md`)

Track patterns that appear across multiple domains. The goal: stop learning technologies and start recognizing patterns.

```md
# Patterns

## Abstraction Layer
Seen in: [[React Components]], [[MCP Tools]], [[Database ORMs]], [[Operating Systems]]
The same tradeoff: hide complexity vs. leak abstraction.

## Producer / Consumer
Seen in: [[Kafka]], [[Event Queues]], [[React State]], [[AI Agent Workflows]]
Decouple producers from consumers through a channel/buffer.
```

## Confusions (`CONFUSIONS.md`)

Unresolved confusions, prioritized. Lessons address these before introducing new material.

```md
# Confusions

## High Priority
- Why does [[MCP]] use [[JSON-RPC]] instead of [[REST]]?
- What's the difference between [[MCP Tools]] and [[MCP Resources]]?

## Lower Priority
- When should prompts become tools?
```

## Questions (`QUESTIONS.md`)

Open investigations — questions the user is actively exploring.

```md
# Questions I'm Investigating

- Why are [[AI Agents]] structured as tools?
- Why does [[JSON-RPC]] keep appearing across different systems?
- What makes some abstractions durable while others collapse?
```

## Spaced Repetition Schedule

Every lesson spawns reviews at: Day 1, Day 3, Day 7, Day 14, Day 30, Day 90.

Each review is retrieval-based:

❌ Re-read the lesson
❌ Review your notes
✅ Answer questions from memory
✅ Explain the concept without looking
✅ Solve a related problem

Review files go in `REVIEWS/YYYY-MM-DD-concept-name.md`.

## Prove-It Challenges (`CHALLENGES/`)

A challenge is one of:
- **Build**: create something using the concept
- **Explain**: teach it from memory (record in TEACH-BACKS/)
- **Solve**: solve a novel problem using the concept
- **Critique**: identify what's wrong with a bad example

Format:

```md
# Challenge: {Name}

## Concept
[[Concept Name]]

## Task
{What the user needs to do}

## Success Criteria
- {Observable outcome 1}
- {Observable outcome 2}

## Stretch Goal
{Harder variant if the user breezes through}
```

## Teach-Backs (`TEACH-BACKS/`)

The final exam. Every major topic:

```md
# Teach-Back: {Concept}

## 30 Seconds
{The elevator pitch — what it is, why it matters}

## 5 Minutes
{The overview — key concepts, how it works, when to use it}

## 15 Minutes
{The deep dive — mechanics, tradeoffs, edge cases, history}
```

If you can explain it clearly at multiple depths, you understand it.

## Knowledge Compression

Every 4-6 weeks:

```md
## Compression: Lessons {N}-{M}

### 1 Page
{Full but condensed}

### 10 Bullet Points
{The essentials}

### 3 Principles
{The core ideas}

### 1 Sentence
{The essence}
```

Compression reveals understanding better than expansion.

## Monthly Synthesis

Generate a synthesis report covering:
- What was learned
- Themes that kept appearing
- Ideas that became more important than expected
- Assumptions that changed
- What still doesn't make sense
- Connections discovered across domains

## Mission Format

Use `references/MISSION-FORMAT.md`. Missions must be measurable:

❌ "Learn AI engineering"
✅ "Build and deploy 3 AI agents. Understand MCP deeply enough to implement a custom transport. Contribute to one open-source AI tooling repo."

Every lesson answers: "How does this help achieve the mission?"

## Glossary

Maintain `GLOSSARY.md` using the format in `references/GLOSSARY-FORMAT.md`. Use glossary terms consistently in all lessons. When a term appears in a lesson, it links to its glossary entry: `[[GLOSSARY.md#term-name]]`.

## Philosophy

The three pillars still apply:

- **Knowledge** — from trusted, high-trust resources
- **Skills** — from project-driven interactive lessons with tight feedback
- **Wisdom** — from communities and real-world application

But the connective tissue between them — the skill graph, connections, patterns, confusions — is what transforms accumulation into expertise.

### Fluency vs Storage Strength

Fluency (in-the-moment retrieval) is not mastery. Storage strength (long-term retention) is the real goal. Design for desirable difficulty: retrieval practice, spacing, interleaving.

## Quality Bar

A session is successful when:
- MISSION.md exists with measurable outcomes
- A lesson was created or the user's understanding was advanced
- The concept was added to SKILL-GRAPH.md with a proficiency level
- At least 3 `[[wiki-links]]` connections were made to existing knowledge
- A challenge was assigned (or completed) for proof of skill
- Confusions and questions were updated
- A spaced review was scheduled
- The knowledge map was updated

## Failure Modes

Avoid:
- Teaching without a mission — lessons drift
- Teaching without linking — isolated facts don't stick
- Skipping proof — "I read it" is not "I learned it"
- Skipping reviews — without spaced repetition, 90% is gone in a week
- Skipping confusion tracking — unresolved confusions compound
- Skipping the knowledge map — without hierarchy, connections are random
- Cross-domain reviews without genuine effort — surface-level analogies waste time
- Overloading one lesson — working memory is small
- Forgetting `[[wiki-links]]` between documents — the network is the point

## Improvement Loop

If the user disengages or the system stalls:

1. Check if the mission is still accurate — update MISSION.md
2. Check if confusions are piling up — address the highest-priority one
3. Check if challenges are too hard or too easy — adjust ZPD
4. Check if reviews are backlogged — consolidate or re-space
5. Check if connections are forced — not every concept connects to 3 things immediately
6. Revise the approach, update NOTES.md with findings
