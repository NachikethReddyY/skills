# Skills Distribution System

Complete guide to your portable, shareable, updateable skills system.

---

## What You Have

### 1. Skills Repository (`/skills/`)

5 production-ready skills organized by category:

```
skills/
├── setup/
│   └── setup-your-skills/      Configures projects for skills use
├── productivity/
│   ├── grill-me/               Interview relentlessly about plans
│   ├── handoff/                Create handoff docs for new sessions
│   └── caveman/                Ultra-terse mode (~75% token savings)
└── engineering/
    └── skill-creator/          Build new skills
```

**Status:** ✅ Live and discoverable in Claude Code
**Location:** `~/.claude/skills/your-skills/`
**Current:** All 5 skills ready to use with `/command`

### 2. Skills CLI (`/skills-cli/`)

Full-featured npm package for managing skill repositories.

```
skills-cli/
├── bin/skills.js               Entry point
├── lib/
│   ├── commands/
│   │   ├── add.js             Install skills repos
│   │   ├── list.js            List installed skills
│   │   ├── remove.js          Remove skills repos
│   │   └── update.js          Update via git pull
│   └── utils.js               Helper functions
├── package.json                Published to npm
└── README.md                   CLI documentation
```

**Status:** ✅ Built and tested locally
**Commands:**
```bash
skills add yourname/skills      # Install
skills list                     # List installed
skills update [name]            # Update
skills remove [name]            # Remove
```

**Ready to publish:** `npm publish` from `skills-cli/`

---

## How It Works

### For You (Right Now)

```bash
# 1. Skills are installed locally
ls ~/.claude/skills/your-skills/skills/

# 2. Claude Code auto-discovers them
# (Type / in Claude Code and see the skills)

# 3. Use them immediately
/setup-your-skills
/grill-me
/caveman ultra
/handoff build login

# 4. Update when you add new skills
# (Edit /skills/category/skillname/SKILL.md)
# (Claude Code reloads automatically)
```

### For Users (After Publishing)

```bash
# 1. Install skills from your repo
npx skills@latest add yourname/skills

# 2. Configure the project
/setup-your-skills

# 3. Use your skills
/grill-me
/handoff

# 4. Get updates automatically
skills update yourname-skills
```

### Full Flow

```
You create skill           You add to repo
      ↓                         ↓
   SKILL.md        →    /skills/category/name/SKILL.md
      ↓
Claude Code finds it
      ↓
   Available as /command
      ↓
Publish skills repo to GitHub
      ↓
   github.com/yourname/skills
      ↓
Users install with npx skills@latest
      ↓
   ~/.claude/skills/yourname-skills/
      ↓
Users run /setup-your-skills and use your skills
      ↓
skills update pulls latest changes
      ↓
User gets new skills automatically
```

---

## Publishing Checklist

### For Skills Repository (GitHub)

- [ ] Create `github.com/yourname/skills`
- [ ] Push this entire repo
- [ ] Verify structure: `/skills/category/skillname/SKILL.md`

**Users install with:**
```bash
npx skills@latest add yourname/skills
```

### For CLI Package (npm)

- [ ] `npm login` (create account at npmjs.com first)
- [ ] `cd skills-cli`
- [ ] `npm publish`
- [ ] Verify at npmjs.com/package/skills

**Available as:**
```bash
npm install -g skills
npx skills@latest
```

### Test Everything

```bash
# Clean install
rm -rf ~/.claude/skills/your-skills

# Test CLI installation
npx skills@latest add yourname/skills

# Test discovery
skills list

# Test skills work
# (Open Claude Code and use /grill-me, etc.)
```

---

## Directory Structure

