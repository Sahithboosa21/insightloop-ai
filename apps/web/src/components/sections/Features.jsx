import Card from "../ui/Card";
import Container from "../ui/Container";
import { features } from "../../constants/features";

function Features() {
  return (
    <section className="py-24">
      <Container>
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
      </Container>
    </section>
  );
}

export default Features;