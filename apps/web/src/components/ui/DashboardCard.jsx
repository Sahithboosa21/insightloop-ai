function DashboardCard({ title, value, subtitle }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
      <h3 className="text-lg font-semibold text-gray-400">
        {title}
      </h3>

      <p className="mt-4 text-4xl font-bold text-white">
        {value}
      </p>

      <p className="mt-2 text-sm text-gray-500">
        {subtitle}
      </p>
    </div>
  );
}

export default DashboardCard;