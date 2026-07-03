import {
  Database,
  Brain,
  FileText,
  Upload,
} from "lucide-react";

const activities = [
  {
    icon: Upload,
    title: 'Uploaded "Sales_March.csv"',
    time: "5 minutes ago",
  },
  {
    icon: Brain,
    title: "AI investigation completed",
    time: "12 minutes ago",
  },
  {
    icon: FileText,
    title: "Executive report generated",
    time: "20 minutes ago",
  },
  {
    icon: Database,
    title: "Dataset connected successfully",
    time: "1 hour ago",
  },
];

function RecentActivity() {
  return (
    <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h3 className="mb-6 text-2xl font-bold text-white">
        Recent Activity
      </h3>

      <div className="space-y-5">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex items-center gap-4 rounded-xl bg-slate-950 p-4"
            >
              <div className="rounded-full bg-blue-500/10 p-3">
                <Icon className="h-5 w-5 text-blue-400" />
              </div>

              <div className="flex-1">
                <p className="text-white">
                  {activity.title}
                </p>

                <p className="text-sm text-gray-500">
                  {activity.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RecentActivity;