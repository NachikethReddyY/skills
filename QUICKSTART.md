# Quick Start: Your Skills Are Live 🚀

Your skills are installed and discoverable in Claude Code. Here's what you can do right now:

## Available Skills (5)

Run these immediately with `/command`:

### 1. Setup (Required First)

```
/setup-your-skills
```

Configure your project. Asks for:
- Project name
- Issue tracker (GitHub/Linear/local)
- Docs location
- Domain language

Creates `.claude/config.local.json` and `CONTEXT.md`.

### 2. Productivity

#### Grill Me
```
/grill-me
```
Get interviewed relentlessly about your plan until you've thought through every branch of the decision tree.

#### Handoff
```
/handoff [description]
```
Create a handoff document for spinning off a subtask to a separate agent session.

Example:
```
/handoff implement login form UI
```

#### Caveman
```
/caveman [level]
```
Switch to ultra-terse communication mode. Cuts ~75% of tokens while keeping technical accuracy.

Levels: `lite`, `full` (default), `ultra`, `wenyan-lite`, `wenyan-full`, `wenyan-ultra`

Example:
```
/caveman ultra
```

### 3. Engineering

#### Skill Creator
```
/skill-creator
```
Create new skills following the standard format.

---

## What Happens Next

### Phase 1: Try It Out (Today)
1. Run `/setup-your-skills` in a project
2. Try `/grill-me` on an upcoming feature
3. Try `/caveman ultra` to see token savings
4. Try `/handoff` to spin off a subtask

### Phase 2: Build More (This Week)
As you use these, you'll see where your workflow needs new skills. Use `/skill-creator` to add them:
- `tdd` — test-driven development workflow
- `diagnose` — debugging procedure
- `to-prd` — turn conversations into PRDs
- `improve-architecture` — find code improvements

### Phase 3: Share (Eventually)
When these skills work for you, publish to GitHub as a public skills repo (like Matt Pocock's). Others can install the same way:
```bash
npx skills add yourname/skills
```

---

## File Structure

```
~/.claude/skills/your-skills/
├── skills/
│   ├── setup/
│   │   └── setup-your-skills/SKILL.md
│   ├── productivity/
│   │   ├── grill-me/SKILL.md
│   │   ├── handoff/SKILL.md
│   │   └── caveman/SKILL.md
│   └── engineering/
│       └── skill-creator/SKILL.md
└── README.md
```

Claude Code automatically discovers all `SKILL.md` files.

---

## Next Step

Open Claude Code and type:
```
/setup-your-skills
```

Then try `/grill-me` on any upcoming change.

---

**You now have a portable, shareable skills system. Start using it.**
