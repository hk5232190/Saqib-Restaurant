"use client";

import React, { useState, useEffect } from "react";
import { Check, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

type Category = "Breakfast" | "Muttons" | "Chickens" | "Fishes" | "Rices" | "Platters" | "Vegetables" | "Drinks" | "Chai";

interface MenuItem {
  id: number;
  title: string;
  price: number;
  category: Category;
  description: string;
  image: string;
  dietary: string[];
}

const MOCK_MENU: MenuItem[] = [
  {
    "id": 1,
    "title": "Chana Puri",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Chana Puri prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Chana Puri.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 2,
    "title": "Aloo Paratha",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Aloo Paratha prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Aloo Paratha.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 3,
    "title": "Plain Paratha",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Plain Paratha prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Plain Paratha.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 4,
    "title": "Desi Ghee Paratha",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Desi Ghee Paratha prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Desi Ghee Paratha.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 5,
    "title": "Anda Paratha",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Anda Paratha prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Anda Paratha.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 6,
    "title": "Omelette",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Omelette prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Omelette.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 7,
    "title": "Fried Egg",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Fried Egg prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Fried Egg.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 8,
    "title": "Doodh Patti Chai",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Doodh Patti Chai prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Doodh Patti Chai.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 9,
    "title": "Fresh Butter & Honey",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Fresh Butter & Honey prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Fresh Butter & Honey.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 10,
    "title": "Yogurt",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Yogurt prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Yogurt.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 11,
    "title": "Kabuli Chana",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Kabuli Chana prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Kabuli Chana.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 12,
    "title": "Mutton Karahi",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Karahi prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Karahi.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 13,
    "title": "Shinwari Mutton Karahi",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Shinwari Mutton Karahi prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Shinwari Mutton Karahi.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 14,
    "title": "White Mutton Karahi",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic White Mutton Karahi prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/White Mutton Karahi.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 15,
    "title": "Namkeen Gosht",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Namkeen Gosht prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Namkeen Gosht.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 16,
    "title": "Mutton Tikka",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Tikka prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Tikka.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 17,
    "title": "Charsi Mutton Tikka",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Charsi Mutton Tikka prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Charsi Mutton Tikka.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 18,
    "title": "Mutton Seekh Kebab",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Seekh Kebab prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Seekh Kebab.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 19,
    "title": "Mutton Peshawari Kebab",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Peshawari Kebab prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Peshawari Kebab.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 20,
    "title": "Mutton Qorma",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Qorma prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Qorma.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 21,
    "title": "Mutton Handi",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Handi prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Handi.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 22,
    "title": "Mutton Achari Handi",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Achari Handi prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Achari Handi.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 23,
    "title": "Mutton Pulao",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Pulao prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Pulao.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 24,
    "title": "Mutton Rosh",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Rosh prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Rosh.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 25,
    "title": "Mutton Kunna",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Kunna prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Kunna.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 26,
    "title": "Mutton Dampukht",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Dampukht prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Dampukht.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 27,
    "title": "Chapli Kebab",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Chapli Kebab prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Chapli Kebab.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 28,
    "title": "Chicken Karahi",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Karahi prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Karahi.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 29,
    "title": "Chicken White Karahi",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken White Karahi prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken White Karahi.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 30,
    "title": "Chicken Shinwari Karahi",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Shinwari Karahi prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Shinwari Karahi.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 31,
    "title": "Chicken Handi",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Handi prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Handi.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 32,
    "title": "Chicken Achari Handi",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Achari Handi prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Achari Handi.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 33,
    "title": "Chicken Qorma",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Qorma prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Qorma.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 34,
    "title": "Chicken Tikka",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Tikka prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Tikka.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 35,
    "title": "Chicken Malai Boti",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Malai Boti prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Malai Boti.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 36,
    "title": "Chicken Seekh Kebab",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Seekh Kebab prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Seekh Kebab.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 37,
    "title": "Chicken Reshmi Kebab",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Reshmi Kebab prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Reshmi Kebab.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 38,
    "title": "Chicken Charsi Tikka",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Charsi Tikka prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Charsi Tikka.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 39,
    "title": "Chicken Roast",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Roast prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Roast.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 40,
    "title": "Chicken Steam Roast",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Steam Roast prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Steam Roast.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 41,
    "title": "Chicken Peshawari Kebab",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Peshawari Kebab prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Peshawari Kebab.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 42,
    "title": "Swat Trout Fish (Fried)",
    "price": 2000,
    "category": "Fishes",
    "description": "Authentic Swat Trout Fish (Fried) prepared with fresh ingredients.",
    "image": "/assets/images/Fishes/Swat Trout Fish (Fried).jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 43,
    "title": "Swat Trout Fish (Grilled)",
    "price": 2000,
    "category": "Fishes",
    "description": "Authentic Swat Trout Fish (Grilled) prepared with fresh ingredients.",
    "image": "/assets/images/Fishes/Swat Trout Fish (Grilled).jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 44,
    "title": "Swat Trout Fish (Masala)",
    "price": 2000,
    "category": "Fishes",
    "description": "Authentic Swat Trout Fish (Masala) prepared with fresh ingredients.",
    "image": "/assets/images/Fishes/Swat Trout Fish (Masala).jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 45,
    "title": "Kabuli Pulao",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Kabuli Pulao prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Kabuli Pulao.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 46,
    "title": "Mutton Pulao",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Mutton Pulao prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Mutton Pulao.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 47,
    "title": "Chicken Pulao",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Chicken Pulao prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Chicken Pulao.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 48,
    "title": "Yakhni Pulao",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Yakhni Pulao prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Yakhni Pulao.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 49,
    "title": "Chicken Biryani",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Chicken Biryani prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Chicken Biryani.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 50,
    "title": "Beef Biryani",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Beef Biryani prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Beef Biryani.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 51,
    "title": "Plain Rice",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Plain Rice prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Plain Rice.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 52,
    "title": "Zeera Rice",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Zeera Rice prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Zeera Rice.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 53,
    "title": "Peas Pulao",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Peas Pulao prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Peas Pulao.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 54,
    "title": "Special Swati Pulao",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Special Swati Pulao prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Special Swati Pulao.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 55,
    "title": "Daal Mash",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Daal Mash prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Daal Mash.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 56,
    "title": "Daal Chana",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Daal Chana prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Daal Chana.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 57,
    "title": "Daal Fry",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Daal Fry prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Daal Fry.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 58,
    "title": "Mix Vegetable",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Mix Vegetable prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Mix Vegetable.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 59,
    "title": "Aloo Palak",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Aloo Palak prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Aloo Palak.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 60,
    "title": "Palak Paneer",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Palak Paneer prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Palak Paneer.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 61,
    "title": "Bhindi Masala",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Bhindi Masala prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Bhindi Masala.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 62,
    "title": "Baingan Bharta",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Baingan Bharta prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Baingan Bharta.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 63,
    "title": "Aloo Gobhi",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Aloo Gobhi prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Aloo Gobhi.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 64,
    "title": "Chana Masala",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Chana Masala prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Chana Masala.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 65,
    "title": "Rajma",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Rajma prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Rajma.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 66,
    "title": "Seasonal Vegetable Curry",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Seasonal Vegetable Curry prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Seasonal Vegetable Curry.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 67,
    "title": "Mineral Water",
    "price": 300,
    "category": "Drinks",
    "description": "Authentic Mineral Water prepared with fresh ingredients.",
    "image": "/assets/images/Drinks/Mineral Water.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 68,
    "title": "Coca-Cola",
    "price": 300,
    "category": "Drinks",
    "description": "Authentic Coca-Cola prepared with fresh ingredients.",
    "image": "/assets/images/Drinks/Coca-Cola.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 70,
    "title": "Pepsi",
    "price": 300,
    "category": "Drinks",
    "description": "Authentic Pepsi prepared with fresh ingredients.",
    "image": "/assets/images/Drinks/Pepsi.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 72,
    "title": "7UP",
    "price": 300,
    "category": "Drinks",
    "description": "Authentic 7UP prepared with fresh ingredients.",
    "image": "/assets/images/Drinks/7UP.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 73,
    "title": "Sprite",
    "price": 300,
    "category": "Drinks",
    "description": "Authentic Sprite prepared with fresh ingredients.",
    "image": "/assets/images/Drinks/Sprite.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 74,
    "title": "Mountain Dew",
    "price": 300,
    "category": "Drinks",
    "description": "Authentic Mountain Dew prepared with fresh ingredients.",
    "image": "/assets/images/Drinks/Mountain Dew.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 84,
    "title": "Doodh Patti",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Doodh Patti prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Doodh Patti.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 85,
    "title": "Karak Chai",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Karak Chai prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Karak Chai.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 86,
    "title": "Elaichi Chai",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Elaichi Chai prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Elaichi Chai.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 87,
    "title": "Kashmiri Chai",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Kashmiri Chai prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Kashmiri Chai.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 88,
    "title": "Special Swati Chai",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Special Swati Chai prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Special Swati Chai.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 89,
    "title": "Honey Chai",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Honey Chai prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Honey Chai.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 90,
    "title": "Green Tea",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Green Tea prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Green Tea.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 91,
    "title": "Peshawari Qehwa",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Peshawari Qehwa prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Peshawari Qehwa.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 94,
    "title": "Honey Green Tea",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Honey Green Tea prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Honey Green Tea.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 95,
    "title": "Lemon Green Tea",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Lemon Green Tea prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Lemon Green Tea.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 97,
    "title": "Black Coffee",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Black Coffee prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Black Coffee.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 98,
    "title": "Milk Coffee",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Milk Coffee prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Milk Coffee.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 99,
    "title": "Cappuccino",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Cappuccino prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Cappuccino.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 103,
    "title": "Special House Coffee",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Special House Coffee prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Special House Coffee.jfif",
    "dietary": [
      "Halal"
    ]
  },
  {
    "id": 104,
    "title": "Chapli Kebab Platter",
    "price": 2500,
    "category": "Platters",
    "description": "Authentic Chapli Kebab Platter prepared with fresh ingredients.",
    "image": "/assets/images/Platters/Chapli Kebab Platter.jfif",
    "dietary": [
      "Halal",
      "Sharing"
    ]
  },
  {
    "id": 105,
    "title": "Kabuli Pulao Platter",
    "price": 2800,
    "category": "Platters",
    "description": "Authentic Kabuli Pulao Platter prepared with fresh ingredients.",
    "image": "/assets/images/Platters/Kabuli Pulao Platter.jfif",
    "dietary": [
      "Halal",
      "Sharing"
    ]
  },
  {
    "id": 106,
    "title": "Mixed BBQ Platter",
    "price": 3500,
    "category": "Platters",
    "description": "Authentic Mixed BBQ Platter prepared with fresh ingredients.",
    "image": "/assets/images/Platters/Mixed BBQ Platter.jfif",
    "dietary": [
      "Halal",
      "Sharing"
    ]
  },
  {
    "id": 107,
    "title": "Family BBQ Platter",
    "price": 5500,
    "category": "Platters",
    "description": "Authentic Family BBQ Platter prepared with fresh ingredients.",
    "image": "/assets/images/Platters/Family BBQ Platter.jfif",
    "dietary": [
      "Halal",
      "Sharing"
    ]
  },
  {
    "id": 108,
    "title": "Swat Trout Fish Platter",
    "price": 4500,
    "category": "Platters",
    "description": "Authentic Swat Trout Fish Platter prepared with fresh ingredients.",
    "image": "/assets/images/Platters/Swat Trout Fish Platter.jfif",
    "dietary": [
      "Halal",
      "Sharing"
    ]
  },
  {
    "id": 109,
    "title": "Swati Special Platter",
    "price": 6000,
    "category": "Platters",
    "description": "Authentic Swati Special Platter prepared with fresh ingredients.",
    "image": "/assets/images/Platters/Swati Special Platter.jfif",
    "dietary": [
      "Halal",
      "Sharing"
    ]
  },
  {
    "id": 110,
    "title": "Malai",
    "price": 400,
    "category": "Breakfast",
    "description": "Authentic Malai prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Malai.jfif",
    "dietary": [
      "Halal",
      "Fresh"
    ]
  }
];

const CATEGORIES: Category[] = ["Breakfast", "Muttons", "Chickens", "Fishes", "Rices", "Platters", "Vegetables", "Drinks", "Chai"];

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("Breakfast");
  const { addToCart } = useCart();
  const [addedIds, setAddedIds] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const filteredMenu = MOCK_MENU.filter((item) => item.category === activeCategory);

  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
      category: item.category,
    });
    setAddedIds((prev) => [...prev, item.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== item.id));
    }, 1200);
  };

  return (
    <section id="menu" className="py-20 bg-[#FAF9F6] min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12">
          <span className="text-brand text-xs uppercase tracking-[0.25em] font-semibold block mb-3">
            Gourmet Mountain Dining
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground mb-4 uppercase tracking-widest font-serif"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            SAQIB RESTUARENT <span className="text-brand italic font-normal">MENU</span>
          </h2>
          <div className="h-0.5 w-24 bg-brand mx-auto mb-8 rounded" />

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => {
                  if (activeCategory !== category) {
                    setIsLoading(true);
                    setActiveCategory(category);
                    setTimeout(() => {
                      setIsLoading(false);
                    }, 350);
                  }
                }}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all uppercase tracking-wider border ${activeCategory === category
                    ? "bg-brand border-brand text-white shadow-[0_4px_12px_rgba(13,62,38,0.25)]"
                    : "bg-white border-stone-200 text-stone-600 hover:border-brand hover:text-brand"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[50vh]">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-stone-100 animate-pulse shadow-sm flex flex-col justify-between h-[450px]">
                <div className="relative h-52 bg-brand/10" />
                <div className="p-6 space-y-4 flex-grow">
                  <div className="flex justify-between items-start gap-4">
                    <div className="h-6 bg-brand/10 rounded w-2/3" />
                    <div className="h-6 bg-brand/20 rounded w-1/4" />
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="h-3 bg-brand/10 rounded w-full" />
                    <div className="h-3 bg-brand/10 rounded w-5/6" />
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="h-12 bg-brand/10 rounded-xl w-full" />
                </div>
              </div>
            ))
          ) : (
            <AnimatePresence mode="popLayout">
              {filteredMenu.map((item, idx) => {
                const isAdded = addedIds.includes(item.id);
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 30 }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    className="bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-stone-100/50 transition-all duration-500 group flex flex-col justify-between h-[460px]"
                  >
                    <div>
                      {/* Image container */}
                      <div className="relative h-52 overflow-hidden bg-stone-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute top-4 right-4 flex gap-2 flex-wrap justify-end max-w-[70%] z-10">
                          {item.dietary.map((tag) => (
                            <span
                              key={tag}
                              className="bg-white/90 backdrop-blur-sm text-[9px] uppercase tracking-widest font-bold text-brand px-2.5 py-1 rounded-full border border-brand/20 shadow-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Content details */}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2 gap-2">
                          <h3 className="text-xl font-bold text-stone-800 font-serif leading-snug tracking-wide line-clamp-1">
                            {item.title}
                          </h3>
                          <span className="text-base font-bold text-brand whitespace-nowrap mt-0.5 font-sans">
                            Rs. {item.price.toLocaleString("en-PK")}
                          </span>
                        </div>
                        <p className="text-stone-500 text-xs md:text-sm font-light line-clamp-3 leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Add to Cart Trigger */}
                    <div className="p-6 pt-0">
                      <motion.button
                        onClick={() => handleAddToCart(item)}
                        whileTap={{ scale: 0.96 }}
                        whileHover={!isAdded ? { scale: 1.02 } : {}}
                        transition={{ duration: 0.35 }}
                        className={`w-full py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider border ${isAdded
                            ? "bg-emerald-600 text-white border-emerald-600 shadow-[0_4px_12px_rgba(5,150,105,0.3)] font-sans"
                            : "bg-brand border-brand hover:bg-[#0f4d2f] text-white transition-all duration-300 font-sans"
                          }`}
                      >
                        <AnimatePresence mode="wait">
                          {isAdded ? (
                            <motion.span
                              key="added"
                              initial={{ opacity: 0, scale: 0.7 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.7 }}
                              className="flex items-center gap-2"
                            >
                              <Check size={14} /> Added!
                            </motion.span>
                          ) : (
                            <motion.span
                              key="add"
                              initial={{ opacity: 0, scale: 0.7 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.7 }}
                              className="flex items-center gap-2"
                            >
                              <Plus size={14} /> Add to Cart
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          )}
        </div>
      </motion.div>
    </section>
  );
}
