const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/MenuGrid.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Find the start of the MOCK_MENU array
const startPattern = 'const MOCK_MENU: MenuItem[] = ';
const startIdx = content.indexOf(startPattern);

if (startIdx !== -1) {
  // Find the end by looking for the next top-level statement or semi-colon before Categories
  const endPattern = '\n];\n';
  let endIdx = content.indexOf(endPattern, startIdx);
  
  if (endIdx !== -1) {
    const arrayString = content.substring(startIdx + startPattern.length, endIdx + 2);
    
    try {
      let mockMenu = JSON.parse(arrayString);
      
      // 1. Add Malai to Breakfast
      // Let's find highest ID
      const maxId = Math.max(...mockMenu.map(i => i.id));
      mockMenu.push({
        id: maxId + 1,
        title: "Malai",
        price: 400,
        category: "Breakfast",
        description: "Authentic Malai prepared with fresh ingredients.",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop",
        dietary: ["Halal", "Fresh"]
      });
      
      // 2. Remove drinks
      const drinksToRemove = [
        "Coca-Cola Zero", "Pepsi Black", "Fresh Lime", "Lemon Mint", 
        "Sweet Lassi", "Salted Lassi", "Mint Lassi", "Doodh Soda", 
        "Fresh Orange Juice", "Peach Juice (Seasonal)", "Apricot Juice (Seasonal)"
      ].map(s => s.toLowerCase());
      
      // 3. Remove chai items
      const chaiToRemove = [
        "Cardamom Qehwa", "Saffron Qehwa", "Almond Qehwa", "Latte", "Espresso", "Mocha"
      ].map(s => s.toLowerCase());
      
      mockMenu = mockMenu.filter(item => {
        if (item.category === 'Drinks') {
          return !drinksToRemove.includes(item.title.toLowerCase());
        }
        if (item.category === 'Chai') {
          return !chaiToRemove.includes(item.title.toLowerCase());
        }
        return true;
      });
      
      const newArrayString = JSON.stringify(mockMenu, null, 2);
      
      // Replace the old array string with the new one
      content = content.substring(0, startIdx + startPattern.length) + newArrayString + content.substring(endIdx + 2);
      
      fs.writeFileSync(filePath, content);
      console.log('Successfully updated the menu');
    } catch (e) {
      console.error('Error parsing JSON:', e);
    }
  } else {
    console.error('Could not find end of MOCK_MENU');
  }
} else {
  console.error('Could not find start of MOCK_MENU');
}
