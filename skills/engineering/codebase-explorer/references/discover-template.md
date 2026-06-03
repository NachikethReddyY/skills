# Discovery Template

Use this template when writing `discover.md` for a target codebase.

## Sections

### 1. Directory Tree
Insert the full `eza --tree` or `tree` output here, annotated with:
- `[EP]` — entry point
- `[CFG]` — config file
- `[CORE]` — core logic
- `[TEST]` — tests
- `[LEGACY]` — deprecated/safe to ignore

### 2. Entry Points
Scan for these filenames and pattern-match against common frameworks:

| Pattern | Likely Role |
|---------|-------------|
| `main.ts`, `main.go`, `main.py`, `index.ts` | Application bootstrap |
| `app.ts`, `app.py`, `application.go` | App initialization |
| `router.ts`, `routes.ts`, `urls.py` | Route registration |
| `server.ts`, `server.go`, `serve.py` | HTTP server setup |
| `cli.ts`, `cmd/`, `cli.py` | CLI commands |

### 3. Configuration Files

| Pattern | Role |
|---------|------|
| `package.json` | Node.js project metadata |
| `Cargo.toml` | Rust project metadata |
| `go.mod` | Go module definition |
| `pyproject.toml`, `setup.py` | Python project metadata |
| `Dockerfile`, `compose.yaml` | Container definitions |
| `.env*`, `config/` | Runtime configuration |
| `Makefile`, `Justfile`, `Taskfile.yml` | Build orchestration |
| `.github/`, `.gitlab-ci.yml`, `Jenkinsfile` | CI/CD pipelines |

### 4. Language & Size Breakdown
Use `cloc` or `tokei` or `scc` if available for accurate counts. Otherwise estimate from the tree.

### 5. Test Layout

| Location | Framework (likely) |
|----------|-------------------|
| `__tests__/` | Jest |
| `*.test.ts` | Vitest, Jest |
| `tests/` | pytest, Go test |
| `src/**/*.spec.ts` | Jasmine, Jest |

### 6. Ignore Candidates
Flag directories and files that are safe to skip on first pass:
- Vendor/cached dependencies
- Generated code (protobuf, GraphQL types)
- Legacy or deprecated modules
- Build artifacts
- Documentation-only directories (non-code)
