import { existsSync, mkdirSync } from 'fs';
import { homedir } from 'os';
import { join } from 'path';
import readline from 'readline';

/**
 * Detect which agent directories exist on the system
 */
export function detectAgents() {
  const homeDir = homedir();
  const possibleAgents = [
    { name: 'Claude Code', dir: '.claude', description: 'Claude Code (official)' },
    { name: 'Hermes', dir: '.hermes', description: 'Hermes agent' },
    { name: 'Pi', dir: '.pi', description: 'Pi agent' },
    { name: 'Codex', dir: '.codex', description: 'Codex agent' },
    { name: 'Generic', dir: '.agents', description: 'Generic agents directory' }
  ];

  const installed = [];
  const available = [];

  for (const agent of possibleAgents) {
    const agentPath = join(homeDir, agent.dir);
    if (existsSync(agentPath)) {
      installed.push({ ...agent, path: agentPath });
    } else {
      available.push(agent);
    }
  }

  return { installed, available };
}

/**
 * Prompt user to select which agents to install to
 */
export async function selectAgents(options = {}) {
  const { installed, available } = detectAgents();
  const homeDir = homedir();
  const allAgents = [
    { name: 'Claude Code', dir: '.claude', path: join(homeDir, '.claude') },
    { name: 'Hermes', dir: '.hermes', path: join(homeDir, '.hermes') },
    { name: 'Pi', dir: '.pi', path: join(homeDir, '.pi') },
    { name: 'Codex', dir: '.codex', path: join(homeDir, '.codex') },
    { name: 'Generic', dir: '.agents', path: join(homeDir, '.agents') }
  ];

  // Check if specific agents were requested via flags
  const requestedAgents = [];
  const flagMap = {
    claude: 'Claude Code',
    hermes: 'Hermes',
    pi: 'Pi',
    codex: 'Codex',
    agents: 'Generic'
  };

  for (const [flag, name] of Object.entries(flagMap)) {
    if (options[flag]) {
      const agent = allAgents.find(a => a.name === name);
      if (agent) requestedAgents.push(agent);
    }
  }

  if (requestedAgents.length > 0) {
    return requestedAgents;
  }

  // If user specified --all, return all possible agents
  if (options.all) {
    return allAgents;
  }

  // If only one agent installed, use it
  if (installed.length === 1) {
    return installed;
  }

  // Prompt user to select agents
  return await promptAgentSelection(installed, available);
}

/**
 * Interactive prompt for agent selection
 */
async function promptAgentSelection(installed, available) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    console.log('\n📦 Which agents do you want to install skills to?\n');

    // Show installed agents
    console.log('Available agents:');
    const agents = [...installed, ...available];
    agents.forEach((agent, i) => {
      const status = installed.includes(agent) ? ' ✓' : '  ';
      console.log(`${i + 1}. ${status} ${agent.description}`);
    });

    console.log('\nEnter numbers separated by commas (e.g., "1,2,3")');
    console.log('Or "all" to install to all agents');
    console.log('Or press Enter to use detected agents only\n');

    rl.question('Select agents: ', (answer) => {
      rl.close();

      let selected = installed;

      if (answer.toLowerCase() === 'all') {
        selected = agents;
      } else if (answer.trim()) {
        const indices = answer.split(',').map(s => parseInt(s.trim()) - 1).filter(i => i >= 0 && i < agents.length);
        selected = indices.map(i => agents[i]);
      }

      // Ensure all selected agents have paths
      selected = selected.map(agent => ({
        ...agent,
        path: agent.path || join(homedir(), agent.dir)
      }));

      resolve(selected);
    });
  });
}

/**
 * Ensure a skills directory exists for an agent
 */
export function ensureAgentSkillsDir(agentPath) {
  const skillsDir = join(agentPath, 'skills');
  if (!existsSync(skillsDir)) {
    mkdirSync(skillsDir, { recursive: true });
  }
  return skillsDir;
}
