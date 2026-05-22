# Portable Agent Skills System

Reusable operating procedures for agents like:
- Claude Code
- Hermes
- OpenCode
- Codex
- Pi

This is not a prompt dump.

It is a portable execution layer for agents.

---

# Core Concepts

## Prompts
Reusable text fragments.

## Skills
Reusable operating procedures.

## Agents
High-level orchestrators that use skills.

## Workflows
Multi-stage execution pipelines.

---

# Repository Structure

```txt
ai-system/
├── skills/
├── prompts/
├── agents/
├── workflows/
├── evals/
├── memory/
├── templates/
└── README.md
```

---

# Skill Structure

```txt
skill-name/
├── SKILL.md
├── references/
├── scripts/
├── evals/
└── assets/
```

Minimal version:

```txt
skill-name/
└── SKILL.md
```

---

# SKILL.md Standard

```md
---
name: backend-review
description: Review backend APIs, validation, auth, and architecture.
version: 1.0.0
portable: true
---

# Backend Review

## Purpose
Review backend systems.

## When to Use
Use when reviewing backend code or APIs.

## Workflow
1. Analyze architecture
2. Check validation
3. Review auth/security
4. Produce findings

## Output Format
- Summary
- Findings
- Fixes

## Failure Modes
- Generic advice
- Missing security checks
```

---

# Skill Philosophy

Create skills only when workflows are:

```txt
repeated + specialized + high-value + procedural
```

Avoid:
- vague skills
- generic prompts
- mega-skills
- duplicated workflows

---

# Shared Standards

```txt
skills/shared/
```

Use for:
- coding standards
- evaluation rubrics
- style guides
- shared references

---

# Long-Term Vision

Portable agent operating system.

The goal is not more prompts.

The goal is better execution.
