const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'components', 'MenuGrid.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Find the MOCK_MENU array
const match = content.match(/const MOCK_MENU: MenuItem\[\] = (\[[\s\S]*?\]);\n/);

if (match) {
  const menuData = match[1];
  
  // Create src/data directory if it doesn't exist
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Write to src/data/menu.ts
  const newContent = `export type Category = "Breakfast" | "Muttons" | "Chickens" | "Fishes" | "Rices" | "Platters" | "Vegetables" | "Drinks" | "Chai";\n\nexport interface MenuItem {\n  id: number;\n  title: string;\n  price: number;\n  category: Category;\n  description: string;\n  image: string;\n  dietary: string[];\n}\n\nexport const MENU_DATA: MenuItem[] = ${menuData};\n`;
  
  fs.writeFileSync(path.join(dataDir, 'menu.ts'), newContent);
  console.log('Successfully created src/data/menu.ts');

  // Now replace MOCK_MENU in MenuGrid.tsx
  // We need to remove the Category, MenuItem definitions and MOCK_MENU
  content = content.replace(/type Category = [\s\S]*?;\n\ninterface MenuItem {[\s\S]*?}\n\nconst MOCK_MENU: MenuItem\[\] = \[[\s\S]*?\];\n/, '');
  
  // Add import
  content = content.replace(/import { useCart } from "@\/context\/CartContext";/, 'import { useCart } from "@/context/CartContext";\nimport { MENU_DATA, type Category, type MenuItem } from "@/data/menu";');
  
  // Replace references
  content = content.replace(/MOCK_MENU/g, 'MENU_DATA');

  fs.writeFileSync(filePath, content);
  console.log('Successfully updated MenuGrid.tsx');
} else {
  console.log('Could not find MOCK_MENU');
}
