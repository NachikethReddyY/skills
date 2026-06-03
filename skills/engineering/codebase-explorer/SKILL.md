---
name: codebase-explorer
description: Explore an entire codebase through an interactive zoomable graph built from real file relationships (imports, exports, route deps, hook usage, context providers, API calls, DB access). Generates a Cytoscape.js-based explorer where the graph is the primary interface and documentation is secondary. Use when the user asks to "explore", "understand", "map", "onboard", "trace request flow", "what can I ignore", "generate knowledge graph", or "dependency analysis" on any codebase. Do NOT use when the user wants bugs fixed, refactoring, or feature additions.
version: 2.0.0
category: engineering
portable: true
---

# Codebase Explorer

## Purpose

Transform any codebase into an interactive explorable graph. A new engineer should understand the architecture by interacting with the graph for 5 minutes without reading long documents.

The graph is the primary interface. Documentation is secondary.

## When to Use

Use this skill when:
- User asks to "explore", "understand", "map", or "review" a codebase
- User wants to trace how files depend on each other
- User wants to onboard onto an unfamiliar codebase
- User asks "what are the most important files", "what can I safely ignore"
- User asks "how does a request flow through the system"
- User asks "what are the core modules", "find circular dependencies"

Do NOT use this skill when:
- User wants bugs fixed, code changed, or refactoring
- User wants a line-by-line code review for correctness
- The codebase is a single-file script (too small to need mapping)

## Inputs

| Input | Required | Description |
|-------|----------|-------------|
| `TARGET_DIR` | Yes | Absolute path to the codebase root |
| `OUTPUT_DIR` | No | Where to write outputs (defaults to `TARGET_DIR/docs/exploration/`) |

## Cross-Skill References

| Skill | Location | Used For |
|-------|----------|----------|
| `frontend-design` | `file:///Users/nr/.agents/skills/frontend-design/SKILL.md` | Design the graph explorer UI: layout, interactions, states, visual hierarchy, cards, progressive disclosure |

Load the frontend-design skill before building the HTML template to ensure the output looks like a modern developer tool, not a documentation page.

## Prerequisites

```bash
# Directory tree
command -v eza >/dev/null 2>&1 || brew install eza

# Node.js (for the graph data generator)
command -v node >/dev/null 2>&1 || echo "node required to run generate-outputs.js"
```

## Workflow

### Phase 1: Extract — Discover Real Relationships

Parse the codebase to build a dependency graph from actual code, not assumptions.

Read these categories of files and extract their relationships:

#### Imports / Exports
For every source file, extract:
- `import` statements → edges from file to dependency
- `export` statements → edges from file to what it exposes
- `require()` calls → edges from file to dependency

#### Route Definitions
For router/config files, extract:
- Route paths and their handler files
- Route nesting/parent relationships
- Route guards/middleware

#### Context / Provider Trees
For React/Vue context files, extract:
- Provider → consumer relationships
- Context dependencies
- Hook → context relationships

#### API Calls
For files making network requests:
- Which endpoints they call
- Which service files they depend on

#### Database Access
For data layer files:
- Which tables/collections they access
- Which service files consume them

#### Configuration References
- Package dependency declarations (package.json, Cargo.toml, go.mod, etc.)
- Build configuration references

### Phase 2: Analyze — Repository Intelligence

From the extracted graph, compute:

#### Hotspots (Most Connected Files)
```text
| File | Inbound | Outbound | Total |
|------|---------|----------|-------|
| apiClient.ts | 24 | 12 | 36 |
| UserContext.tsx | 18 | 8 | 26 |
| ProtectedRoute.tsx | 15 | 5 | 20 |
```

#### Core Modules (High Betweenness Centrality)
Files whose removal would fragment the graph most. These are the files to learn first.

#### Critical Paths
Trace end-to-end paths through the graph:
```text
Auth Flow: LoginPage → authApi → AuthContext → ProtectedRoute → apiClient → UserContext
Ticket Flow: TicketsPage → ticketRouting → ticketPermissions → mailer → PostgreSQL
```

#### Dead Areas
Files with zero inbound imports (no other file depends on them). Candidates for safe-to-ignore.

#### Circular Dependencies
Detect cycles in the import graph:
```text
A → B → C → A
```

### Phase 3: Build Interactive Graph

Generate an interactive graph explorer using Cytoscape.js (self-contained HTML, no build step):

#### Required Features

| Feature | Implementation |
|---------|---------------|
| Force-directed layout | Cytoscape `cose` or `cose-bilkent` layout |
| Zoom + pan | Built-in Cytoscape |
| Click to expand node | Reveals imports/exports as connected subgraph |
| Click to inspect | Right panel shows: purpose, imports, exports, key functions, related files |
| Search / filter | Search bar filters visible nodes by name |
| Relationship highlighting | Hover node → highlight all connected nodes, dim rest |
| Minimap | Cytoscape navigator extension |
| Node collapse | Collapse explored subgraph back to single node |
| Breadcrumbs | Top-of-viewport trail of navigation path |
| Zoom controls | +/- buttons, fit-to-view button |
| Dark/light mode | System preference + toggle |
| Grouping by type | Color/shape coding: component, service, route, context, util, config |

#### Graph Data Format

The graph data is injected into the HTML template as a JSON object:

