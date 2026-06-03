#!/usr/bin/env node

/**
 * Codebase Explorer — Graph Report Generator
 *
 * Reads exploration-data.json from OUTPUT_DIR and injects it into
 * the Cytoscape.js-based interactive graph explorer template.
 *
 * Usage:
 *   node scripts/generate-outputs.js <output-dir> [--serve] [--data <path>]
 *
 * --data <path>   Path to a JSON file containing the graph data
 * --serve         Start a local HTTP server for preview
 */

const fs = require('fs');
const path = require('path');
const http = require('http');

const OUTPUT_DIR = process.argv[2] || process.cwd();
const DATA_FLAG = process.argv.indexOf('--data');
const DATA_PATH = DATA_FLAG !== -1 ? process.argv[DATA_FLAG + 1] : null;
const SHOULD_SERVE = process.argv.includes('--serve');

function resolveFile(name) {
  return path.join(OUTPUT_DIR, name);
}

function readJsonOrExit(filepath) {
  try {
    const raw = fs.readFileSync(filepath, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error(`Cannot read graph data from ${filepath}: ${err.message}`);
    console.error('Generate exploration-data.json first by running Phase 1 + Phase 2 of the skill workflow.');
    process.exit(1);
  }
}

function buildHtml(graphData) {
  const templatePath = path.join(__dirname, '..', 'assets', 'report-template.html');
  let template;

  try {
    template = fs.readFileSync(templatePath, 'utf8');
  } catch (err) {
    console.error(`Template not found at ${templatePath}`);
    process.exit(1);
  }

  const projectName = graphData.projectName
    || path.basename(path.resolve(OUTPUT_DIR, '..', '..'));

  const graphJson = JSON.stringify(graphData, null, 0)
    .replace(/<\/script>/g, '<\\/script>');

  template = template
    .replace('{{PROJECT_NAME}}', projectName)
    .replace('{{GRAPH_DATA}}', graphJson)
    .replace('{{GENERATED_AT}}', new Date().toISOString());

  return template;
}

function writeReport(html) {
  const outPath = resolveFile('exploration-report.html');
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

// Resolve data file
const dataFile = DATA_PATH || resolveFile('exploration-data.json');
const graphData = readJsonOrExit(dataFile);

// Run
const html = buildHtml(graphData);
const outPath = writeReport(html);

if (SHOULD_SERVE) {
  serveFile(outPath);
}
