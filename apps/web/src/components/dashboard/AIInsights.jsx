import {
  Brain,
  TrendingUp,
  TrendingDown,
  Users,
  Lightbulb,
} from "lucide-react";

// Helper function to detect trends
function getTrend(values) {
  const first = values[0];
  const last = values[values.length - 1];

  if (last > first) return "Increasing 📈";
  if (last < first) return "Decreasing 📉";

  return "Stable ➖";
}

function AIInsights({ data }) {
  if (!data.length) return null;

  // Extract data
  const sales = data.map((row) => row.Sales);
  const profits = data.map((row) => row.Profit);
  const customers = data.map((row) => row.Customers);

  // Highest Sales
  const highestSales = Math.max(...sales);
  const highestSalesMonth =
    data.find((row) => row.Sales === highestSales)?.Month;

  // Lowest Profit
  const lowestProfit = Math.min(...profits);
  const lowestProfitMonth =
    data.find((row) => row.Profit === lowestProfit)?.Month;

  // Average Sales
  const averageSales = (
    sales.reduce((sum, value) => sum + value, 0) /
    sales.length
  ).toFixed(2);

  // Customer Growth
  const customerGrowth = (
    ((customers[customers.length - 1] - customers[0]) /
      customers[0]) *
    100
  ).toFixed(1);

  // Trend Analysis
  const salesTrend = getTrend(sales);
  const profitTrend = getTrend(profits);
  const customerTrend = getTrend(customers);

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">

      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <Brain className="h-7 w-7 text-blue-400" />

        <h3 className="text-2xl font-bold text-white">
          AI Business Insights
        </h3>
      </div>

      <div className="space-y-5">

        {/* Highest Sales */}
        <div className="flex gap-3">
          <TrendingUp className="mt-1 h-5 w-5 text-green-400" />

          <div>
            <h4 className="font-semibold text-white">
              Highest Sales
            </h4>

            <p className="text-gray-400">
              {highestSalesMonth} generated the highest sales of{" "}
              <span className="font-semibold text-white">
                {highestSales}
              </span>.
            </p>
          </div>
        </div>

        {/* Lowest Profit */}
        <div className="flex gap-3">
          <TrendingDown className="mt-1 h-5 w-5 text-red-400" />

          <div>
            <h4 className="font-semibold text-white">
              Lowest Profit
            </h4>

            <p className="text-gray-400">
              {lowestProfitMonth} recorded the lowest profit of{" "}
              <span className="font-semibold text-white">
                {lowestProfit}
              </span>.
            </p>
          </div>
        </div>

        {/* Customer Growth */}
        <div className="flex gap-3">
          <Users className="mt-1 h-5 w-5 text-yellow-400" />

          <div>
            <h4 className="font-semibold text-white">
              Customer Growth
            </h4>

            <p className="text-gray-400">
              Customers increased by{" "}
              <span className="font-semibold text-white">
                {customerGrowth}%
              </span>.
            </p>
          </div>
        </div>

        {/* Trend Analysis */}
        <div className="rounded-xl border border-slate-700 bg-slate-800 p-4">
          <h4 className="mb-3 font-semibold text-white">
            📊 Trend Analysis
          </h4>

          <div className="space-y-2 text-gray-300">
            <p>
              Sales Trend:
              <span className="ml-2 font-semibold text-white">
                {salesTrend}
              </span>
            </p>

            <p>
              Profit Trend:
              <span className="ml-2 font-semibold text-white">
                {profitTrend}
              </span>
            </p>

            <p>
              Customer Trend:
              <span className="ml-2 font-semibold text-white">
                {customerTrend}
              </span>
            </p>
          </div>
        </div>

        {/* Recommendation */}
        <div className="rounded-xl bg-blue-500/10 p-4">
          <div className="mb-2 flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-blue-400" />

            <h4 className="font-semibold text-white">
              Recommendation
            </h4>
          </div>

          <p className="text-gray-300">
            Average monthly sales are{" "}
            <strong>{averageSales}</strong>.
            {" "}Business performance is showing a{" "}
            <strong>{salesTrend.toLowerCase()}</strong> sales trend.
            Continue analyzing the months with the strongest performance
            and apply similar strategies to future campaigns.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AIInsights;