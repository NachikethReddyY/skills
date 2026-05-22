import { mkdirSync, existsSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';

/**
 * Normalize repository input to a full GitHub URL
 * Accepts: username/repo, https://github.com/username/repo, git@github.com:username/repo.git
 */
export function normalizeRepo(input) {
  if (input.startsWith('https://') || input.startsWith('git@')) {
    // Already a full URL
    return {
      repo: input,
      path: input
    };
  }

  if (input.includes('/')) {
    // Assume it's username/repo format
    const url = `https://github.com/${input}`;
    return {
      repo: url,
      path: input
    };
  }

  throw new Error(`Invalid repository format: ${input}. Use 'username/repo' or full GitHub URL.`);
}

/**
 * Ensure ~/.claude/skills directory exists
 */
export function ensureSkillsDir(skillsDir) {
  if (!existsSync(skillsDir)) {
    mkdirSync(skillsDir, { recursive: true });
  }
}

/**
 * Parse SKILL.md frontmatter
 */
export function parseSKILLMetadata(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};

  const metadata = {};
  const lines = match[1].split('\n');

  for (const line of lines) {
    const [key, ...valueParts] = line.split(':');
    const value = valueParts.join(':').trim();

    if (key && value) {
      // Remove quotes if present
      metadata[key.trim()] = value.replace(/^["']|["']$/g, '');
    }
  }

  return metadata;
}
