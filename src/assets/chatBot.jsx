import React, { useState } from "react";


const ChatBot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello! How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);

    let response = "Sorry, I didn't understand that.";

    const lower = input.toLowerCase();
    if (lower.includes("report")) response = "You can view submitted reports under the Dashboard.";
    else if (lower.includes("password")) response = "To reset your password, go to the login page and click 'Forgot Password'.";
    else if (lower.includes("help")) response = "Sure! Let me know what kind of help you need.";
    else if (lower.includes("email")) response = "Email issues are logged under the Email Logs section.";

    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: response }]);
    }, 500);

    setInput("");
  };

  return (
    <div className="chatbot-box">
      <div className="chatbot-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-msg ${msg.from}`}>{msg.text}</div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default ChatBot;
