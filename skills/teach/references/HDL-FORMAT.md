# HDL Format

`HDL.md` (High-Level Design) is the consistent architecture document for every repo the user learns in. Regardless of source (DESIGN.md, README.md, or generated from scratch), every HDL follows this format so the agent can navigate any repo consistently.

## Template

```md
# HDL: {Repo/System Name}

## Purpose
{1-2 sentences. What does this system do?}

## Architecture
{Key architectural decisions. Diagrams in ASCII or Mermaid if helpful.}

Key components:
- **{Component 1}** — {what it does, how it communicates}
- **{Component 2}** — {what it does, how it communicates}
- **{Component 3}** — {what it does, how it communicates}

## Data Flow
{How data moves through the system. Entry points, processing steps, storage.}

## Key Interfaces
{APIs, protocols, contracts. Include schemas or type signatures if available.}

## Design Decisions
| Decision | Choice | Rationale |
|----------|--------|-----------|
| {Decision} | {Choice} | {Why} |
| {Decision} | {Choice} | {Why} |

## Learning Entry Points
{Which parts of the system to learn first, in what order, and why.}

## Related
{Links to other HDLs or resources: `[[HDL: other-system]]`, `[[MISSION.md]]`}
```

## Rules

- **Same format, every repo.** The template is fixed. Fields may be empty if the information isn't available, but the structure doesn't change.
- **Populate from existing docs first.** Search order: `.learn/HDL.md` → `.learn/DESIGN.md` → `HDL.md` → `DESIGN.md` → `README.md` → `docs/DESIGN.md` → parent dir → interview the user.
- **Extract, don't guess.** Prefer information found in existing docs over parametric knowledge. Cite the source document.
- **Keep it short.** One page max. If the system needs more detail, create reference docs in `reference/` and link to them.
- **Update when understanding deepens.** As the user learns, the HDL may need revision. That's normal — update in place.
- **Mermaid diagrams are allowed.** Use ` ```mermaid ` blocks for architecture diagrams if it clarifies the design.
