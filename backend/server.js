import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import http from "http";
import { Server } from "socket.io";

import authRoutes from "./routes/authRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import clubRoutes from "./routes/clubRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import Club from "./models/Club.js";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    methods: ["GET", "POST"]
  }
});

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));
app.use(express.json());

// DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/clubs", clubRoutes);
app.use("/api/ai", aiRoutes);

// Socket.io for Club Chat
io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("join_club", (clubId) => {
    socket.join(clubId);
    console.log(`User joined club: ${clubId}`);
  });

  socket.on("send_message", async (data) => {
    const { clubId, sender, senderName, text } = data;
    try {
      const club = await Club.findById(clubId);
      if (club) {
        const newMessage = { sender, senderName, text };
        club.messages.push(newMessage);
        await club.save();
        // Broadcast the new message to everyone in the room
        io.to(clubId).emit("receive_message", newMessage);
      }
    } catch (err) {
      console.error("Error saving message", err);
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));