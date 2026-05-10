import express from "express";
import Club from "../models/Club.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get all clubs
router.get("/", async (req, res) => {
  try {
    const clubs = await Club.find().populate("members", "name email");
    res.json(clubs);
  } catch (err) {
    res.status(500).json({ message: "Error fetching clubs" });
  }
});

// Get club by ID
router.get("/:id", async (req, res) => {
  try {
    const club = await Club.findById(req.params.id)
      .populate("members", "name email")
      .populate("messages.sender", "name email");
    if (!club) return res.status(404).json({ message: "Club not found" });
    res.json(club);
  } catch (err) {
    res.status(500).json({ message: "Error fetching club" });
  }
});

// Join a club
router.post("/:id/join", protect, async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);
    if (!club) return res.status(404).json({ message: "Club not found" });

    // Check if user is already a member
    if (club.members.includes(req.user.id)) {
      return res.status(400).json({ message: "You are already a member of this club" });
    }

    club.members.push(req.user.id);
    await club.save();

    res.json({ message: "Joined club successfully", club });
  } catch (err) {
    res.status(500).json({ message: "Error joining club" });
  }
});

export default router;
