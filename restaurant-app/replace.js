const fs = require('fs');
const path = require('path');

const replacements = [
  { regex: /bg-stone-900/g, replacement: 'bg-background' },
  { regex: /bg-stone-950/g, replacement: 'bg-background' },
  { regex: /bg-stone-800/g, replacement: 'bg-surface' },
  { regex: /border-stone-700/g, replacement: 'border-border' },
  { regex: /border-stone-800/g, replacement: 'border-border' },
  { regex: /text-amber-500/g, replacement: 'text-primary' },
  { regex: /bg-amber-500/g, replacement: 'bg-primary' },
  { regex: /border-amber-500/g, replacement: 'border-primary' },
  { regex: /fill-amber-500/g, replacement: 'fill-primary' },
  { regex: /text-stone-900/g, replacement: 'text-background' }
];

function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);

  for (const file of files) {
    const fullPath = path.join(dirPath, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      for (const { regex, replacement } of replacements) {
        content = content.replace(regex, replacement);
      }

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(__dirname, 'src'));
console.log('Done replacing old theme classes.');
