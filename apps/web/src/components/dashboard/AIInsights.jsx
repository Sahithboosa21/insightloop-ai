import { Brain } from "lucide-react";

function AIInsights({ data }) {
  if (!data.length) return null;

  const sales = data.map((row) => row.Sales);
  const profits = data.map((row) => row.Profit);
  const customers = data.map((row) => row.Customers);

  const highestSales = Math.max(...sales);
  const lowestProfit = Math.min(...profits);
  const highestCustomers = Math.max(...customers);

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <div className="mb-4 flex items-center gap-3">
        <Brain className="h-7 w-7 text-blue-400" />
        <h3 className="text-2xl font-bold text-white">
          AI Insights
        </h3>
      </div>

      <ul className="space-y-3 text-gray-300">
        <li>📈 Highest Sales: {highestSales}</li>
        <li>📉 Lowest Profit: {lowestProfit}</li>
        <li>👥 Highest Customers: {highestCustomers}</li>
        <li>💡 Recommendation: Review the months with the highest sales and replicate the strategies used during those periods.</li>
      </ul>
    </div>
  );
}

export default AIInsights;