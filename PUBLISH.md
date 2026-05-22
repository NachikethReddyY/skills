# Publishing Guide

This repo contains two publishable components:

## 1. Skills Repository (`/skills/`)

Your reusable agent skills, organized and ready to install.

**Published as:** A GitHub repository (github.com/yourname/skills)

**Install with:** `npx skills@latest add yourname/skills`

**Current skills:**
- setup-your-skills
- grill-me
- handoff
- caveman
- skill-creator

## 2. Skills CLI (`/skills-cli/`)

The CLI tool that installs and manages skills repositories.

**Published as:** npm package called `skills`

**Install with:** `npm install -g skills` or `npx skills@latest`

---

## Publishing Workflow

### Step 1: Publish Skills Repository to GitHub

```bash
cd /Users/nr/Documents/skills
git remote add origin https://github.com/yourname/skills
git branch -M main
git push -u origin main
```

### Step 2: Publish CLI to npm

```bash
cd skills-cli

# Login to npm (first time only)
npm login

# Verify version in package.json (currently 1.0.0)
# Update version if making a release:
npm version patch  # or minor, major

# Publish to npm
npm publish

# If you want to publish under a scoped package (@yourname/skills):
# Update package.json: "name": "@yourname/skills"
# npm publish --access public
```

### Step 3: Test Installation

```bash
# Clear local installation
rm -rf ~/.claude/skills/your-skills

# Test global install
npm install -g skills

# Or test with npx
npx skills@latest add yourname/skills

# Verify
skills list
```

---

## How It Works Together

### User Perspective

```bash
# Install skills once
npx skills@latest add yourname/skills

# See what's available
skills list

# Update anytime
skills update yourname-skills

# Use in Claude Code
/setup-your-skills      (configure project)
/grill-me              (use a skill)
/caveman               (use another skill)
```

### What Happens Behind the Scenes

1. **`npx skills@latest add yourname/skills`**
   - Downloads the CLI from npm registry
   - Clones your skills repo from GitHub
   - Symlinks to `~/.claude/skills/yourname-skills/`

2. **Claude Code discovers skills**
   - Automatically finds all `SKILL.md` files
   - Makes them available as `/command`

3. **`skills update yourname-skills`**
   - Runs `git pull` in the cloned repo
   - Users get latest skills automatically

---

## Repository Naming

**For skills repo (GitHub):**
- Recommended: `yourname/skills` (e.g., `mattpocock/skills`)
- What users install: `npx skills@latest add yourname/skills`
- Installs to: `~/.claude/skills/yourname-skills/`

**For CLI package (npm):**
- Must be: `skills` (global, singular)
- Install: `npm install -g skills` or `npx skills@latest`
- Multiple authors publish the same CLI (coordination via GitHub)

---

## Package Publishing Checklist

Before publishing:

- [ ] Update version in `skills-cli/package.json`
- [ ] Update `skills-cli/README.md` with latest info
- [ ] Ensure all skills are documented in main `/README.md`
- [ ] Test `npm run test` (if tests added)
- [ ] Commit changes to git
- [ ] Tag release: `git tag v1.0.0`

Publishing:

- [ ] Run `npm login` (first time, or if needed)
- [ ] Run `npm publish` from `skills-cli/` directory
- [ ] Verify on npmjs.com/package/skills
- [ ] Test with `npx skills@latest --help`

Updating:

- [ ] Update version in `package.json`
- [ ] Run `npm publish`
- [ ] Users get updates automatically with `npm install -g skills@latest`

---

## Distribution Architecture

```
github.com/yourname/skills (This repo)
├── /skills/                (your skills - pulled by CLI)
│   ├── setup/
│   ├── productivity/
│   └── engineering/
├── /skills-cli/            (the CLI tool - published to npm)
│   └── published as: npm package "skills"
├── README.md               (documentation)
└── PUBLISH.md              (this file)

npm registry
└── skills                  (the CLI from /skills-cli/)
    └── installed globally or with npx
    └── users run: npx skills@latest add yourname/skills
```

---

## Versioning Strategy

**Skills Repository (GitHub):**
- Tag releases: `v1.0.0`, `v1.1.0`, etc.
- Users get latest with automatic `skills update`
- No version pinning needed

**CLI Package (npm):**
- Semantic versioning: `1.0.0`, `1.1.0`, `2.0.0`
- Users update with: `npm install -g skills@latest`
- Breaking changes = major version bump

---

## Next Steps

1. **Publish skills repo to GitHub**
   - Create `github.com/yourname/skills`
   - Push this repo

2. **Create npm account**
   - Sign up at npmjs.com
   - Run `npm login` locally

3. **Publish CLI to npm**
   ```bash
   cd skills-cli
   npm publish
   ```

4. **Test the full workflow**
   ```bash
   npx skills@latest add yourname/skills
   skills list
   ```

5. **Share with team/community**
   - Link to GitHub repo
   - Link to npm package
   - Example: `npx skills@latest add yourname/skills`

---

## Support & Updates

- **Bug reports:** GitHub Issues
- **Feature requests:** GitHub Discussions or PRs
- **Version updates:** Git tags on repo, npm versions for CLI
- **Documentation:** Update README.md in each directory

---

**You now have a complete, shareable, updatable skills distribution system.**
