import fs from 'fs';

const configPath = process.argv[2] || 'audit.config.json';
const cfg = JSON.parse(fs.readFileSync(configPath, 'utf8'));

const out = `
# Model Card
**Model name:** ${cfg.model.name}
**Version:** ${cfg.model.version}
**Intended use:** ${cfg.intended_use}
**Limitations:** ${cfg.limitations}
**Ethics:** ${cfg.ethics}

# Data Statement
**Sources:** ${cfg.data.sources}
**Consent:** ${cfg.data.consent}
**Curation:** ${cfg.data.curation}

# Risk Register
**Risks:** ${cfg.risk.items.join(', ')}
**Mitigations:** ${cfg.risk.mitigations.join(', ')}
`;

fs.writeFileSync('audit.md', out.trim());
console.log('Generated audit.md');
