function DataPreviewTable({ csvData, headers }) {
  if (!csvData.length) return null;

  return (
    <div className="mt-8 overflow-x-auto">
      <h5 className="mb-4 text-xl font-semibold text-white">
        Data Preview
      </h5>

      <table className="min-w-full border border-slate-700">
        <thead className="bg-slate-800">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="border border-slate-700 px-4 py-2 text-left text-white"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {csvData.slice(0, 5).map((row, index) => (
            <tr
              key={index}
              className="border-b border-slate-700 transition hover:bg-slate-800"
            >
              {headers.map((header) => (
                <td
                  key={header}
                  className="border border-slate-700 px-4 py-2 text-gray-300"
                >
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataPreviewTable;