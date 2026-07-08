import { jsPDF } from "jspdf";
import { Download } from "lucide-react";

function ExportReport({ data }) {
  if (!data.length) return null;

  function downloadPDF() {
    const pdf = new jsPDF();

    const sales = data.reduce((sum, row) => sum + row.Sales, 0);
    const profit = data.reduce((sum, row) => sum + row.Profit, 0);
    const customers = data.reduce(
      (sum, row) => sum + row.Customers,
      0
    );

    pdf.setFontSize(22);
    pdf.text("InsightLoop AI", 20, 20);

    pdf.setFontSize(16);
    pdf.text("Executive Business Report", 20, 35);

    pdf.setFontSize(12);

    pdf.text(`Records Analysed: ${data.length}`, 20, 55);
    pdf.text(`Total Sales: ${sales}`, 20, 70);
    pdf.text(`Total Profit: ${profit}`, 20, 85);
    pdf.text(`Total Customers: ${customers}`, 20, 100);

    pdf.text(
      "Generated automatically by InsightLoop AI",
      20,
      125
    );

    pdf.save("InsightLoop_Report.pdf");
  }

  return (
    <button
      onClick={downloadPDF}
      className="mt-10 flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
    >
      <Download className="h-5 w-5" />
      Download Executive Report
    </button>
  );
}

export default ExportReport;