```
/Users/nr/Documents/skills/
├── skills/                     ← Your publishable skills
│   ├── setup/
│   ├── productivity/
│   └── engineering/
├── skills-cli/                 ← npm package "skills"
│   ├── bin/
│   ├── lib/
│   └── package.json
├── .git/                       ← GitHub repo
├── README.md                   ← Main documentation
├── QUICKSTART.md               ← Quick start guide
├── PUBLISH.md                  ← Publishing guide (this)
└── SYSTEM.md                   ← Full system guide (this)

Installation locations:
~/.claude/skills/your-skills/   ← Installed by CLI
  └── (symlink to /Users/nr/Documents/skills/)

Global CLI:
/usr/local/bin/skills           ← Installed by npm publish
```

---

## Key Concepts

### SKILL.md Format

Every skill is a self-contained `SKILL.md` file:

```markdown
---
name: my-skill
description: What this skill does
version: 1.0.0
category: productivity
portable: true
---

# My Skill

## Purpose
Why this skill exists...

## When to Use
When you should use this skill...

## Workflow
Step-by-step procedure...

## Output Format
What the skill produces...

## Failure Modes
What can go wrong...
```

### Skill Discovery

Claude Code automatically finds:
- All `SKILL.md` files in `~/.claude/skills/*/skills/**/SKILL.md`
- Makes them available as `/skillname` commands
- No configuration needed
- Auto-reloads when files change

### Updating Skills

**For development (local):**
```bash
# Edit /skills/category/skillname/SKILL.md
# Claude Code reloads automatically
```

**For users (after publishing):**
```bash
# Get latest from GitHub
skills update yourname-skills
```

---

## Next Steps

### Immediate (Today)

1. **Use locally:**
   ```bash
   /setup-your-skills     # Configure a project
   /grill-me             # Stress-test your design
   /caveman ultra        # See 75% token savings
   ```

2. **Create new skills:**
   ```bash
   /skill-creator        # Add tdd, diagnose, etc.
   ```

### Short Term (This Week)

1. **Create GitHub repo**
   ```bash
   git remote add origin https://github.com/yourname/skills
   git push -u origin main
   ```

2. **Publish CLI to npm**
   ```bash
   cd skills-cli
   npm login           # First time only
   npm publish
   ```

3. **Test end-to-end**
   ```bash
   npx skills@latest add yourname/skills
   skills list
   ```

### Medium Term (This Month)

- Add more skills (tdd, diagnose, to-prd, improve-architecture)
- Share in communities
- Gather feedback and iterate
- Update documentation

### Long Term (Custom Harness)

When you build your own harness:
- Use the same `SKILL.md` format
- Consume skills from this repo
- Could implement as MCP servers
- Full portability across tools

---

## Philosophy

**Three principles:**

1. **Reusable** — Each skill solves a specific, repeatable problem
2. **Portable** — Works across different agents (Claude Code, custom harness, etc.)
3. **Updatable** — Users get improvements automatically via git/npm

---

## Troubleshooting

### Skills not showing up in Claude Code

```bash
# 1. Verify installation
ls ~/.claude/skills/your-skills/skills/

# 2. Check SKILL.md format
cat ~/.claude/skills/your-skills/skills/productivity/grill-me/SKILL.md

# 3. Restart Claude Code (close and reopen)
```

### CLI not working

```bash
# Test locally
node /Users/nr/Documents/skills/skills-cli/bin/skills.js --help

# Test npm version
npm install -g /Users/nr/Documents/skills/skills-cli
skills --help
```

### Updates not pulling

```bash
# Manual update
cd ~/.claude/skills/your-skills
git pull

# Or use CLI
skills update your-skills
```

---

## Support & Community

- **Issues:** GitHub Issues on your repo
- **Contributing:** PRs welcome
- **Examples:** Share example workflows
- **Feedback:** What skills are missing?

---

## Summary

You now have:

✅ **5 production-ready skills** (locally usable)
✅ **Full-featured CLI** (ready to publish)
✅ **Complete documentation** (guides for users)
✅ **Publishing infrastructure** (GitHub + npm ready)
✅ **Portable architecture** (works with any harness)

**Next action:** Publish to GitHub and npm, then start sharing.

See [PUBLISH.md](PUBLISH.md) for step-by-step publishing instructions.
