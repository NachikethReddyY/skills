#!/usr/bin/env node

/**
 * Codebase Explorer — Output Generator
 *
 * Reads markdown files from OUTPUT_DIR and generates:
 * 1. A single-page HTML report combining all outputs
 * 2. Mermaid diagram embedding
 *
 * Usage:
 *   node scripts/generate-outputs.js <output-dir> [--serve]
 *
 * The --serve flag starts a local HTTP server for preview.
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

const OUTPUT_DIR = process.argv[2] || process.cwd();
const SHOULD_SERVE = process.argv.includes('--serve');

function readOrFail(filename) {
  const filepath = path.join(OUTPUT_DIR, filename);
  try {
    return fs.readFileSync(filepath, 'utf8');
  } catch {
    return `*[${filename} not found — section skipped]*`;
  }
}

function sectionsFromMd(content, fallbackTitle) {
  const lines = content.split('\n');
  const sections = [];
  let current = { heading: fallbackTitle, body: [] };

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (current.body.length || sections.length > 0) {
        sections.push({ ...current });
      }
      current = { heading: line.replace('## ', '').trim(), body: [] };
    } else {
      current.body.push(line);
    }
  }
  if (current.body.length) {
    sections.push({ ...current });
  }
  return sections;
}

function escapeHtml(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function renderMarkdownBlock(text) {
  let html = escapeHtml(text);

  // Mermaid code blocks → preserve for live rendering
  html = html.replace(/```mermaid\n([\s\S]*?)```/g, (_, code) => {
    return `<div class="mermaid">${code.trim()}</div>`;
  });

  // Other code blocks
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    return `<pre><code class="language-${lang || 'text'}">${escapeHtml(code.trim())}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // Headings
  html = html.replace(/^### (.*$)/gm, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gm, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gm, '<h1>$1</h1>');

  // Tables
  html = html.replace(/^\|(.+)\|$/gm, (line) => {
    if (line.includes('---')) return '';
    const cells = line.split('|').filter(c => c.trim()).map(c => c.trim());
    return `<tr>${cells.map(c => `<td>${escapeHtml(c)}</td>`).join('')}</tr>`;
  });
  html = html.replace(/((?:<tr>.*<\/tr>\n?)+)/g, '<table><tbody>$1</tbody></table>');

  // Bold / italic
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');

  // Lists
  html = html.replace(/^- (.*)/gm, '<li>$1</li>');
  html = html.replace(/((?:<li>.*<\/li>\n?)+)/g, '<ul>$&</ul>');

  // Paragraphs
  html = html.replace(/\n\n/g, '</p><p>');

  return `<p>${html}</p>`;
}

function buildHtml() {
  const discover = readOrFail('discover.md');
  const architecture = readOrFail('architecture.md');
  const glossary = readOrFail('glossary.md');
  const onboarding = readOrFail('onboarding.md');
  const projectName = path.basename(path.resolve(OUTPUT_DIR, '..', '..'));

  const templatePath = path.join(__dirname, '..', 'assets', 'report-template.html');
  let template = fs.readFileSync(templatePath, 'utf8');

  const allSections = [
    { id: 'discover', heading: 'Repository Discovery', content: discover },
    { id: 'architecture', heading: 'Architecture', content: architecture },
    { id: 'glossary', heading: 'Glossary & Domain Map', content: glossary },
    { id: 'onboarding', heading: 'Onboarding Guide', content: onboarding },
  ];

  const navItems = allSections.map((s) =>
    `<li><a href="#${s.id}">${s.heading}</a></li>`
  ).join('\n          ');

  const bodyContent = allSections.map((s) => {
    const subs = sectionsFromMd(s.content, s.heading);
    const subHtml = subs.map(sub =>
      `<div class="subsection">
        <h3>${sub.heading}</h3>
        <div class="subsection-content">${renderMarkdownBlock(sub.body.join('\n'))}</div>
      </div>`
    ).join('\n        ');
    return `<section id="${s.id}" class="section">
        <h2>${s.heading}</h2>
        ${subHtml}
      </section>`;
  }).join('\n      ');

  template = template
    .replace('{{PROJECT_NAME}}', projectName)
    .replace('{{NAV_ITEMS}}', navItems)
    .replace('{{BODY_CONTENT}}', bodyContent)
    .replace('{{GENERATED_AT}}', new Date().toISOString());

  return template;
}

function writeReport(html) {
  const outPath = path.join(OUTPUT_DIR, 'exploration-report.html');
  fs.writeFileSync(outPath, html, 'utf8');
  console.log(`Report written to ${outPath}`);
  return outPath;
}

function serveFile(filepath) {
  const port = 3000;
  http.createServer((req, res) => {
    if (req.url === '/') {
      const content = fs.readFileSync(filepath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  }).listen(port, () => {
    console.log(`Preview at http://localhost:${port}`);
  });
}

const html = buildHtml();
const outPath = writeReport(html);

if (SHOULD_SERVE) {
  serveFile(outPath);
}
