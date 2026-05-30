# skills-cli

CLI tool for installing and managing reusable agent skills across multiple AI coding agents.

Simplifies skill repository management across different agents (Claude Code, Cursor, Hermes, Pi, Codex, OpenCode, etc.).

## Installation

```bash
npm install -g nachikethreddyy-skills
```

Or use with `npx`:

```bash
npx nachikethreddyy-skills@latest add username/skills
```

## Usage

### Add a Skills Repository

```bash
skills add username/skills
```

Clones the repository into `~/.cache/skills-cli/` and creates a symlink in the selected agent's `skills/` directory.

Accepts multiple formats:
- `username/skills` (GitHub shorthand)
- `https://github.com/username/skills` (full URL)
- `git@github.com:username/skills.git` (SSH URL)

Options:
- `-d, --dir <path>` — Custom installation directory (skips agent selection)
- `-f, --force` — Overwrite existing installation
- `-a, --all` — Install to all known agents
- `--claude` — Install to Claude Code
- `--cursor` — Install to Cursor
- `--hermes` — Install to Hermes
- `--pi` — Install to Pi
- `--codex` — Install to Codex
- `--opencode` — Install to OpenCode
- `--agents` — Install to generic `~/.agents` directory

If no flags are specified, you'll be prompted interactively to select agents.

### List Installed Skills

```bash
skills list
```

Shows all installed skill repositories from `~/.agents/skills/` with per-repo skill counts and available skill names.

### Update Skills

Update a specific repository:
```bash
skills update username-skills
```

Update all installed skills:
```bash
skills update
```

Pulls latest changes via `git pull` on the cloned repository.

### Remove Skills

```bash
skills remove username-skills
```

Options:
- `-f, --force` — Skip confirmation prompt

## How It Works

1. **Clone**: Downloads the skills repository to `~/.cache/skills-cli/[name]/`
2. **Select**: Prompts you to choose which agent(s) to install to (or uses flags)
3. **Symlink**: Creates a symlink at each agent's `skills/` directory pointing to the cache
4. **Discover**: Each agent automatically discovers `SKILL.md` files in its `skills/` directory
5. **Update**: Run `skills update` to `git pull` latest changes

## Supported Agents

| Agent | Directory | Flag |
|---|---|---|
| Claude Code | `~/.claude/skills/` | `--claude` |
| Cursor | `~/.cursor/skills/` | `--cursor` |
| Hermes | `~/.hermes/skills/` | `--hermes` |
| Pi | `~/.pi/skills/` | `--pi` |
| Codex | `~/.codex/skills/` | `--codex` |
| OpenCode | `~/.opencode/skills/` | `--opencode` |
| Generic | `~/.agents/skills/` | `--agents` |

## Publishing Your Skills

1. Create a repository with skills organized in `/skills/category/skill-name/SKILL.md`
2. Push to GitHub as `username/skills`
3. Users can install with: `skills add username/skills`
4. Updates flow automatically with `skills update`

## Examples

```bash
# Install to specific agents
skills add nachikethreddyy/skills --claude --opencode

# Install to all agents
skills add yourname/skills --all

# Interactive agent selection
skills add yourname/skills

# Update all
skills update

# List what's installed
skills list

# Remove specific repo
skills remove yourname-skills
```

## License

MIT
