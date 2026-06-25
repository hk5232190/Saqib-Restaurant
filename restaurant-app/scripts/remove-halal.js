const fs = require('fs');
let c = fs.readFileSync('src/components/MenuGrid.tsx', 'utf8');
// Remove "Halal", (with trailing comma and newline)
c = c.replace(/"Halal",\n(\s+)/g, '$1');
// Remove "Halal"\n (last item in array, no trailing comma)
c = c.replace(/\n(\s+)"Halal"\n/g, '\n');
const remaining = (c.match(/"Halal"/g) || []).length;
fs.writeFileSync('src/components/MenuGrid.tsx', c);
console.log('Remaining Halal:', remaining);
