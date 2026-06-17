const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/components/MenuGrid.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Find the start of the MOCK_MENU array
const startPattern = 'const MOCK_MENU: MenuItem[] = ';
const startIdx = content.indexOf(startPattern);

if (startIdx !== -1) {
  const endPattern = '\n];\n';
  let endIdx = content.indexOf(endPattern, startIdx);
  
  if (endIdx !== -1) {
    const arrayString = content.substring(startIdx + startPattern.length, endIdx + 2);
    
    try {
      let mockMenu = JSON.parse(arrayString);
      
      const categoryToFolder = {
        "Breakfast": "Breakfast",
        "Muttons": "Mutton",
        "Chickens": "Chicken",
        "Fishes": "Fishes",
        "Platters": "Platters",
        "Rices": "Rice",
        "Vegetables": "Vegetables",
        "Drinks": "Drinks",
        "Chai": "Chai"
      };

      const publicDir = path.join(__dirname, '../public/assets/images');

      mockMenu = mockMenu.map(item => {
        const folder = categoryToFolder[item.category];
        if (folder) {
          // Special cases or case insensitivity might be needed, but files are named directly after items
          // e.g. "Aloo Paratha.jfif"
          // Let's check a few variations just in case (exact, lowercase, titlecase)
          const baseName = item.title;
          const extensions = ['.jfif', '.jpg', '.png', '.jpeg'];
          
          let foundPath = null;
          for (const ext of extensions) {
            const checkPathExact = path.join(publicDir, folder, baseName + ext);
            if (fs.existsSync(checkPathExact)) {
              foundPath = `/assets/images/${folder}/${baseName}${ext}`;
              break;
            }
            
            // Case-insensitive check by listing directory
            const dirPath = path.join(publicDir, folder);
            if (fs.existsSync(dirPath)) {
                const files = fs.readdirSync(dirPath);
                const matchingFile = files.find(f => f.toLowerCase() === (baseName + ext).toLowerCase());
                if (matchingFile) {
                    foundPath = `/assets/images/${folder}/${matchingFile}`;
                    break;
                }
            }
          }
          
          if (foundPath) {
            item.image = foundPath;
          } else {
             // Try to handle special cases like "Honey chai" vs "Honey Chai" which handled by case insensitive check above
          }
        }
        return item;
      });
      
      const newArrayString = JSON.stringify(mockMenu, null, 2);
      
      // Replace the old array string with the new one
      content = content.substring(0, startIdx + startPattern.length) + newArrayString + content.substring(endIdx + 2);
      
      fs.writeFileSync(filePath, content);
      console.log('Successfully updated the menu images');
    } catch (e) {
      console.error('Error parsing JSON:', e);
    }
  } else {
    console.error('Could not find end of MOCK_MENU');
  }
} else {
  console.error('Could not find start of MOCK_MENU');
}
