---
name: handoff
description: Compact the current conversation into a markdown handoff document for another agent session. Triggered by /handoff. Use when the user wants to spin off a sub-task into an independent session, hand off to prototype a complex bit, pass learnings back to a parent session, or transfer work across different agents (Claude Code, Codex, Copilot CLI, etc.).
argument-hint: "What will the next session be used for?"
version: 1.0.0
category: productivity
portable: true
---

# Handoff

## Purpose

Compress the current session's context into a focused markdown document so a fresh agent session can pick up the work independently. This avoids diluting the current session with out-of-scope tasks and keeps each session's context window in the smart zone.

Unlike compact (which summarises for a long-running single session), handoff creates a separate, disposable document for a new independent session.

## When to Use

Use this skill when:
- The user types `/handoff` followed by a description of what the next session should do
- During a grilling session, an out-of-scope task emerges that should be spun off
- A complex bit of logic or UI needs prototyping in a separate session
- Learnings from a prototype need to be passed back to the planner session
- Work needs to transfer between different agent tools (e.g. Claude Code → Codex)

Do not use this skill when:
- The user asks for a summary to continue the same session (use compact instead)
- The task is trivial and can be done inline
- The user is asking for a general conversation summary unrelated to agent handoff

## Inputs

- The current conversation context
- The user's argument to `/handoff` describing what the next session will focus on
- Any referenced files, PRDs, plans, ADRs, issues, commits, or diffs

## Workflow

1. Read the current conversation context.
2. If the user provided an argument to `/handoff`, treat it as the focus description for the next session. Tailor the document accordingly.
3. Identify what is essential for the receiving agent to continue: goals, constraints, decisions made, open questions, relevant files, and next steps.
4. Identify what is already captured elsewhere (PRDs, plans, ADRs, issues, commits, diffs) — do not duplicate it, reference by path or URL instead.
5. Include a "suggested skills" section recommending skills the receiving agent should invoke (e.g. grill-with-docs, diagnose, prototype, etc.) based on the handoff context.
6. Redact all sensitive information: API keys, passwords, PII, internal URLs if needed.
7. Write the handoff document to the OS temporary directory (`/tmp` on Linux/macOS, `%TEMP%` on Windows). Do not write to the workspace — these files are disposable.
8. Confirm to the user where the file was saved.

## Output Format

A markdown file saved to the OS temp directory containing:

```
# Handoff: <focus description>

## Context
Brief summary of relevant conversation context.

## Goals
What the receiving agent should accomplish.

## Constraints & Decisions
Known constraints and decisions already made.

## Files & References
Paths or URLs to existing artifacts (PRDs, plans, ADRs, issues, commits, diffs).

## Suggested Skills
- list of skills the receiving agent should load

## Next Steps
Concrete next actions for the receiving agent.
```

## Quality Bar

The handoff is good only if:
- A fresh agent can pick it up and make meaningful progress without the original conversation
- It fits in the smart zone of the receiving agent's context window (concise, no bloat)
- Nothing is duplicated from referenced artifacts
- Sensitive information is fully redacted
- The suggested skills match the task

## Failure Modes

Avoid:
- Writing a novel — the document should be dense and minimal
- Duplicating content from referenced files
- Leaving sensitive data unredacted
- Saving to the workspace (these are disposable, not documentation)
- Omitting the focus description (the document will be too vague without it)
- Including generic suggestions instead of concrete next steps

## Improvement Loop

If the receiving agent struggles to continue:

1. Check whether the document is too vague or too detailed.
2. Ensure the focus description from `/handoff` was properly used.
3. Verify referenced files and URLs are accessible.
4. Confirm suggested skills are appropriate for the task.
