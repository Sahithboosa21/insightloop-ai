import { ShieldCheck } from "lucide-react";

function BusinessHealth({ data }) {
  if (!data.length) return null;

  const sales = data.map((row) => row.Sales);
  const profits = data.map((row) => row.Profit);

  const averageSales =
    sales.reduce((sum, value) => sum + value, 0) /
    sales.length;

  const averageProfit =
    profits.reduce((sum, value) => sum + value, 0) /
    profits.length;

  let score = 100;

  if (averageProfit < averageSales * 0.2) score -= 15;

  if (profits.some((profit) => profit < 0)) score -= 25;

  if (score > 90) score = 92;

  const status =
    score >= 90
      ? "Excellent"
      : score >= 75
      ? "Good"
      : "Needs Improvement";

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900 p-6">
      <div className="mb-5 flex items-center gap-3">
        <ShieldCheck className="h-7 w-7 text-green-400" />

        <h3 className="text-2xl font-bold text-white">
          Business Health
        </h3>
      </div>

      <div className="text-center">

        <p className="text-6xl font-bold text-green-400">
          {score}%
        </p>

        <p className="mt-4 text-xl font-semibold text-white">
          {status}
        </p>

        <p className="mt-2 text-gray-400">
          Overall business performance is healthy.
        </p>

      </div>
    </div>
  );
}

export default BusinessHealth;