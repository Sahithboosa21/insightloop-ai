import { useState } from "react";
import { Bot, Send } from "lucide-react";

function AIChat({ data }) {
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I'm your AI Business Assistant. Ask me anything about your uploaded dataset.",
    },
  ]);

  const [input, setInput] = useState("");

  function generateResponse(question) {
    if (!data.length) {
      return "Please upload a dataset first.";
    }

    const q = question.toLowerCase().trim();

    const sales = data.map((row) => row.Sales);
    const profits = data.map((row) => row.Profit);
    const customers = data.map((row) => row.Customers);

    // Highest Sales
    if (
      q.includes("highest sales") ||
      q.includes("best sales") ||
      q.includes("most sales") ||
      q.includes("highest revenue") ||
      q.includes("best month") ||
      q.includes("top sales") ||
      q.includes("which month sold the most")
    ) {
      const highest = Math.max(...sales);
      const month = data.find((row) => row.Sales === highest)?.Month;

      return `${month} had the highest sales with ${highest}.`;
    }

    // Highest Profit
    if (
      q.includes("highest profit") ||
      q.includes("best profit") ||
      q.includes("maximum profit")
    ) {
      const highest = Math.max(...profits);
      const month = data.find((row) => row.Profit === highest)?.Month;

      return `${month} had the highest profit with ${highest}.`;
    }

    // Lowest Profit
    if (
      q.includes("lowest profit") ||
      q.includes("minimum profit") ||
      q.includes("worst profit")
    ) {
      const lowest = Math.min(...profits);
      const month = data.find((row) => row.Profit === lowest)?.Month;

      return `${month} had the lowest profit with ${lowest}.`;
    }

    // Total Sales
    if (
      q.includes("total sales") ||
      q.includes("sales total")
    ) {
      const total = sales.reduce((sum, value) => sum + value, 0);

      return `The total sales are ${total}.`;
    }

    // Total Profit
    if (
      q.includes("total profit") ||
      q.includes("profit total")
    ) {
      const total = profits.reduce((sum, value) => sum + value, 0);

      return `The total profit is ${total}.`;
    }

    // Total Customers
    if (
      q.includes("total customers") ||
      q.includes("customer count") ||
      q.includes("how many customers")
    ) {
      const total = customers.reduce((sum, value) => sum + value, 0);

      return `The total number of customers is ${total}.`;
    }

    // Average Sales
if (
  q.includes("average sales") ||
  q.includes("average revenue") ||
  q.includes("mean sales")
) {
  const average = (
    sales.reduce((sum, value) => sum + value, 0) /
    sales.length
  ).toFixed(2);

  return `The average monthly sales are ${average}.`;
}

// Executive Summary
if (
  q.includes("summary") ||
  q.includes("summarize") ||
  q.includes("business summary") ||
  q.includes("analyze my business") ||
  q.includes("overview") ||
  q.includes("report")
) {
  const totalSales = sales.reduce((sum, value) => sum + value, 0);
  const totalProfit = profits.reduce((sum, value) => sum + value, 0);
  const totalCustomers = customers.reduce((sum, value) => sum + value, 0);

  const highestSales = Math.max(...sales);
  const bestMonth =
    data.find((row) => row.Sales === highestSales)?.Month;

    const averageProfit = totalProfit / profits.length;

let recommendation = "";

if (averageProfit < totalSales * 0.15) {
  recommendation =
    "⚠️ Profit margin is relatively low. Consider reviewing operational costs.";
} else if (customers[customers.length - 1] > customers[0]) {
  recommendation =
    "📈 Customer growth is healthy. Continue investing in customer acquisition.";
} else {
  recommendation =
    "📊 Business performance is stable. Monitor future trends closely.";
}

  return `📊 Executive Summary

• Total Sales: ${totalSales}

• Total Profit: ${totalProfit}

• Total Customers: ${totalCustomers}

• Best Sales Month: ${bestMonth}

${recommendation}`;
}

return `Sorry, I don't understand that question yet.

Try asking:

• Highest Sales
• Highest Profit
• Lowest Profit
• Total Sales
• Total Profit
• Total Customers
• Average Sales
• Business Summary`;
  }

  function handleSend() {
    if (!input.trim()) return;

    const userMessage = {
      sender: "user",
      text: input,
    };

    const aiMessage = {
      sender: "ai",
      text: generateResponse(input),
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