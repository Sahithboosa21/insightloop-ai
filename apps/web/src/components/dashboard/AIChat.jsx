import { useState } from "react";
import { Bot, Send } from "lucide-react";
import { detectIntent } from "../../utils/intentDetector";
import { analyzeBusiness } from "../../utils/businessAnalyzer";
import { generateBusinessResponse } from "../../utils/responseGenerator";

function AIChat({ data }) {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I'm your AI Business Assistant. Ask me anything about your uploaded dataset.",
    },
  ]);

  const [input, setInput] = useState("");

  function handleSend() {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const intent = detectIntent(input);
    const analysis = analyzeBusiness(data);
    const response = generateBusinessResponse(intent, analysis);

    const aiMessage = {
      sender: "ai",
      text: response,
    };

    setMessages((prev) => [...prev, userMessage, aiMessage]);

    setInput("");
  }

  return (
    <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <div className="mb-6 flex items-center gap-3">
        <Bot className="h-7 w-7 text-blue-400" />

        <h2 className="text-2xl font-bold text-white">
          AI Business Assistant
        </h2>
      </div>

      <div className="mb-6 h-80 overflow-y-auto rounded-xl bg-slate-950 p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 ${
              message.sender === "user"
                ? "text-right"
                : "text-left"
            }`}
          >
            <div
              className={`inline-block max-w-[80%] rounded-xl px-4 py-3 whitespace-pre-line ${
                message.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-gray-300"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ask about your dataset..."
          className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
        />

        <button
          onClick={handleSend}
          className="rounded-xl bg-blue-600 px-5 text-white transition hover:bg-blue-700"
        >
          <Send className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default AIChat;