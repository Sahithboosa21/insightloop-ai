import {
  DollarSign,
  TrendingUp,
  Users,
  BarChart3,
} from "lucide-react";

function KPICards({ data }) {
  if (!data.length) return null;

  const totalSales = data.reduce((sum, row) => sum + row.Sales, 0);
  const totalProfit = data.reduce((sum, row) => sum + row.Profit, 0);
  const totalCustomers = data.reduce(
    (sum, row) => sum + row.Customers,
    0
  );
  const averageSales = (
    totalSales / data.length
  ).toFixed(2);

  const cards = [
    {
      title: "Total Sales",
      value: totalSales,
      icon: DollarSign,
    },
    {
      title: "Total Profit",
      value: totalProfit,
      icon: TrendingUp,
    },
    {
      title: "Total Customers",
      value: totalCustomers,
      icon: Users,
    },
    {
      title: "Average Sales",
      value: averageSales,
      icon: BarChart3,
    },
  ];

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="rounded-2xl border border-slate-700 bg-slate-900 p-6 transition hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <div className="mb-4 flex items-center justify-between">
              <h4 className="text-gray-400">
                {card.title}
              </h4>

              <Icon className="h-6 w-6 text-blue-400" />
            </div>

            <p className="text-3xl font-bold text-white">
              {card.value}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default KPICards;