```json
{
  "projectName": "my-app",
  "nodes": [
    {
      "id": "apiClient.ts",
      "label": "apiClient.ts",
      "type": "service",
      "path": "src/api/apiClient.ts",
      "imports": ["axios", "authApi", "usersApi"],
      "exports": ["apiClient"],
      "keyFunctions": ["get()", "post()", "put()", "delete()"],
      "connected": 36,
      "dependents": ["UserDashboard", "TicketsPage", "SettingsPage"]
    }
  ],
  "edges": [
    { "source": "apiClient.ts", "target": "axios", "type": "import" },
    { "source": "UserDashboard", "target": "apiClient.ts", "type": "import" }
  ],
  "hotspots": [
    { "file": "apiClient.ts", "inbound": 24, "outbound": 12, "total": 36 },
    { "file": "UserContext.tsx", "inbound": 18, "outbound": 8, "total": 26 }
  ],
  "criticalPaths": [
    { "name": "Auth Flow", "path": ["LoginPage", "authApi", "AuthContext", "ProtectedRoute", "apiClient", "UserContext"] },
    { "name": "Ticket Creation", "path": ["TicketsPage", "TicketsRoute", "ticketRouting", "ticketPermissions", "mailer", "ticketsDb"] }
  ],
  "onboardingPaths": {
    "New Engineer": ["App.tsx", "ProtectedRoute", "UserContext", "apiClient", "TicketsRoute", "ticketRouting", "db/schema"],
    "Frontend": ["App.tsx", "router.tsx", "pages/", "components/", "hooks/", "contexts/"],
    "Backend": ["server.ts", "routes/", "services/", "middleware/", "db/"],
    "Database": ["db/schema.sql", "migrations/", "models/", "queries/"],
    "Authentication": ["LoginPage", "authApi", "AuthContext", "ProtectedRoute", "oauth/"]
  },
  "deadAreas": ["legacy/", "scripts/", "stories/"],
  "circularDeps": [
    { "cycle": ["A.ts", "B.ts", "C.ts", "A.ts"] }
  ],
  "categories": {
    "component": { "color": "#3b82f6", "shape": "round-rectangle" },
    "service": { "color": "#8b5cf6", "shape": "hexagon" },
    "route": { "color": "#10b981", "shape": "rectangle" },
    "context": { "color": "#f59e0b", "shape": "round-rectangle" },
    "util": { "color": "#6b7280", "shape": "ellipse" },
    "config": { "color": "#ef4444", "shape": "diamond" },
    "db": { "color": "#06b6d4", "shape": "cylinder" },
    "hook": { "color": "#ec4899", "shape": "round-rectangle" }
  }
}
```

### Phase 4: Generate Outputs

#### Interactive HTML Explorer (Primary)

Generated by injecting the graph JSON into `assets/report-template.html`:

```bash
node scripts/generate-outputs.js "$OUTPUT_DIR"
```

Output: `exploration-report.html` — a self-contained single-page app. The graph is the landing page. Documentation panels open on click.

#### Supporting Markdown Files (Secondary)

| File | Contents |
|------|----------|
| `hotspots.md` | Ranked list of most connected files |
| `critical-paths.md` | End-to-end request flow traces |
| `dead-areas.md` | Files with no dependents |
| `circular-deps.md` | Detected import cycles |
| `onboarding.md` | Learning paths by role |

## Output Format

### `exploration-report.html`

A single-page interactive graph explorer with:

**Landing page:** Full-screen zoomable knowledge graph built from real file relationships.

**Left sidebar:**
- Search bar (filters graph nodes by name)
- Onboarding paths (click to trace a path through the graph)
- Hotspots list (most connected files)
- Dead areas (safe to ignore)

**Graph canvas:**
- Force-directed layout
- Node color/shape by type (component, service, route, context, util, config, db, hook)
- Edge width by relationship strength
- Hover highlights connected nodes, dims rest
- Click reveals detail panel

**Detail panel (click node):**
- File path
- Key functions
- Imports list
- Exports list
- Dependents list
- "Expand" button to show subgraph

**Controls:**
- Zoom + / - buttons
- Fit to view
- Reset layout
- Toggle labels
- Dark/light mode

**Bottom bar:**
- Breadcrumb trail of navigation
- Mini-map / navigator

## Quality Bar

The result is good only if:
- A new engineer can understand the architecture by interacting with the graph for 5 minutes without reading long documents
- The graph is built from real file relationships (imports, exports, route deps), not placeholders
- Clicking any node reveals its purpose, imports, exports, dependents, and key functions
- Search/filter works and highlights matching nodes
- Onboarding paths trace real connections through the graph
- Hotspots, critical paths, dead areas, and circular deps are computed from actual graph analysis
- Dark/light mode works
- No repeated/duplicate sections
- The file is self-contained (no broken CDN links)

## Failure Modes

Avoid:
- Generating a static documentation page instead of an interactive graph
- Using placeholder node names that don't exist in the codebase
- Skipping import/export analysis and relying on manual descriptions
- No dependency analysis — this is the most valuable output
- No onboarding paths — a new engineer doesn't know where to start
- Generic SaaS boilerplate diagrams
- Repeated duplicate content across sections
- Walls of text — prioritize visual exploration over textual explanation

## Improvement Loop

If output is weak:
1. Re-run Phase 1 with deeper file scanning to catch more relationships
2. Verify the graph JSON has real node/edge data, not placeholders
3. Check that onboarding paths reference actual files in the codebase
4. Manually inspect a few key files to verify the extracted relationships are correct
5. Regenerate the HTML if the graph UI doesn't render correctly
