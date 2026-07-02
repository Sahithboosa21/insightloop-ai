import Container from "../ui/Container";
import {
  Brain,
  Database,
  BarChart3,
  Search,
  FileText,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Brain,
    title: "Understand Your Question",
    description:
      "The AI understands your business problem and creates an investigation plan.",
  },
  {
    number: "02",
    icon: Database,
    title: "Collect & Read Data",
    description:
      "Reads CSV, Excel, SQL databases, or connected data sources.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Investigate Patterns",
    description:
      "Finds anomalies, trends, correlations, and hidden relationships.",
  },
  {
    number: "04",
    icon: Search,
    title: "Explain Root Cause",
    description:
      "Explains why the event happened instead of only showing numbers.",
  },
  {
    number: "05",
    icon: FileText,
    title: "Generate Executive Report",
    description:
      "Creates charts, insights, recommendations, and business-ready reports.",
  },
];

function Timeline() {
  return (
    <section className="py-28">
      <Container>
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            AI Investigation Workflow
          </p>

          <h2 className="text-5xl font-bold text-white">
            How InsightLoop AI Thinks
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Unlike traditional analytics tools, InsightLoop AI investigates your
            data step by step before generating recommendations.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="flex items-start gap-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
              >
                {/* Left Side */}
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10">
                    <Icon className="h-8 w-8 text-blue-400" />
                  </div>

                  <span className="mt-3 font-bold text-blue-500">
                    {step.number}
                  </span>
                </div>

                {/* Right Side */}
                <div>
                  <h3 className="mb-3 text-2xl font-bold text-white">
                    {step.title}
                  </h3>

                  <p className="text-gray-400">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Timeline;