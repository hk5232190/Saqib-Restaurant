import express from "express";

const router = express.Router();

// In-memory array for menu
let menuItems = [
  {
    id: 1,
    title: "Truffle Gold Burger",
    price: 1250,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1599&auto=format&fit=crop",
    dietary: ["Halal"],
  },
  {
    id: 2,
    title: "Classic Wagyu Smash",
    price: 1450,
    category: "Burgers",
    image: "https://images.unsplash.com/photo-1594212848182-16aa1494c252?q=80&w=1664&auto=format&fit=crop",
    dietary: ["Halal", "Gluten-Free Option"],
  },
  {
    id: 3,
    title: "Midnight Berry Mocktail",
    price: 550,
    category: "Drinks",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1587&auto=format&fit=crop",
    dietary: ["Vegan"],
  },
  {
    id: 4,
    title: "Dark Chocolate Lava Cake",
    price: 850,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1587&auto=format&fit=crop",
    dietary: ["Vegetarian"],
  }
];

// GET all menu items
router.get("/", (req, res) => {
  res.json(menuItems);
});

// POST a new menu item
router.post("/", (req, res) => {
  try {
    const { title, price, category, image, dietary } = req.body;
    const newItem = {
      id: Date.now(),
      title,
      price,
      category,
      image,
      dietary: dietary || [],
    };
    menuItems.push(newItem);
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: "Invalid data", error: error.message });
  }
});

export default router;
