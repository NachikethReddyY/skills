# Skills: Portable Agent Operating Procedures

Reusable operating procedures for coding agents (Claude Code, Hermes, OpenCode, Codex, etc.).

This is a portable execution layer — not a prompt dump. Each skill is a battle-tested procedure for solving a specific problem reliably.

## Quick Start

Install these skills into your `~/.claude/skills/` directory, then use them with `/command`:

```bash
# Option 1: Clone to your skills directory
git clone https://github.com/yourusername/skills ~/.claude/skills/your-skills

# Option 2: Symlink to this directory (for development)
ln -s /path/to/this/repo ~/.claude/skills/your-skills
```

Then in Claude Code, run:
```
/setup-your-skills
```

This configures your project (issue tracker, docs location, domain language) so all other skills work seamlessly.

---

## Skills by Category

### Setup (Run First)

| Skill | Purpose | Use When |
|-------|---------|----------|
| [`setup-your-skills`](skills/setup/setup-your-skills/SKILL.md) | Configure project for skills use | First time using skills in a repo |

### Productivity

| Skill | Purpose | Use When |
|-------|---------|----------|
| [`grill-me`](skills/productivity/grill-me/SKILL.md) | Interview relentlessly about plans | You want to stress-test a design |
| [`handoff`](skills/productivity/handoff/SKILL.md) | Create handoff docs for new sessions | Spinning off subtasks to separate agents |
| [`caveman`](skills/productivity/caveman/SKILL.md) | Ultra-terse communication (~75% token reduction) | Need to fit more in context window |

### Engineering

| Skill | Purpose | Use When |
|-------|---------|----------|
| [`skill-creator`](skills/engineering/skill-creator/SKILL.md) | Create new skills | Building new operating procedures |

---

## Philosophy

Skills exist when workflows are **repeated + specialized + high-value + procedural**.

Each skill solves a specific failure mode:

1. **Misalignment** → use `/grill-me` to reach shared understanding before building
2. **Verbosity** → use `/caveman` to cut 75% of tokens while keeping technical accuracy
3. **Context bloat** → use `/handoff` to spin off subtasks without diluting current session
4. **Skill gaps** → use `/skill-creator` to build new operating procedures

---

## Architecture

```
skills/
├── setup/
│   └── setup-your-skills/
│       └── SKILL.md
├── productivity/
│   ├── grill-me/
│   │   └── SKILL.md
│   ├── handoff/
│   │   └── SKILL.md
│   └── caveman/
│       └── SKILL.md
├── engineering/
│   └── skill-creator/
│       └── SKILL.md
└── README.md
```

Each skill is self-contained in its own directory. A skill is at minimum a `SKILL.md` file with:
- Frontmatter (name, description, version, category, portable flag)
- Purpose
- When to Use
- Workflow/steps
- Output format
- Failure modes
- Quality bar

---

## Using Skills

**In Claude Code:**

```
/setup-your-skills          (run once)
/grill-me                   (interview about your plan)
/handoff build login flow   (create handoff for subtask)
/caveman ultra              (switch to ultra-terse mode)
```

**Agents use skills intelligently:**
- Skills are discoverable because they have clear descriptions
- Skills chain together (e.g., grill-me outputs feed into plans)
- Each skill documents what the next skill should be

---

## Porting to Custom Harnesses

These skills are **harness-agnostic**. To use them in your own agent harness:

1. Read the SKILL.md files (they're documented procedures, not code)
2. Implement the workflow in your harness's language
3. Hook up the I/O (user input → workflow → output)

The `portable: true` flag in frontmatter indicates skills ready for custom harness implementation.

---

## Contributing

To add new skills:

1. Create a directory: `skills/category/skill-name/`
2. Write `SKILL.md` following the standard format
3. Update this README's skill table
4. Test in Claude Code: `/skill-name`

---

## Roadmap (Future Skills)

**Engineering:**
- `tdd` — test-driven development with red-green-refactor loop
- `diagnose` — disciplined debugging workflow
- `triage` — classify issues through state machines
- `improve-architecture` — find deepening opportunities in codebases

**Productivity:**
- `grill-with-docs` — grill + domain language + ADR documentation
- `to-prd` — turn conversation into PRD
- `to-issues` — break plans into vertical slices + GitHub issues

**Project:**
- `zoom-out` — context for understanding unfamiliar code
- `prototype` — throwaway prototypes for design validation

---

## License

MIT. Use freely, adapt as needed.

---

**Made for coding agents. Built for human intent.**
