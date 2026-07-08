import { FileText } from "lucide-react";

function ExecutiveSummary({ data }) {
  if (!data.length) return null;

  const sales = data.map((row) => row.Sales);
  const profits = data.map((row) => row.Profit);
  const customers = data.map((row) => row.Customers);

  const highestSales = Math.max(...sales);
  const highestSalesMonth =
    data.find((row) => row.Sales === highestSales)?.Month;

  const lowestProfit = Math.min(...profits);
  const lowestProfitMonth =
    data.find((row) => row.Profit === lowestProfit)?.Month;

  const customerGrowth = (
    ((customers[customers.length - 1] - customers[0]) /
      customers[0]) *
    100
  ).toFixed(1);

  return (
    <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900 p-8">

      <div className="mb-8 flex items-center gap-3">
        <FileText className="h-8 w-8 text-blue-400" />

        <h2 className="text-3xl font-bold text-white">
          Executive Summary
        </h2>
      </div>

      <div className="space-y-6">

        <div>
          <h3 className="mb-2 text-xl font-semibold text-white">
            Dataset Overview
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>• Records Analysed: {data.length}</li>
            <li>• Metrics: Sales, Profit, Customers</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-xl font-semibold text-white">
            Key Findings
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>
              📈 Highest Sales:
              {" "}
              <strong>{highestSalesMonth}</strong>
              {" "}({highestSales})
            </li>

            <li>
              📉 Lowest Profit:
              {" "}
              <strong>{lowestProfitMonth}</strong>
              {" "}({lowestProfit})
            </li>

            <li>
              👥 Customer Growth:
              {" "}
              <strong>{customerGrowth}%</strong>
            </li>
          </ul>
        </div>

        <div className="rounded-xl bg-blue-500/10 p-5">
          <h3 className="mb-3 text-xl font-semibold text-white">
            Executive Recommendation
          </h3>

          <p className="text-gray-300">
            Business performance shows positive growth.
            Continue the strategies used during the highest-performing months,
            while investigating the causes behind the lowest profit period to
            improve future profitability.
          </p>
        </div>

      </div>
    </div>
  );
}

export default ExecutiveSummary;