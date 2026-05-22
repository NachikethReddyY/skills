---
name: skill-creator
description: Create, modify, improve, and evaluate portable agent skills. Use this skill when the user wants to create a new skill, convert a workflow into a reusable skill, improve an existing SKILL.md, design a shared skills folder, create folder structures for skills, generate test prompts, optimize triggering, or build portable skills for agents such as OpenCode, Codex, Pi, Hermes, Claude Code, and other CLI agents.
version: 1.0.0
category: meta-skill
portable: true
---

# Skill Creator
## Purpose

Help the user create portable, reusable agent skills.

A skill is a specialized operating procedure that tells an agent how to perform a repeated high-value workflow. It should help agents do work better, not merely describe generic preferences.

The target format is markdown-first so it can work across different agents and CLI environments.

## Core Principle

Only create a skill when the workflow is:

- repeated
- specialized
- high-value
- procedural
- useful across future tasks

Do not create skills for generic advice, one-off tasks, or vague preferences.

## First Move

When this skill is triggered, first identify where the user is in the skill lifecycle:

1. **Idea** — user has a rough concept.
2. **Workflow** — user has a process they want captured.
3. **Draft** — user already has a SKILL.md.
4. **Testing** — user wants prompts or evals.
5. **Improvement** — user wants better triggering, structure, or output quality.
6. **Packaging** — user wants the skill saved into a folder structure.

Do not restart from zero if the user already has a draft.

Ask at most one targeted clarification question if blocked. If enough context exists, proceed.

## Skill Lifecycle

Use this loop:

1. Define the skill's purpose.
2. Define when it should trigger.
3. Define when it should not trigger.
4. Draft the folder structure.
5. Write the SKILL.md.
6. Create realistic test prompts.
7. Evaluate output quality.
8. Improve the skill.
9. Repeat until stable.
10. Package the skill for reuse.

## Required Folder Structure

Create skills using this structure:

```txt
skills/
└── skill-name/
    ├── SKILL.md              # required
    ├── references/           # optional docs, examples, standards
    ├── scripts/              # optional deterministic helpers
    ├── evals/                # optional test prompts and results
    └── assets/               # optional templates, images, files
```

Only `SKILL.md` is required.

If the user asks for a lightweight skill, create only:

```txt
skills/
└── skill-name/
    └── SKILL.md
```

## Folder Creation Instructions

When creating a new skill, provide terminal commands like this:

```bash
mkdir -p skills/<skill-name>/{references,scripts,evals,assets}
touch skills/<skill-name>/SKILL.md
```

For a minimal skill:

```bash
mkdir -p skills/<skill-name>
touch skills/<skill-name>/SKILL.md
```

If the user uses a specific skills directory, adapt the path.

Examples:

```bash
mkdir -p ~/.hermes/skills/<skill-name>/{references,scripts,evals,assets}
touch ~/.hermes/skills/<skill-name>/SKILL.md
```

```bash
mkdir -p ~/agents/skills/<skill-name>/{references,scripts,evals,assets}
touch ~/agents/skills/<skill-name>/SKILL.md
```

## Skill Interview

Before writing a new skill, extract answers from the current conversation. Only ask what is missing.

Use these questions when needed:

1. What repeated workflow should this skill capture?
2. What should the skill help the agent do?
3. Which agents should use it?
4. What user phrases or situations should trigger it?
5. When should it not trigger?
6. What inputs does it need?
7. What tools, files, scripts, or folders does it need?
8. What output format should it produce?
9. What does a good result look like?
10. What failure would make the skill useless?

Do not ask all questions at once unless the user is still vague.

## Decision Rule

If the user gives a vague skill idea, respond with:

1. likely purpose
2. likely trigger cases
3. one clarification question
4. provisional folder structure

If the user gives enough detail, write the skill immediately.

## SKILL.md Template

Use this template unless the user requests another structure:

```md
---
name: skill-name
description: Clear trigger rule. Say what this skill does, when agents should use it, and nearby cases where it should trigger.
version: 1.0.0
category: category-name
portable: true
---

# Skill Name

## Purpose

What this skill helps the agent do.

## When to Use

Use this skill when:
- ...

Do not use this skill when:
- ...

## Inputs

Expected user inputs, files, context, or tools.

## Workflow

1. Assess the user's current stage.
2. Choose the correct path.
3. Execute the workflow.
4. Verify output quality.
5. Ask for one targeted clarification only if blocked.

## Output Format

Define the exact expected output.

## Quality Bar

The result is good only if:
- ...

## Failure Modes

Avoid:
- ...

## Improvement Loop

If output is weak:

1. Identify the failure.
2. Revise the skill or workflow.
3. Test again.
```

