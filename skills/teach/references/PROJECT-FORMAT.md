# Project Format

Projects drive learning. Instead of "learn topic X, then apply," the project defines the goal and lessons emerge naturally as knowledge gaps. Projects live in `topics/<topic>/PROJECTS/project-name.md`.

## Template

```md
# Project: {Name}

## Goal
{Single sentence describing the concrete outcome. What will exist when this is done?}

## Mission Link
{How does this project serve the mission in MISSION.md?}

## Knowledge Gaps
{Concepts the user needs to learn to complete this project. Each becomes a lesson.}

- [ ] [[Concept 1]] — needed for {specific project task}
- [ ] [[Concept 2]] — needed for {specific project task}
- [ ] [[Concept 3]] — needed for {specific project task}

## Milestones
- [ ] {Milestone 1} — {outcome}
- [ ] {Milestone 2} — {outcome}
- [ ] {Milestone 3} — {outcome}

## Done When
{Observable completion criteria. Be specific.}

## Stretch Goals
{Harder variants if the user finishes early.}
```

## Example

```md
# Project: Build an MCP Server

## Goal
A working MCP server that exposes weather and calendar tools over stdio transport.

## Mission Link
MISSION.md says: "Understand MCP deeply enough to implement a custom transport." This project builds that understanding bottom-up.

## Knowledge Gaps
- [ ] [[JSON-RPC]] — needed for protocol layer
- [ ] [[MCP Tool Calling]] — needed for tool definitions
- [ ] [[MCP Resources]] — needed for resource exposure
- [ ] [[MCP Transports]] — needed for stdio implementation
- [ ] [[Schema Validation]] — needed for input validation

## Milestones
- [ ] JSON-RPC endpoint responds to ping — protocol basics working
- [ ] Weather tool registered and callable — tool calling works
- [ ] Calendar resource exposed — resources work
- [ ] Both tools callable from an MCP client — integration verified

## Done When
A third-party MCP client can connect to the server, discover tools and resources, call the weather tool, and receive a valid response.

## Stretch Goals
- Add a custom transport (WebSocket or SSE)
- Add authentication via the MCP auth spec
```

## Rules

- **Project before lessons.** Define the project first, then derive what needs to be learned. This creates context for every lesson.
- **Each knowledge gap becomes a lesson.** Check them off as lessons are created.
- **Milestones are concrete.** "Research JSON-RPC" is not a milestone. "JSON-RPC endpoint responds to ping" is.
- **Done when criteria are observable.** "The user understands it" is not done. "A third-party client can connect and call the tool" is.
- **One project active at a time.** Multiple active projects fragment focus.
