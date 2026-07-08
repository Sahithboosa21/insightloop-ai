import { useState } from "react";
import Papa from "papaparse";
import { UploadCloud, FileText } from "lucide-react";
import SalesChart from "./SalesChart";
import ProfitChart from "./ProfitChart";
import CustomerChart from "./CustomerChart";
import AIInsights from "./AIInsights";
import ExecutiveSummary from "./ExecutiveSummary";
import BusinessHealth from "./BusinessHealth";
import RiskAnalysis from "./RiskAnalysis";
import KPICards from "./KPICards";
import ExportReport from "./ExportReport";
import DatasetSummary from "./DatasetSummary";
import DataPreviewTable from "./DataPreviewTable";
import ChartsGrid from "./ChartsGrid";
import AIChat from "./AIChat";

function UploadDataset() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isInvestigating, setIsInvestigating] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [csvData, setCsvData] = useState([]);
  const [headers, setHeaders] = useState([]);

  function handleFileChange(event) {
    const file = event.target.files[0];

    if (!file) return;

    setSelectedFile(file);
    setIsCompleted(false);
    setIsInvestigating(false);
    setCsvData([]);
    setHeaders([]);

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const formattedData = results.data.map((row) => ({
          ...row,
          Sales: Number(row.Sales),
          Profit: Number(row.Profit),
          Customers: Number(row.Customers),
        }));

        setCsvData(formattedData);

        if (results.meta.fields) {
          setHeaders(results.meta.fields);
        }
      },
    });
  }

  function startInvestigation() {
    setIsInvestigating(true);

    setTimeout(() => {
      setIsInvestigating(false);
      setIsCompleted(true);
    }, 3000);
  }

  return (
    <div className="mt-10 rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-8">
      <div className="flex flex-col items-center text-center">
        {/* Upload Icon */}
        <div className="mb-4 rounded-full bg-blue-500/10 p-4">
          <UploadCloud className="h-10 w-10 text-blue-400" />
        </div>

        <h3 className="text-2xl font-bold text-white">
          Upload Your Dataset
        </h3>

        <p className="mt-3 max-w-md text-gray-400">
          Drag and drop a CSV or Excel file here, or browse your computer.
        </p>

        {/* Upload Button */}
        <label className="mt-6 cursor-pointer rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
          Browse Files

          <input
            type="file"
            accept=".csv,.xlsx,.xls"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {/* Dataset Preview */}
        {selectedFile && (
          <div className="mt-8 w-full rounded-2xl border border-slate-700 bg-slate-950 p-6">
            <h4 className="mb-4 text-xl font-semibold text-white">
              Dataset Preview
            </h4>

            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-green-400" />

              <span className="font-medium text-white">
                {selectedFile.name}
              </span>
            </div>

            <div className="mt-5 space-y-2 text-gray-400">
              <p>
                <strong>Type:</strong>{" "}
                {selectedFile.type || "CSV File"}
              </p>

              <p>
                <strong>Size:</strong>{" "}
                {(selectedFile.size / 1024).toFixed(2)} KB
              </p>

              <p className="text-green-400">
                ✅ Ready for AI Investigation
              </p>
            </div>

            {/* Dataset Summary */}
            <DatasetSummary
  csvData={csvData}
  headers={headers}
/>

            {/* Data Preview */}
            {csvData.length > 0 && (
              <>
                <DataPreviewTable
  csvData={csvData}
  headers={headers}
/>

                {/* Sales Chart */}
                <KPICards data={csvData} />
<ChartsGrid csvData={csvData} />
  <ExecutiveSummary data={csvData} />
<BusinessHealth data={csvData} />  

<RiskAnalysis data={csvData} />   

<ExportReport data={csvData} />     

<AIChat data={csvData} />
 </>
            )}

            {/* Investigation Button */}
            <button
              onClick={startInvestigation}
              disabled={isInvestigating}
              className="mt-6 w-full rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isInvestigating
                ? "Investigating..."
                : "Start AI Investigation"}
            </button>

            {/* Loading */}
            {isInvestigating && (
              <div className="mt-5 rounded-xl bg-slate-900 p-4">
                <p className="font-medium text-blue-400">
                  🧠 AI Investigation Running...
                </p>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-700">
                  <div className="h-full w-2/3 animate-pulse rounded-full bg-blue-500"></div>
                </div>

                <p className="mt-3 text-sm text-gray-400">
                  Reading dataset and finding insights...
                </p>
              </div>
            )}

            {/* Success */}
            {isCompleted && (
              <div className="mt-5 rounded-xl border border-green-500/20 bg-green-500/10 p-4">
                <h4 className="font-semibold text-green-400">
                  ✅ Investigation Complete
                </h4>

                <p className="mt-2 text-gray-300">
                  Your dataset has been processed successfully.
                </p>
              </div>
            )}
          </div>
        )}

        <p className="mt-6 text-sm text-gray-500">
          Supported formats: CSV, XLSX
        </p>
      </div>
    </div>
  );
}

export default UploadDataset;