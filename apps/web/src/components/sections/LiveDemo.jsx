import Container from "../ui/Container";
import { CheckCircle2 } from "lucide-react";

const steps = [
  "Reading uploaded dataset...",
  "Cleaning missing values...",
  "Finding anomalies...",
  "Comparing business metrics...",
  "Investigating root cause...",
  "Generating executive report...",
];

function LiveDemo() {
  return (
    <section className="py-28">
      <Container>
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Live Investigation Demo
          </p>

          <h2 className="text-5xl font-bold text-white">
            Watch InsightLoop AI Investigate
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Every answer is backed by a transparent investigation process.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl">
          {/* Question */}
          <div className="mb-8 rounded-xl border border-blue-500/20 bg-slate-950 p-4">
            <p className="text-sm text-gray-400">Business Question</p>

            <h3 className="mt-2 text-xl font-semibold text-white">
              Why did sales decrease by 20% in March?
            </h3>
          </div>

          {/* Investigation */}
          <div className="space-y-5">
            {steps.map((step) => (
              <div
                key={step}
                className="flex items-center gap-4 rounded-xl bg-slate-950/70 p-4"
              >
                <CheckCircle2 className="h-6 w-6 text-green-400" />

                <span className="text-gray-300">{step}</span>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="mt-8 rounded-xl border border-green-500/20 bg-green-500/10 p-5">
            <h4 className="font-semibold text-green-400">
              Investigation Complete
            </h4>

            <p className="mt-2 text-gray-300">
              Root cause identified. Executive report is ready.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LiveDemo;