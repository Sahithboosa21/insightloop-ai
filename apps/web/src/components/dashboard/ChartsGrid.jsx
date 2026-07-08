import SalesChart from "./SalesChart";
import ProfitChart from "./ProfitChart";
import CustomerChart from "./CustomerChart";
import AIInsights from "./AIInsights";

function ChartsGrid({ csvData }) {
  if (!csvData.length) return null;

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      <SalesChart data={csvData} />
      <ProfitChart data={csvData} />
      <CustomerChart data={csvData} />
      <AIInsights data={csvData} />
    </div>
  );
}

export default ChartsGrid;