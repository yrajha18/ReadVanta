import express from "express";
import Book from "../models/Book.js";
import { protect } from "../middleware/authMiddleware.js"; // Assume it exists since authRoutes uses it

const router = express.Router();

// Get all books, optionally filter by query and category
router.get("/", async (req, res) => {
  try {
    const { search, category } = req.query;
    let query = {};
    
    if (category && category !== "All") {
      query.category = category;
    }
    
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { author: { $regex: search, $options: "i" } }
      ];
    }
    
    const books = await Book.find(query);
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: "Error fetching books" });
  }
});

// Get book by ID
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    res.json(book);
  } catch (err) {
    res.status(500).json({ message: "Error fetching book" });
  }
});

export default router;
