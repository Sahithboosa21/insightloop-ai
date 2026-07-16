export function detectIntent(question) {
  const q = question.toLowerCase().trim();

  if (
    q.includes("highest sales") ||
    q.includes("best sales") ||
    q.includes("most sales") ||
    q.includes("highest revenue") ||
    q.includes("best month")
  ) {
    return "highest_sales";
  }

  if (
    q.includes("highest profit") ||
    q.includes("best profit")
  ) {
    return "highest_profit";
  }

  if (
    q.includes("lowest profit") ||
    q.includes("minimum profit")
  ) {
    return "lowest_profit";
  }

  if (
    q.includes("total sales")
  ) {
    return "total_sales";
  }

  if (
    q.includes("total profit")
  ) {
    return "total_profit";
  }

  if (
    q.includes("total customers") ||
    q.includes("how many customers")
  ) {
    return "total_customers";
  }

  if (
    q.includes("average sales")
  ) {
    return "average_sales";
  }

  if (
    q.includes("summary") ||
    q.includes("overview") ||
    q.includes("report")
  ) {
    return "summary";
  }

  return "unknown";
}