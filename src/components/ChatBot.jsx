
import { useState } from "react";

const N8N_URL = "https://urrohit.app.n8n.cloud/webhook/portfolio-chat";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm Rohit's AI assistant. Ask me anything about his skills or projects! 👋" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { from: "user", text: userMsg }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(N8N_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg })
      });
      const data = await res.json();
      setMessages(prev => [...prev, { from: "bot", text: data.reply }]);
    } catch {
      setMessages(prev => [...prev, { from: "bot", text: "Sorry, something went wrong!" }]);
    }
    setLoading(false);
  };

  return (
    <>
      <button onClick={() => setOpen(!open)} style={{
        position: "fixed", bottom: "24px", right: "24px",
        background: "#00ff88", color: "#000", border: "none",
        borderRadius: "50%", width: "56px", height: "56px",
        fontSize: "24px", cursor: "pointer", zIndex: 1000,
        boxShadow: "0 0 20px rgba(0,255,136,0.4)"
      }}>
        {open ? "✕" : "💬"}
      </button>

      {open && (
        <div style={{
          position: "fixed", bottom: "90px", right: "24px",
          width: "320px", height: "420px", background: "#111",
          border: "1px solid #00ff88", borderRadius: "12px",
          display: "flex", flexDirection: "column", zIndex: 1000,
          boxShadow: "0 0 30px rgba(0,255,136,0.2)"
        }}>
          <div style={{ padding: "12px 16px", borderBottom: "1px solid #222", background: "#0a0a0a", borderRadius: "12px 12px 0 0" }}>
            <p style={{ margin: 0, color: "#00ff88", fontWeight: "bold" }}>🤖 RKP Assistant</p>
            <p style={{ margin: 0, color: "#666", fontSize: "12px" }}>Ask about Rohit's skills & projects</p>
          </div>
          <div style={{ flex: 1, overflowY: "auto", padding: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                background: msg.from === "user" ? "#00ff88" : "#1a1a1a",
                color: msg.from === "user" ? "#000" : "#fff",
                padding: "8px 12px", borderRadius: "8px",
                maxWidth: "80%", fontSize: "13px"
              }}>{msg.text}</div>
            ))}
            {loading && <div style={{ alignSelf: "flex-start", color: "#00ff88", fontSize: "13px" }}>typing...</div>}
          </div>
          <div style={{ padding: "12px", borderTop: "1px solid #222", display: "flex", gap: "8px" }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Ask something..."
              style={{ flex: 1, background: "#1a1a1a", border: "1px solid #333", borderRadius: "6px", padding: "8px", color: "#fff", fontSize: "13px" }}
            />
            <button onClick={sendMessage} style={{
              background: "#00ff88", color: "#000", border: "none",
              borderRadius: "6px", padding: "8px 12px", cursor: "pointer", fontWeight: "bold"
            }}>➤</button>
          </div>
        </div>
      )}
    </>
  );
}
