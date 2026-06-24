# Knowledge Map Format

`KNOWLEDGE_MAP.md` is a hierarchical map of everything the user knows. It answers: "What do I know, and how does it relate to everything else?"

## Template

```md
# Knowledge Map

{Domain}
├── {Category}
│   ├── {Concept} → [[SKILL-GRAPH.md#concept]]
│   └── {Concept} → [[SKILL-GRAPH.md#concept]]
├── {Category}
│   ├── {Concept} → [[SKILL-GRAPH.md#concept]]
│   │   ├── {Sub-concept} → [[SKILL-GRAPH.md#sub-concept]]
│   │   └── {Sub-concept} → [[SKILL-GRAPH.md#sub-concept]]
│   └── {Concept}
└── {Category}
```

## Example

```md
# Knowledge Map

AI Engineering
├── MCP
│   ├── JSON-RPC → [[SKILL-GRAPH.md#json-rpc]]
│   ├── Tool Calling → [[SKILL-GRAPH.md#tool-calling]]
│   ├── Resources → [[SKILL-GRAPH.md#mcp-resources]]
│   └── Prompts → [[SKILL-GRAPH.md#prompts]]
├── Agents
│   ├── Tool Use → [[SKILL-GRAPH.md#tool-use]]
│   └── Planning → [[SKILL-GRAPH.md#planning]]
└── RAG
    ├── Chunking → [[SKILL-GRAPH.md#chunking]]
    └── Embeddings → [[SKILL-GRAPH.md#embeddings]]
```

## Rules

- **Every entry links to its skill-graph entry.** The knowledge map shows structure; the skill graph shows depth.
- **Update after every lesson.** Add the new concept under its parent category.
- **Restructure when needed.** As understanding grows, the hierarchy may need to change. Don't force a stale structure.
- **Keep it visible.** This is a navigation tool — the user should be able to glance at it and see the shape of what they know.
