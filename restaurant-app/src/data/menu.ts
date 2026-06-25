export type Category = "Breakfast" | "Muttons" | "Chickens" | "Fishes" | "Rices" | "Platters" | "Vegetables" | "Drinks" | "Chai";

export interface MenuItem {
  id: number;
  title: string;
  price: number;
  category: Category;
  description: string;
  image: string;
  dietary: string[];
}

export const MENU_DATA: MenuItem[] = [
  {
    "id": 1,
    "title": "Chana Puri",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Chana Puri prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Chana Puri.jfif",
    "dietary": []
  },
  {
    "id": 2,
    "title": "Aloo Paratha",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Aloo Paratha prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Aloo Paratha.jfif",
    "dietary": []
  },
  {
    "id": 3,
    "title": "Plain Paratha",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Plain Paratha prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Plain Paratha.jfif",
    "dietary": []
  },
  {
    "id": 4,
    "title": "Desi Ghee Paratha",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Desi Ghee Paratha prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Desi Ghee Paratha.jfif",
    "dietary": []
  },
  {
    "id": 5,
    "title": "Anda Paratha",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Anda Paratha prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Anda Paratha.jfif",
    "dietary": []
  },
  {
    "id": 6,
    "title": "Omelette",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Omelette prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Omelette.jfif",
    "dietary": []
  },
  {
    "id": 7,
    "title": "Fried Egg",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Fried Egg prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Fried Egg.jfif",
    "dietary": []
  },
  {
    "id": 8,
    "title": "Doodh Patti Chai",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Doodh Patti Chai prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Doodh Patti Chai.jfif",
    "dietary": []
  },
  {
    "id": 9,
    "title": "Fresh Butter & Honey",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Fresh Butter & Honey prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Fresh Butter & Honey.jfif",
    "dietary": []
  },
  {
    "id": 10,
    "title": "Yogurt",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Yogurt prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Yogurt.jfif",
    "dietary": []
  },
  {
    "id": 11,
    "title": "Kabuli Chana",
    "price": 500,
    "category": "Breakfast",
    "description": "Authentic Kabuli Chana prepared with fresh ingredients.",
    "image": "/assets/images/Breakfast/Kabuli Chana.jfif",
    "dietary": []
  },
  {
    "id": 12,
    "title": "Mutton Karahi",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Karahi prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Karahi.jfif",
    "dietary": []
  },
  {
    "id": 13,
    "title": "Shinwari Mutton Karahi",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Shinwari Mutton Karahi prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Shinwari Mutton Karahi.jfif",
    "dietary": []
  },
  {
    "id": 14,
    "title": "White Mutton Karahi",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic White Mutton Karahi prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/White Mutton Karahi.jfif",
    "dietary": []
  },
  {
    "id": 15,
    "title": "Namkeen Gosht",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Namkeen Gosht prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Namkeen Gosht.jfif",
    "dietary": []
  },
  {
    "id": 16,
    "title": "Mutton Tikka",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Tikka prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Tikka.jfif",
    "dietary": []
  },
  {
    "id": 17,
    "title": "Charsi Mutton Tikka",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Charsi Mutton Tikka prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Charsi Mutton Tikka.jfif",
    "dietary": []
  },
  {
    "id": 18,
    "title": "Mutton Seekh Kebab",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Seekh Kebab prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Seekh Kebab.jfif",
    "dietary": []
  },
  {
    "id": 19,
    "title": "Mutton Peshawari Kebab",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Peshawari Kebab prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Peshawari Kebab.jfif",
    "dietary": []
  },
  {
    "id": 20,
    "title": "Mutton Qorma",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Qorma prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Qorma.jfif",
    "dietary": []
  },
  {
    "id": 21,
    "title": "Mutton Handi",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Handi prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Handi.jfif",
    "dietary": []
  },
  {
    "id": 22,
    "title": "Mutton Achari Handi",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Achari Handi prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Achari Handi.jfif",
    "dietary": []
  },
  {
    "id": 23,
    "title": "Mutton Pulao",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Pulao prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Pulao.jfif",
    "dietary": []
  },
  {
    "id": 24,
    "title": "Mutton Rosh",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Rosh prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Rosh.jfif",
    "dietary": []
  },
  {
    "id": 25,
    "title": "Mutton Kunna",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Kunna prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Kunna.jfif",
    "dietary": []
  },
  {
    "id": 26,
    "title": "Mutton Dampukht",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Mutton Dampukht prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Mutton Dampukht.jfif",
    "dietary": []
  },
  {
    "id": 27,
    "title": "Chapli Kebab",
    "price": 2000,
    "category": "Muttons",
    "description": "Authentic Chapli Kebab prepared with fresh ingredients.",
    "image": "/assets/images/Mutton/Chapli Kebab.jfif",
    "dietary": []
  },
  {
    "id": 28,
    "title": "Chicken Karahi",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Karahi prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Karahi.jfif",
    "dietary": []
  },
  {
    "id": 29,
    "title": "Chicken White Karahi",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken White Karahi prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken White Karahi.jfif",
    "dietary": []
  },
  {
    "id": 30,
    "title": "Chicken Shinwari Karahi",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Shinwari Karahi prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Shinwari Karahi.jfif",
    "dietary": []
  },
  {
    "id": 31,
    "title": "Chicken Handi",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Handi prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Handi.jfif",
    "dietary": []
  },
  {
    "id": 32,
    "title": "Chicken Achari Handi",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Achari Handi prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Achari Handi.jfif",
    "dietary": []
  },
  {
    "id": 33,
    "title": "Chicken Qorma",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Qorma prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Qorma.jfif",
    "dietary": []
  },
  {
    "id": 34,
    "title": "Chicken Tikka",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Tikka prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Tikka.jfif",
    "dietary": []
  },
  {
    "id": 35,
    "title": "Chicken Malai Boti",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Malai Boti prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Malai Boti.jfif",
    "dietary": []
  },
  {
    "id": 36,
    "title": "Chicken Seekh Kebab",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Seekh Kebab prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Seekh Kebab.jfif",
    "dietary": []
  },
  {
    "id": 37,
    "title": "Chicken Reshmi Kebab",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Reshmi Kebab prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Reshmi Kebab.jfif",
    "dietary": []
  },
  {
    "id": 38,
    "title": "Chicken Charsi Tikka",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Charsi Tikka prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Charsi Tikka.jfif",
    "dietary": []
  },
  {
    "id": 39,
    "title": "Chicken Roast",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Roast prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Roast.jfif",
    "dietary": []
  },
  {
    "id": 40,
    "title": "Chicken Steam Roast",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Steam Roast prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Steam Roast.jfif",
    "dietary": []
  },
  {
    "id": 41,
    "title": "Chicken Peshawari Kebab",
    "price": 1500,
    "category": "Chickens",
    "description": "Authentic Chicken Peshawari Kebab prepared with fresh ingredients.",
    "image": "/assets/images/Chicken/Chicken Peshawari Kebab.jfif",
    "dietary": []
  },
  {
    "id": 42,
    "title": "Swat Trout Fish (Fried)",
    "price": 2000,
    "category": "Fishes",
    "description": "Authentic Swat Trout Fish (Fried) prepared with fresh ingredients.",
    "image": "/assets/images/Fishes/Swat Trout Fish (Fried).jfif",
    "dietary": []
  },
  {
    "id": 43,
    "title": "Swat Trout Fish (Grilled)",
    "price": 2000,
    "category": "Fishes",
    "description": "Authentic Swat Trout Fish (Grilled) prepared with fresh ingredients.",
    "image": "/assets/images/Fishes/Swat Trout Fish (Grilled).jfif",
    "dietary": []
  },
  {
    "id": 44,
    "title": "Swat Trout Fish (Masala)",
    "price": 2000,
    "category": "Fishes",
    "description": "Authentic Swat Trout Fish (Masala) prepared with fresh ingredients.",
    "image": "/assets/images/Fishes/Swat Trout Fish (Masala).jfif",
    "dietary": []
  },
  {
    "id": 45,
    "title": "Kabuli Pulao",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Kabuli Pulao prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Kabuli Pulao.jfif",
    "dietary": []
  },
  {
    "id": 46,
    "title": "Mutton Pulao",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Mutton Pulao prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Mutton Pulao.jfif",
    "dietary": []
  },
  {
    "id": 47,
    "title": "Chicken Pulao",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Chicken Pulao prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Chicken Pulao.jfif",
    "dietary": []
  },
  {
    "id": 48,
    "title": "Yakhni Pulao",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Yakhni Pulao prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Yakhni Pulao.jfif",
    "dietary": []
  },
  {
    "id": 49,
    "title": "Chicken Biryani",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Chicken Biryani prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Chicken Biryani.jfif",
    "dietary": []
  },
  {
    "id": 50,
    "title": "Beef Biryani",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Beef Biryani prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Beef Biryani.jfif",
    "dietary": []
  },
  {
    "id": 51,
    "title": "Plain Rice",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Plain Rice prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Plain Rice.jfif",
    "dietary": []
  },
  {
    "id": 52,
    "title": "Zeera Rice",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Zeera Rice prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Zeera Rice.jfif",
    "dietary": []
  },
  {
    "id": 53,
    "title": "Peas Pulao",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Peas Pulao prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Peas Pulao.jfif",
    "dietary": []
  },
  {
    "id": 54,
    "title": "Special Swati Pulao",
    "price": 800,
    "category": "Rices",
    "description": "Authentic Special Swati Pulao prepared with fresh ingredients.",
    "image": "/assets/images/Rice/Special Swati Pulao.jfif",
    "dietary": []
  },
  {
    "id": 55,
    "title": "Daal Mash",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Daal Mash prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Daal Mash.jfif",
    "dietary": []
  },
  {
    "id": 56,
    "title": "Daal Chana",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Daal Chana prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Daal Chana.jfif",
    "dietary": []
  },
  {
    "id": 57,
    "title": "Daal Fry",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Daal Fry prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Daal Fry.jfif",
    "dietary": []
  },
  {
    "id": 58,
    "title": "Mix Vegetable",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Mix Vegetable prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Mix Vegetable.jfif",
    "dietary": []
  },
  {
    "id": 59,
    "title": "Aloo Palak",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Aloo Palak prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Aloo Palak.jfif",
    "dietary": []
  },
  {
    "id": 60,
    "title": "Palak Paneer",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Palak Paneer prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Palak Paneer.jfif",
    "dietary": []
  },
  {
    "id": 61,
    "title": "Bhindi Masala",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Bhindi Masala prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Bhindi Masala.jfif",
    "dietary": []
  },
  {
    "id": 62,
    "title": "Baingan Bharta",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Baingan Bharta prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Baingan Bharta.jfif",
    "dietary": []
  },
  {
    "id": 63,
    "title": "Aloo Gobhi",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Aloo Gobhi prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Aloo Gobhi.jfif",
    "dietary": []
  },
  {
    "id": 64,
    "title": "Chana Masala",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Chana Masala prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Chana Masala.jfif",
    "dietary": []
  },
  {
    "id": 65,
    "title": "Rajma",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Rajma prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Rajma.jfif",
    "dietary": []
  },
  {
    "id": 66,
    "title": "Seasonal Vegetable Curry",
    "price": 500,
    "category": "Vegetables",
    "description": "Authentic Seasonal Vegetable Curry prepared with fresh ingredients.",
    "image": "/assets/images/Vegetables/Seasonal Vegetable Curry.jfif",
    "dietary": []
  },
  {
    "id": 67,
    "title": "Mineral Water",
    "price": 300,
    "category": "Drinks",
    "description": "Authentic Mineral Water prepared with fresh ingredients.",
    "image": "/assets/images/Drinks/Mineral Water.jfif",
    "dietary": []
  },
  {
    "id": 68,
    "title": "Coca-Cola",
    "price": 300,
    "category": "Drinks",
    "description": "Authentic Coca-Cola prepared with fresh ingredients.",
    "image": "/assets/images/Drinks/Coca-Cola.jfif",
    "dietary": []
  },
  {
    "id": 70,
    "title": "Pepsi",
    "price": 300,
    "category": "Drinks",
    "description": "Authentic Pepsi prepared with fresh ingredients.",
    "image": "/assets/images/Drinks/Pepsi.jfif",
    "dietary": []
  },
  {
    "id": 72,
    "title": "7UP",
    "price": 300,
    "category": "Drinks",
    "description": "Authentic 7UP prepared with fresh ingredients.",
    "image": "/assets/images/Drinks/7UP.jfif",
    "dietary": []
  },
  {
    "id": 73,
    "title": "Sprite",
    "price": 300,
    "category": "Drinks",
    "description": "Authentic Sprite prepared with fresh ingredients.",
    "image": "/assets/images/Drinks/Sprite.jfif",
    "dietary": []
  },
  {
    "id": 74,
    "title": "Mountain Dew",
    "price": 300,
    "category": "Drinks",
    "description": "Authentic Mountain Dew prepared with fresh ingredients.",
    "image": "/assets/images/Drinks/Mountain Dew.jfif",
    "dietary": []
  },
  {
    "id": 84,
    "title": "Doodh Patti",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Doodh Patti prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Doodh Patti.jfif",
    "dietary": []
  },
  {
    "id": 85,
    "title": "Karak Chai",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Karak Chai prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Karak Chai.jfif",
    "dietary": []
  },
  {
    "id": 86,
    "title": "Elaichi Chai",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Elaichi Chai prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Elaichi Chai.jfif",
    "dietary": []
  },
  {
    "id": 87,
    "title": "Kashmiri Chai",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Kashmiri Chai prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Kashmiri Chai.jfif",
    "dietary": []
  },
  {
    "id": 88,
    "title": "Special Swati Chai",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Special Swati Chai prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Special Swati Chai.jfif",
    "dietary": []
  },
  {
    "id": 89,
    "title": "Honey Chai",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Honey Chai prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Honey Chai.jfif",
    "dietary": []
  },
  {
    "id": 90,
    "title": "Green Tea",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Green Tea prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Green Tea.jfif",
    "dietary": []
  },
  {
    "id": 91,
    "title": "Peshawari Qehwa",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Peshawari Qehwa prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Peshawari Qehwa.jfif",
    "dietary": []
  },
  {
    "id": 94,
    "title": "Honey Green Tea",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Honey Green Tea prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Honey Green Tea.jfif",
    "dietary": []
  },
  {
    "id": 95,
    "title": "Lemon Green Tea",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Lemon Green Tea prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Lemon Green Tea.jfif",
    "dietary": []
  },
  {
    "id": 97,
    "title": "Black Coffee",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Black Coffee prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Black Coffee.jfif",
    "dietary": []
  },
  {
    "id": 98,
    "title": "Milk Coffee",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Milk Coffee prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Milk Coffee.jfif",
    "dietary": []
  },
  {
    "id": 99,
    "title": "Cappuccino",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Cappuccino prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Cappuccino.jfif",
    "dietary": []
  },
  {
    "id": 103,
    "title": "Special House Coffee",
    "price": 300,
    "category": "Chai",
    "description": "Authentic Special House Coffee prepared with fresh ingredients.",
    "image": "/assets/images/Chai/Special House Coffee.jfif",
    "dietary": []
  },
  {
    "id": 104,
    "title": "Chapli Kebab Platter",
    "price": 2500,
    "category": "Platters",
    "description": "Authentic Chapli Kebab Platter prepared with fresh ingredients.",
    "image": "/assets/images/Platters/Chapli Kebab Platter.jfif",
    "dietary": [
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
            "Fresh"
    ]
  }
];
