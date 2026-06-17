const fs = require('fs');

const rawData = {
  "Breakfast": [
    "Chana Puri", "Aloo Paratha", "Plain Paratha", "Desi Ghee Paratha", 
    "Anda Paratha", "Omelette", "Fried Egg", "Doodh Patti Chai", 
    "Fresh Butter & Honey", "Yogurt", "Kabuli Chana"
  ],
  "Muttons": [
    "Mutton Karahi", "Shinwari Mutton Karahi", "White Mutton Karahi", "Namkeen Gosht",
    "Mutton Tikka", "Charsi Mutton Tikka", "Mutton Seekh Kebab", "Mutton Peshawari Kebab",
    "Mutton Qorma", "Mutton Handi", "Mutton Achari Handi", "Mutton Pulao",
    "Mutton Rosh", "Mutton Kunna", "Mutton Dampukht", "Chapli Kebab"
  ],
  "Chickens": [
    "Chicken Karahi", "Chicken White Karahi", "Chicken Shinwari Karahi", "Chicken Handi",
    "Chicken Achari Handi", "Chicken Qorma", "Chicken Tikka", "Chicken Malai Boti",
    "Chicken Seekh Kebab", "Chicken Reshmi Kebab", "Chicken Charsi Tikka", "Chicken Roast",
    "Chicken Steam Roast", "Chicken Peshawari Kebab"
  ],
  "Fishes": [
    "Swat Trout Fish (Fried)", "Swat Trout Fish (Grilled)", "Swat Trout Fish (Masala)"
  ],
  "Rices": [
    "Kabuli Pulao", "Mutton Pulao", "Chicken Pulao", "Yakhni Pulao", "Chicken Biryani",
    "Beef Biryani", "Plain Rice", "Zeera Rice", "Peas Pulao", "Special Swati Pulao"
  ],
  "Vegetables": [
    "Daal Mash", "Daal Chana", "Daal Fry", "Mix Vegetable", "Aloo Palak",
    "Palak Paneer", "Bhindi Masala", "Baingan Bharta", "Aloo Gobhi", "Chana Masala",
    "Rajma", "Seasonal Vegetable Curry"
  ],
  "Drinks": [
    "Mineral Water", "Coca-Cola", "Coca-Cola Zero", "Pepsi", "Pepsi Black", "7UP",
    "Sprite", "Mountain Dew", "Fresh Lime", "Lemon Mint", "Sweet Lassi", "Salted Lassi",
    "Mint Lassi", "Doodh Soda", "Fresh Orange Juice", "Peach Juice (Seasonal)", "Apricot Juice (Seasonal)"
  ],
  "Chai": [
    "Doodh Patti", "Karak Chai", "Elaichi Chai", "Kashmiri Chai", "Special Swati Chai", "Honey Chai",
    "Green Tea", "Peshawari Qehwa", "Cardamom Qehwa", "Saffron Qehwa", "Honey Green Tea", "Lemon Green Tea", "Almond Qehwa",
    "Black Coffee", "Milk Coffee", "Cappuccino", "Latte", "Espresso", "Mocha", "Special House Coffee"
  ]
};

const images = {
  "Breakfast": "https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=600&auto=format&fit=crop",
  "Muttons": "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=600&auto=format&fit=crop",
  "Chickens": "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop",
  "Fishes": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop",
  "Rices": "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=600&auto=format&fit=crop",
  "Vegetables": "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=600&auto=format&fit=crop",
  "Drinks": "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=600&auto=format&fit=crop",
  "Chai": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=600&auto=format&fit=crop"
};

let idCounter = 1;
const MOCK_MENU = [];

for (const [category, items] of Object.entries(rawData)) {
  for (const item of items) {
    let price = 500;
    if (category === "Muttons" || category === "Fishes") price = 2000;
    else if (category === "Chickens") price = 1500;
    else if (category === "Drinks" || category === "Chai") price = 300;
    else if (category === "Rices") price = 800;
    
    MOCK_MENU.push({
      id: idCounter++,
      title: item,
      price: price,
      category: category,
      description: `Authentic ${item} prepared with fresh ingredients.`,
      image: images[category],
      dietary: ["Halal"]
    });
  }
}

const newMockMenuString = `const MOCK_MENU: MenuItem[] = ${JSON.stringify(MOCK_MENU, null, 2)};`;

const filePath = 'src/components/MenuGrid.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

// Replace the Swat Palace Menu with SAQIB RESTUARENT MANU
content = content.replace(
  'Swat Palace <span className="text-brand italic font-normal">Menu</span>',
  'SAQIB RESTUARENT <span className="text-brand italic font-normal">MANU</span>'
);

// Replace the MOCK_MENU array
// We find the index of "const MOCK_MENU: MenuItem[] = ["
const startIdx = content.indexOf('const MOCK_MENU: MenuItem[] = [');
if (startIdx !== -1) {
  // Find the end of MOCK_MENU
  const endMarker = 'const CATEGORIES: Category[]';
  const endIdx = content.indexOf(endMarker);
  
  if (endIdx !== -1) {
    // Extract everything before startIdx and everything from endIdx
    const before = content.substring(0, startIdx);
    const after = content.substring(endIdx);
    content = before + newMockMenuString + '\n\n' + after;
    fs.writeFileSync(filePath, content);
    console.log("Successfully updated MenuGrid.tsx");
  } else {
    console.error("Could not find end of MOCK_MENU array");
  }
} else {
  console.error("Could not find start of MOCK_MENU array");
}