## Description Writing Rules

The `description` field controls triggering.

A strong description includes:

- what the skill does
- when to use it
- common user phrases
- adjacent situations where it should trigger
- boundaries to avoid over-triggering

Bad:

```yaml
description: Helps create skills.
```

Good:

```yaml
description: Create, modify, improve, and evaluate portable agent skills. Use when the user wants to create a new skill, convert a workflow into a skill, improve an existing SKILL.md, design reusable agent procedures, test skill behavior, or optimize triggering.
```

## Drafting Rules

When drafting a skill:

- keep it portable
- avoid platform-specific assumptions unless requested
- use markdown-first instructions
- use imperative instructions
- make the workflow explicit
- keep the body lean
- move large references into `references/`
- use scripts only for deterministic or repetitive tasks
- include verification steps
- include failure modes
- include a clear output format
- include should-use and should-not-use cases

## Cross-Agent Compatibility

Assume the skill may be used by:

- OpenCode
- Codex
- Pi
- Hermes
- Claude Code
- other CLI agents

Therefore:

- avoid relying on one proprietary runtime
- avoid hidden dependencies
- state tool needs clearly
- keep metadata simple
- make optional folders optional
- prefer plain markdown over runtime-specific syntax
- include terminal commands when folder/file creation is needed

## Tool and Script Guidance

Add a `scripts/` folder only when the workflow has deterministic repeated work.

Examples:
- generating files
- parsing structured data
- converting formats
- running checks
- producing reports
- validating outputs

Do not add scripts for reasoning-only skills.

If scripts are included, document:

- what each script does
- when to run it
- expected inputs
- expected outputs
- failure handling

## References Guidance

Add a `references/` folder when the skill needs stable knowledge that would bloat `SKILL.md`.

Examples:
- style guides
- rubrics
- schemas
- examples
- checklists
- API notes
- project-specific standards

In `SKILL.md`, point to the reference file only when needed.

Example:

```md
If the user asks for rubric-based grading, read `references/rubric.md` before drafting.
```

## Evals Guidance

Create `evals/evals.json` when the skill should be tested.

Use 3-5 realistic prompts:

1. normal expected use
2. vague request
3. complex workflow
4. edge case
5. should-not-trigger or near-miss case

Example:

```json
{
  "skill_name": "example-skill",
  "evals": [
    {
      "id": 1,
      "prompt": "Turn my messy project workflow into a reusable skill.",
      "expected_output": "A complete SKILL.md with trigger description, workflow, output format, and quality checks."
    }
  ]
}
```

## Evaluation Metrics

Evaluate skills using:

- trigger accuracy
- workflow clarity
- output consistency
- token efficiency
- portability
- tool-awareness
- failure handling
- usefulness across repeated tasks

Explain weaknesses directly.

## Improvement Process

When improving a skill:

1. Identify the failure.
2. Decide whether the issue is in:
   - description
   - workflow
   - output format
   - assumptions
   - missing examples
   - missing verification
   - missing references
   - unnecessary bloat
3. Rewrite only what matters.
4. Avoid bloating the skill.
5. Preserve portability.
6. Re-test using realistic prompts.

## Output Modes

When the user asks to create a skill, output:

1. recommended folder path
2. folder creation commands
3. final `SKILL.md`
4. optional `evals/evals.json`
5. next improvement step

When the user asks to improve a skill, output:

1. diagnosis
2. revised description if needed
3. revised SKILL.md section
4. why the change improves triggering or behavior
5. test prompts to verify the change

When the user asks to package a skill, create:

```txt
skill-name/
├── SKILL.md
├── references/
├── scripts/
├── evals/
└── assets/
```

Then provide a zip file if the environment supports file creation.

## Quality Bar

A good skill is:

- easy for an agent to load
- clear about when to trigger
- narrow enough to be useful
- broad enough to generalize
- short enough to avoid context bloat
- specific enough to reduce hallucination
- testable through realistic prompts
- portable across agents
- explicit about failure handling

## Anti-Patterns
Avoid:
- generic “be helpful” skills
- massive all-purpose skills
- vague trigger descriptions
- platform lock-in unless requested
- too many rigid rules without reason
- long theory sections
- hidden assumptions
- no verification step
- no failure handling
- skills that only work for one example
- evals that are too obvious
- skills that duplicate common model behavior

## Final Rule
The goal is not to create more skills.
The goal is to create fewer, sharper, reusable operating procedures that improve agent execution across many tools.
