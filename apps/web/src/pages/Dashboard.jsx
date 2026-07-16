import { Database, Brain, FileText } from "lucide-react";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import DashboardCard from "../components/ui/DashboardCard";
import UploadDataset from "../components/dashboard/UploadDataset";
import RecentActivity from "../components/dashboard/RecentActivity";
import { useEffect } from "react";
import api from "../services/api";

function Dashboard() {
  useEffect(() => {
  async function checkBackend() {
    try {
      const response = await api.get("/");

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  checkBackend();
}, []);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1">
        <Topbar />

        <main className="p-8">
          {/* Welcome Section */}
          <h2 className="text-4xl font-bold">
            Welcome Back 👋
          </h2>

          <p className="mt-3 text-gray-400">
            Here's an overview of your AI investigations.
          </p>

          {/* Dashboard Stats */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <DashboardCard
              icon={Database}
              title="Datasets"
              value="12"
              subtitle="Available for analysis"
            />

            <DashboardCard
              icon={Brain}
              title="AI Investigations"
              value="48"
              subtitle="Completed successfully"
            />

            <DashboardCard
              icon={FileText}
              title="Reports"
              value="31"
              subtitle="Generated this month"
            />
          </div>

          {/* Upload Dataset */}
          <UploadDataset />

          {/* Recent Activity */}
          <RecentActivity />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;