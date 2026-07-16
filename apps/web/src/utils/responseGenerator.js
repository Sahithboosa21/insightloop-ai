export function generateBusinessResponse(intent, analysis) {
  if (!analysis) {
    return "Please upload a dataset first.";
  }

  switch (intent) {
    case "highest_sales":
      return `${analysis.highestSalesMonth} had the highest sales with ${analysis.highestSales}.`;

    case "highest_profit":
      return `${analysis.highestProfitMonth} had the highest profit with ${analysis.highestProfit}.`;

    case "lowest_profit":
      return `${analysis.lowestProfitMonth} had the lowest profit with ${analysis.lowestProfit}.`;

    case "total_sales":
      return `The total sales are ${analysis.totalSales}.`;

    case "total_profit":
      return `The total profit is ${analysis.totalProfit}.`;

    case "total_customers":
      return `The total number of customers is ${analysis.totalCustomers}.`;

    case "average_sales":
      return `The average monthly sales are ${analysis.averageSales}.`;

    case "summary":
      return `📊 Executive Summary

• Total Sales: ${analysis.totalSales}

• Total Profit: ${analysis.totalProfit}

• Total Customers: ${analysis.totalCustomers}

• Best Sales Month: ${analysis.highestSalesMonth}

✅ Business performance looks healthy based on the uploaded dataset.`;

    default:
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
}