# skills-cli

CLI tool for installing and managing reusable agent skills.

Simplifies skill repository management across different agents (Claude Code, Hermes, OpenCode, etc.).

## Installation

```bash
npm install -g skills
```

Or use with `npx`:

```bash
npx skills@latest add username/skills
```

## Usage

### Add a Skills Repository

```bash
skills add username/skills
```

This clones the repository and installs it to `~/.agents/skills/username-skills/`.

Accepts multiple formats:
- `username/skills` (GitHub shorthand)
- `https://github.com/username/skills` (full URL)
- `git@github.com:username/skills.git` (SSH URL)

Options:
- `-d, --dir <path>` — Custom installation directory
- `-f, --force` — Overwrite existing installation

### List Installed Skills

```bash
skills list
```

Shows all installed skill repositories and counts available skills.

### Update Skills

Update a specific repository:
```bash
skills update username-skills
```

Update all installed skills:
```bash
skills update
```

### Remove Skills

```bash
skills remove username-skills
```

Options:
- `-f, --force` — Skip confirmation prompt

## How It Works

1. **Clone**: Downloads the skills repository from GitHub
2. **Symlink**: Creates a symlink at `~/.claude/skills/[name]/`
3. **Discover**: Claude Code automatically discovers all `SKILL.md` files
4. **Update**: Run `skills update` to pull latest changes

## Directory Structure

Skills are installed to:

```
~/.agents/skills/
├── username-skills/
│   ├── skills/
│   │   ├── productivity/
│   │   │   └── grill-me/
│   │   │       └── SKILL.md
│   │   └── engineering/
│   │       └── skill-creator/
│   │           └── SKILL.md
│   └── README.md
└── another-skills/
```

Claude Code automatically detects all `SKILL.md` files and makes them available as `/command` invocations.

## Publishing Your Skills

1. Create a repository with skills organized in `/skills/category/skill-name/SKILL.md`
2. Push to GitHub as `username/skills`
3. Users can install with: `skills add username/skills`
4. Updates flow automatically with `skills update`

## Examples

```bash
# Install Matt Pocock's skills (when published)
npx skills@latest add mattpocock/skills

# Install your custom skills
npx skills@latest add yourname/skills

# Update all
skills update

# List what's installed
skills list

# Remove specific repo
skills remove yourname-skills
```

## Configuration

Skills are automatically discovered by Claude Code from `~/.claude/skills/`.

Each skills repo should have a `/setup-[name]` skill that configures project-specific settings (issue tracker, docs location, etc.).

## License

MIT
