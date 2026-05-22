# Skills

Reusable operating procedures for AI coding agents. Each skill is a battle-tested workflow for solving a specific problem reliably across different agents and harnesses.

Unlike prompt dumps, skills are **procedural** — they guide agents through proven workflows with clear inputs, outputs, and failure modes.

## Installation

### With CLI (Recommended)

```bash
npx nachikethreddyy-skills@latest add NachikethReddyY/skills
```

This installs to `~/.claude/skills/NachikethReddyY-skills/` and makes all skills available in Claude Code automatically.

### Manual

```bash
git clone https://github.com/NachikethReddyY/skills ~/.claude/skills/your-skills
```

## Quick Start

Once installed, skills are available as `/command` in Claude Code:

```bash
# Configure your project first
/setup-your-skills

# Use any skill
/grill-me                    # Interview about your plan
/handoff build login flow    # Create handoff for subtask
/caveman ultra               # Ultra-terse mode (~75% token savings)
/skill-creator               # Build new skills
```

That's it. Skills auto-discover and work immediately.

## Available Skills

### Setup

| Skill | Purpose |
|-------|---------|
| **[setup-your-skills](skills/setup/setup-your-skills/SKILL.md)** | Configure project (issue tracker, docs, domain language). Run once per repo. |

### Productivity

| Skill | Purpose |
|-------|---------|
| **[grill-me](skills/productivity/grill-me/SKILL.md)** | Get interviewed relentlessly about your plan until every decision is aligned. |
| **[handoff](skills/productivity/handoff/SKILL.md)** | Create handoff documents for spinning subtasks off to separate agent sessions. |
| **[caveman](skills/productivity/caveman/SKILL.md)** | Ultra-compressed communication mode. Cuts ~75% tokens while keeping full technical accuracy. Supports 6 intensity levels. |

### Engineering

| Skill | Purpose |
|-------|---------|
| **[skill-creator](skills/engineering/skill-creator/SKILL.md)** | Create new skills following the standard SKILL.md format. |

## How It Works

### For Users

1. **Install**: `npx nachikethreddyy-skills@latest add NachikethReddyY/skills`
2. **Configure**: `/setup-your-skills` (project-specific config)
3. **Use**: `/skill-name` to invoke any skill
4. **Update**: `nachikethreddyy-skills update` to pull latest

### For Builders

Each skill is a `SKILL.md` file with:

```markdown
---
name: skill-name
description: What this does
version: 1.0.0
category: productivity
portable: true
---

# Skill Name

## Purpose
Why this exists...

## When to Use
When you should use it...

## Workflow
Step-by-step procedure...

## Output Format
What it produces...

## Failure Modes
What can go wrong...

## Quality Bar
How to know it worked...
```

Skills are:
- **Self-contained** — each skill lives in its own directory
- **Documented** — procedures are explicit, not implicit
- **Discoverable** — Claude Code auto-finds all SKILL.md files
- **Portable** — same format works across harnesses
- **Chainable** — skills reference each other

## Philosophy

Skills exist when workflows are **repeated + specialized + high-value + procedural**.

### Problems They Solve

1. **Misalignment** → `/grill-me`
   - Agents dive in without understanding requirements
   - Solution: Interview until every branch of the decision tree is resolved

2. **Verbosity** → `/caveman`
   - Agents use 20 words where 1 will do
   - Solution: Ultra-terse mode with full technical accuracy maintained

3. **Context Bloat** → `/handoff`
   - Long sessions dilute context and slow down agents
   - Solution: Create handoff documents for subtasks in separate sessions

4. **Skill Gaps** → `/skill-creator`
   - Common workflows aren't formalized
   - Solution: Capture them as reusable skills

## Architecture

```
skills/
├── setup/                          # Configuration
│   └── setup-your-skills/
│       └── SKILL.md
├── productivity/                   # Communication & workflow
│   ├── grill-me/
│   ├── handoff/
│   └── caveman/
├── engineering/                    # Development procedures
│   └── skill-creator/
└── docs/
    ├── CONTEXT.md                  # Project domain language
    └── adr/                        # Architectural decisions
```

## Extending Skills

### Add a New Skill

1. Create directory: `skills/category/skill-name/`
2. Write `SKILL.md` with full documentation
3. Test in Claude Code: `/skill-name`
4. Update root README

### Example: Adding `/tdd` Skill

```bash
mkdir -p skills/engineering/tdd
cat > skills/engineering/tdd/SKILL.md << 'EOF'
---
name: tdd
description: Test-driven development with red-green-refactor loop
version: 1.0.0
category: engineering
portable: true
---

# TDD

## Purpose
Build features one vertical slice at a time using test-driven development...

[rest of SKILL.md]
EOF
```

Then update the README's skill table.

## Roadmap

**Engineering** (in progress):
- `tdd` — red-green-refactor loop for reliable feature development
- `diagnose` — systematic debugging workflow for hard bugs
- `triage` — classify issues through decision trees
- `improve-architecture` — find deepening opportunities in codebases

**Productivity** (in progress):
- `grill-with-docs` — grilling + domain language capture + ADR documentation
- `to-prd` — turn conversations into product requirements documents
- `to-issues` — break plans into vertical slices for GitHub

**Project** (planned):
- `zoom-out` — explain code in broader system context
- `prototype` — throwaway prototypes for design validation

## Using in Custom Harnesses

These skills are **harness-agnostic**. To implement in your own agent harness:

1. Read the `SKILL.md` files (they're documented procedures, not code)
2. Translate the workflow to your harness's language
3. Hook up inputs (user input) and outputs (result)

The `portable: true` flag indicates skills designed for this.

## Contributing

Contributions welcome. To propose a new skill:

1. **Validate the need** — is this workflow repeated + specialized + high-value?
2. **Document thoroughly** — SKILL.md should be usable without codebase context
3. **Test in Claude Code** — ensure the workflow actually works
4. **Update README** — add to skill table and roadmap if planning future work

## Documentation

- **[QUICKSTART.md](QUICKSTART.md)** — Get started in 5 minutes
- **[PUBLISH.md](PUBLISH.md)** — How to publish and distribute skills
- **[SYSTEM.md](SYSTEM.md)** — Complete system architecture

## FAQ

**Q: How do agents discover skills?**
A: Claude Code automatically scans `~/.claude/skills/` for `SKILL.md` files and makes them available as `/command`.

**Q: Can I use these with other agents?**
A: Yes. Skills are format-agnostic. Any agent that understands SKILL.md can implement them. The `portable: true` flag indicates which skills are designed for this.

**Q: Do I need to modify skills for my workflow?**
A: You can! Fork the repo, customize skills to your needs, and install your version instead.

**Q: How do I update to the latest skills?**
A: Run: `nachikethreddyy-skills update NachikethReddyY-skills`

**Q: What if I want to build my own skills?**
A: Use `/skill-creator` to scaffold a new skill, or copy the `SKILL.md` template and start writing.

## License

MIT — Use freely, adapt, share.

---

**Built for coding agents. Designed for human intent.**

For questions or feedback: [GitHub Issues](https://github.com/NachikethReddyY/skills/issues)
