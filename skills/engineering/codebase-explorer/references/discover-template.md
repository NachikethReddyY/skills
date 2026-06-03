# Discovery Template (Graph-First)

Discovery identifies the nodes and edges for the interactive graph.

## What to Extract

For every source file in the codebase, extract:

### 1. Node Entry

```json
{
  "id": "apiClient.ts",
  "label": "apiClient.ts",
  "type": "service",
  "path": "src/api/apiClient.ts",
  "imports": ["axios", "authApi", "usersApi"],
  "exports": ["apiClient"],
  "keyFunctions": ["get()", "post()", "put()", "delete()"],
  "connected": 0,
  "dependents": []
}
```

### 2. Edge Entry

```json
{ "source": "UserDashboard", "target": "apiClient.ts", "type": "import" }
```

### 3. File Scanning Rules

Scan all source files (skip node_modules, .git, dist, build, .next).

For each file:

**JavaScript/TypeScript:**
- `import X from 'y'` → edge from file to y
- `import { X } from 'y'` → edge from file to y
- `require('y')` → edge from file to y
- `export ...` → record exports
- `function X()` → record key function

**Python:**
- `import x` → edge from file to x
- `from x import y` → edge from file to x
- `def X():` → record key function

**Rust:**
- `use x::y` → edge from file to x
- `mod x` → edge from file to x
- `fn X()` → record key function

**Go:**
- `import "x"` → edge from file to x
- `func X()` → record key function

### 4. Router Detection

For files that define routes, also extract:
- Route paths (e.g., `/api/tickets`)
- Handler file names
- Middleware/guard file names
- Route nesting

### 5. Context/Provider Detection

For files defining React contexts or Vue providers:
- Context name
- Provider file
- Consumer files (files that import/use the context)
- State shape description

### 6. API Call Detection

For files that make HTTP requests:
- Called endpoints
- Base URL configuration
- API client file reference

## Output JSON Structure

```json
{
  "projectName": "my-app",
  "nodes": [...],
  "edges": [...],
  "hotspots": [...],
  "criticalPaths": [...],
  "onboardingPaths": {...},
  "deadAreas": [...],
  "circularDeps": [...],
  "categories": {...}
}
```

## Type Classification Heuristics

| Pattern | Type |
|---------|------|
| `.tsx`, `.jsx`, `Component`, `Page` | component |
| `api`, `client`, `service`, `provider` | service |
| `route`, `router`, `handler`, `controller` | route |
| `Context`, `Provider` | context |
| `util`, `helper`, `util`, `constant` | util |
| `.json`, `.config`, `config`, `env` | config |
| `schema`, `model`, `db`, `sql`, `migration` | db |
| `use[A-Z]`, `hook` | hook |
