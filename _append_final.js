const fs = require('fs');

let content = fs.readFileSync('extra_questions.js', 'utf-8');

// Remove trailing ]; and whitespace
content = content.replace(/\}\s*\];?\s*$/, '').trimEnd();
// Ensure trailing comma
if (!content.endsWith(',')) content += ',';

// Append sm_021~sm_040
const sm021 = fs.readFileSync('_agent_sm_021.txt', 'utf-8').trim();
content += '\n' + sm021 + ',';

// Append el_061~el_080
const el061 = fs.readFileSync('_agent_el_061.txt', 'utf-8').trim();
content += '\n' + el061 + '\n];\n';

fs.writeFileSync('extra_questions.js', content);

// Verify
const vm = require('vm');
new vm.Script(fs.readFileSync('extra_questions.js', 'utf-8'));

const ids = [...content.matchAll(/id:\s*['"]([a-z_]+\d{3})['"]/g)].map(m => m[1]).sort();
console.log('Total questions:', ids.length);
console.log('New prefixes:', [...new Set(ids.slice(-40).map(id => id.replace(/\d+$/, '')))]);
