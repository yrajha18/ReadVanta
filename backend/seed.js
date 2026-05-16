import mongoose from "mongoose";
import dotenv from "dotenv";
import Book from "./models/Book.js";
import Club from "./models/Club.js";

dotenv.config();

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self-help",
    image: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg",
    description: "No matter your goals, Atomic Habits offers a proven framework for improving--every day."
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Tech",
    image: "https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL.jpg",
    description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees."
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    category: "Fiction",
    image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
    description: "The Alchemist is the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure."
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    category: "Self-help",
    image: "https://images-na.ssl-images-amazon.com/images/I/417S9Z69S-L.jpg",
    description: "Rules for focused success in a distracted world."
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Science",
    image: "https://images-na.ssl-images-amazon.com/images/I/713jIoMO3UL.jpg",
    description: "A brief history of humankind, exploring how biology and history have defined us."
  },
  {
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    image: "https://images-na.ssl-images-amazon.com/images/I/71TR7S70GUL.jpg",
    description: "Timeless lessons on wealth, greed, and happiness."
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    category: "Business",
    image: "https://images-na.ssl-images-amazon.com/images/I/71m-MxdJ2WL.jpg",
    description: "Notes on startups, or how to build the future."
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor Frankl",
    category: "Philosophy",
    image: "https://images-na.ssl-images-amazon.com/images/I/6115mS7S9UL.jpg",
    description: "A psychiatrist's memoir of surviving the Holocaust and finding meaning in life."
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    category: "Sci-Fi",
    image: "https://images-na.ssl-images-amazon.com/images/I/9199O+f7X6L.jpg",
    description: "A lone astronaut must save the earth from disaster in this gripping science fiction thriller."
  }
];

const clubs = [
  { name: "Atomic Habits Club", description: "Discussing daily habits and improvements." },
  { name: "Clean Code Club", description: "A group for developers striving for better code quality." },
  { name: "Fiction Lovers", description: "Dive into imaginary worlds together." }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected for Seeding");

    await Book.deleteMany();
    await Club.deleteMany();

    await Book.insertMany(books);
    console.log("Books seeded successfully");

    await Club.insertMany(clubs);
    console.log("Clubs seeded successfully");

    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
