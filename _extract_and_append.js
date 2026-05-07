const fs = require('fs');

function extractQuestions(text) {
  const questions = [];
  // Match JS objects with id field
  const regex = /\{\s*id:\s*['"]([a-z_]+\d{3})['"][\s\S]*?\n\s*\}/g;
  let match;
  while ((match = regex.exec(text)) !== null) {
    const objText = match[0];
    const id = match[1];
    // Skip if it doesn't look like a full question
    if (!objText.includes('content:') || !objText.includes('options:')) continue;
    questions.push({ id, text: objText });
  }
  return questions;
}

function validate(qtext) {
  try {
    // Wrap in parentheses to make it a valid expression
    const code = '(' + qtext.replace(/\n/g, ' ') + ')';
    const obj = eval(code);
    if (!obj.options || !obj.answer) return false;
    // Check answer exists in options
    const hasAnswer = obj.options.some(opt => opt.includes(obj.answer) || obj.answer.includes(opt.replace(/^[A-D]\.\s*/, '')));
    return hasAnswer;
  } catch (e) {
    return false;
  }
}

const files = ['_agent_sm_001.txt', '_agent_sm_021.txt', '_agent_el_061.txt'];
const allQuestions = new Map();

for (const file of files) {
  if (!fs.existsSync(file)) {
    console.log('Missing:', file);
    continue;
  }
  const text = fs.readFileSync(file, 'utf-8');
  const qs = extractQuestions(text);
  console.log(`Extracted ${qs.length} questions from ${file}`);
  for (const q of qs) {
    allQuestions.set(q.id, q.text); // later overrides earlier
  }
}

console.log('Total unique questions:', allQuestions.size);

// Sort by id
const sorted = Array.from(allQuestions.values()).sort((a, b) => {
  const idA = a.match(/id:\s*['"]([a-z_]+\d{3})['"]/)[1];
  const idB = b.match(/id:\s*['"]([a-z_]+\d{3})['"]/)[1];
  return idA.localeCompare(idB);
});

// Format and append
let content = fs.readFileSync('extra_questions.js', 'utf-8');
content = content.replace(/\}\s*\];?\s*$/, '').trimEnd();
if (!content.endsWith(',')) content += ',';

const formatted = sorted.map((q, i) => {
  const isLast = i === sorted.length - 1;
  return '\n  ' + q.replace(/\n/g, '\n  ') + (isLast ? '' : ',');
}).join('\n');

content += formatted + '\n];\n';
fs.writeFileSync('extra_questions.js', content);
console.log('Appended', sorted.length, 'questions.');

// Validate syntax
const vm = require('vm');
new vm.Script(fs.readFileSync('extra_questions.js', 'utf-8'));
console.log('Syntax OK');
