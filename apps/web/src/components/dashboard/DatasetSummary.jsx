function DatasetSummary({ csvData, headers }) {
  return (
    <div className="mt-6 rounded-xl bg-slate-900 p-4">
      <h5 className="mb-3 text-lg font-semibold text-white">
        Dataset Summary
      </h5>

      <p className="text-gray-400">
        Rows: <span className="text-white">{csvData.length}</span>
      </p>

      <p className="text-gray-400">
        Columns: <span className="text-white">{headers.length}</span>
      </p>

      <div className="mt-4">
        <p className="mb-2 font-medium text-white">
          Headers
        </p>

        <div className="flex flex-wrap gap-2">
          {headers.map((header) => (
            <span
              key={header}
              className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
            >
              {header}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DatasetSummary;