export function analyzeBusiness(data) {
  if (!data.length) return null;

  const sales = data.map((row) => row.Sales);
  const profits = data.map((row) => row.Profit);
  const customers = data.map((row) => row.Customers);

  const totalSales = sales.reduce((sum, value) => sum + value, 0);
  const totalProfit = profits.reduce((sum, value) => sum + value, 0);
  const totalCustomers = customers.reduce((sum, value) => sum + value, 0);

  const averageSales = (
    totalSales / sales.length
  ).toFixed(2);

  const highestSales = Math.max(...sales);
  const highestSalesMonth =
    data.find((row) => row.Sales === highestSales)?.Month;

  const highestProfit = Math.max(...profits);
  const highestProfitMonth =
    data.find((row) => row.Profit === highestProfit)?.Month;

  const lowestProfit = Math.min(...profits);
  const lowestProfitMonth =
    data.find((row) => row.Profit === lowestProfit)?.Month;

  return {
    totalSales,
    totalProfit,
    totalCustomers,
    averageSales,

    highestSales,
    highestSalesMonth,

    highestProfit,
    highestProfitMonth,

    lowestProfit,
    lowestProfitMonth,
  };
}