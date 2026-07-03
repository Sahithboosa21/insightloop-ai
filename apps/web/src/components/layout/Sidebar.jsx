function Sidebar() {
  return (
    <aside className="w-64 border-r border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-8 text-2xl font-bold">
        InsightLoop AI
      </h2>

      <nav className="space-y-4">
        <button className="block text-left text-gray-300 hover:text-white">
          Dashboard
        </button>

        <button className="block text-left text-gray-300 hover:text-white">
          Datasets
        </button>

        <button className="block text-left text-gray-300 hover:text-white">
          AI Chat
        </button>

        <button className="block text-left text-gray-300 hover:text-white">
          Reports
        </button>

        <button className="block text-left text-gray-300 hover:text-white">
          Settings
        </button>
      </nav>
    </aside>
  );
}

export default Sidebar;