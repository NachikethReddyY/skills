---
name: setup-your-skills
description: Configure your project to use the skills repo. Run once per repo. Sets up issue tracker, docs location, domain language, and project defaults.
version: 1.0.0
category: setup
portable: true
---

# Setup Your Skills

## Purpose

Configure your project to use this skills repo. Creates `.claude/config.local.json`, `CONTEXT.md`, and `docs/adr/` directory structure.

Run this once per repository before using other skills.

## When to Use

Run `/setup-your-skills` the first time you want to use skills in a new project.

## Workflow

1. Ask: What's this project called?
2. Ask: Issue tracker? (GitHub, Linear, local files)
3. Ask: Docs location? (default: `docs/`)
4. Ask: What's the key domain language or jargon agents should know?
5. Create `.claude/config.local.json` with answers
6. Create `CONTEXT.md` with domain language
7. Create `docs/adr/` and `.gitkeep`
8. Confirm setup is complete

## Output

After setup, your repo will have:

```
project-root/
├── .claude/
│   └── config.local.json          (tracker, docs location, team defaults)
├── docs/
│   ├── CONTEXT.md                 (domain language, key concepts)
│   └── adr/
│       └── .gitkeep
├── README.md
└── ...
```

## config.local.json Format

```json
{
  "project_name": "your-project",
  "issue_tracker": "github|linear|local",
  "docs_root": "docs/",
  "domain_language": "Key terms and concepts agents should know"
}
```

## CONTEXT.md Format

```markdown
# Project Context

## Domain Language

**Materialization:** When a logical item becomes real (filesystem, database entry, etc.)
**Cascade:** When a change to parent propagates to children
**Triage:** Classification of issues by priority/type/impact

## Key Decisions

[Will be populated as you make decisions with other skills]

## Architecture Overview

[Will be populated as you document the system]
```

## Quality Bar

Setup is complete when:
- `.claude/config.local.json` exists and is valid JSON
- `CONTEXT.md` exists with at least 3-5 domain terms
- `docs/adr/` directory exists
- User confirms they're ready to use skills

## Failure Modes

Avoid:
- Skipping domain language (agents get verbose without shared terminology)
- Using vague project names (use the actual repo name)
- Putting docs in a hard-to-find location
- Forgetting to commit `CONTEXT.md` (it's documentation, not config)

## Next Steps

After setup, you can now use:
- `/grill-me` — Interview about plans
- `/handoff` — Create handoff documents
- `/caveman` — Ultra-terse communication mode
- `/skill-creator` — Create new skills
