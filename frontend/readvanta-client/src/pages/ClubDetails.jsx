import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import { getClubById } from "../services/api";
import { BASE_URL } from "../services/api";

const socket = io(BASE_URL);

const ClubDetails = () => {
  const { id } = useParams();

  const [club, setClub] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState("");
  const [typingUser, setTypingUser] = useState("");
  const [onlineUsers, setOnlineUsers] = useState([]);

  const chatRef = useRef(null);

  // 👤 Load club and set user
  useEffect(() => {
    const fetchClub = async () => {
      try {
        const data = await getClubById(id);
        setClub(data);
        // Map backend messages to frontend format
        if (data.messages) {
          setMessages(data.messages.map(m => ({
            text: m.text,
            time: new Date(m.createdAt).toLocaleTimeString(),
            user: m.senderName
          })));
        }
      } catch (err) {
        console.error("Failed to load club", err);
      }
    };

    fetchClub();

    // Use stored user or prompt
    const storedUser = JSON.parse(localStorage.getItem("user"));
    let finalName = storedUser ? storedUser.user.name : null;
    
    if (!finalName) {
        const name = prompt("Enter your name:");
        finalName = name || "Anonymous User";
    }
    
    setUsername(finalName);

    socket.emit("join_club", id);
  }, [id]);

  // 🔌 Socket listeners
  useEffect(() => {
    socket.on("receive_message", (msg) => {
      setMessages((prev) => [...prev, {
        text: msg.text,
        time: new Date().toLocaleTimeString(),
        user: msg.senderName
      }]);
    });

    socket.on("user_typing", (user) => {
      setTypingUser(user);
    });

    socket.on("stop_typing", () => {
      setTypingUser("");
    });

    socket.on("online_users", (users) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off("receive_message");
      socket.off("user_typing");
      socket.off("stop_typing");
      socket.off("online_users");
    };
  }, []);

  // 🔽 Auto scroll
  useEffect(() => {
    chatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 📤 Send message
  const sendMessage = () => {
    if (!message.trim()) return;

    const storedUser = JSON.parse(localStorage.getItem("user"));
    const senderId = storedUser ? storedUser.user.id : "000000000000000000000000"; // Dummy ID if not logged in

    const msgData = {
      clubId: id,
      sender: senderId,
      senderName: username,
      text: message
    };

    socket.emit("send_message", msgData);
    socket.emit("stop_typing", { clubId: id });

    setMessage("");
  };

  // ✍️ Typing
  const handleTyping = (e) => {
    setMessage(e.target.value);

    socket.emit("typing", { clubId: id, user: username });

    setTimeout(() => {
      socket.emit("stop_typing", { clubId: id });
    }, 1000);
  };

  if (!club) return <div className="bg-black text-white h-screen pt-24 text-center">Loading...</div>;

  return (
    <div className="bg-black text-white h-screen flex flex-col pt-20">

      {/* HEADER */}
      <div className="px-6 md:px-10 py-4 border-b border-white/10 flex justify-between items-center">
        
        <h1 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
          💬 {club.name}
        </h1>

        <div className="text-sm text-green-400">
          🟢 Online
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 flex flex-col px-4 md:px-10 py-4 overflow-hidden">

        {/* Messages */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-2">

          {messages.map((msg, index) => {
            const isMe = msg.user === username;

            return (
              <div
                key={index}
                className={`flex ${isMe ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs md:max-w-md px-4 py-2 rounded-xl shadow-md ${
                    isMe
                      ? "bg-gradient-to-r from-orange-400 to-blue-400 text-black"
                      : "bg-gray-900 border border-white/10"
                  }`}
                >
                  {!isMe && (
                    <p className="text-xs text-orange-400 mb-1">
                      {msg.user}
                    </p>
                  )}

                  <p>{msg.text}</p>

                  <p className="text-[10px] text-right opacity-70 mt-1">
                    {msg.time}
                  </p>
                </div>
              </div>
            );
          })}

          {/* Typing */}
          {typingUser && typingUser !== username && (
            <p className="text-gray-400 text-sm">
              ✍️ {typingUser} is typing...
            </p>
          )}

          <div ref={chatRef}></div>
        </div>

        {/* INPUT BAR (FIXED) */}
        <div className="mt-4 flex gap-3 pb-4">
          <input
            value={message}
            onChange={handleTyping}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
            className="flex-1 p-3 rounded-xl bg-gray-900 border border-white/10 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />

          <button
            onClick={sendMessage}
            className="px-6 rounded-xl bg-gradient-to-r from-orange-400 to-blue-400 text-black font-semibold hover:scale-105 transition"
          >
            Send
          </button>
        </div>

      </div>

    </div>
  );
};

export default ClubDetails;