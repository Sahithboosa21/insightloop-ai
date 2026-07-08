import { TriangleAlert } from "lucide-react";

function RiskAnalysis({ data }) {
  if (!data.length) return null;

  const sales = data.map((row) => row.Sales);
  const profits = data.map((row) => row.Profit);
  const customers = data.map((row) => row.Customers);

  const averageSales =
    sales.reduce((sum, value) => sum + value, 0) / sales.length;

  const averageProfit =
    profits.reduce((sum, value) => sum + value, 0) / profits.length;

  const hasNegativeProfit = profits.some(
    (profit) => profit < 0
  );

  const customerGrowth =
    customers[customers.length - 1] > customers[0];

  return (
    <div className="mt-10 rounded-2xl border border-red-500/20 bg-slate-900 p-6">

      <div className="mb-6 flex items-center gap-3">
        <TriangleAlert className="h-7 w-7 text-red-400" />

        <h2 className="text-2xl font-bold text-white">
          Risk Analysis
        </h2>
      </div>

      <div className="space-y-4">

        <div className="rounded-xl bg-slate-800 p-4">
          {averageProfit < averageSales * 0.2 ? (
            <p className="text-yellow-400">
              🟡 Profit margin is relatively low compared to sales.
            </p>
          ) : (
            <p className="text-green-400">
              🟢 Profit margin looks healthy.
            </p>
          )}
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
          {hasNegativeProfit ? (
            <p className="text-red-400">
              🔴 Negative profit detected.
            </p>
          ) : (
            <p className="text-green-400">
              🟢 No negative profit detected.
            </p>
          )}
        </div>

        <div className="rounded-xl bg-slate-800 p-4">
          {customerGrowth ? (
            <p className="text-green-400">
              🟢 Customer growth is positive.
            </p>
          ) : (
            <p className="text-yellow-400">
              🟡 Customer growth needs attention.
            </p>
          )}
        </div>

      </div>

    </div>
  );
}

export default RiskAnalysis;