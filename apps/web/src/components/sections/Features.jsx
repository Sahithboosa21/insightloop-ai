import Card from "../ui/Card";
import { features } from "../../constants/features";

function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        Why Choose InsightLoop AI?
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {features.map((feature) => (
          <Card
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

export default Features;