import Card from "../ui/Card";

function Features() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        Why Choose InsightLoop AI?
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        <Card
          icon="📊"
          title="Analyze Data"
          description="Upload CSV, Excel or connect your SQL databases."
        />

        <Card
          icon="🧠"
          title="AI Investigation"
          description="The AI investigates before answering your business questions."
        />

        <Card
          icon="📄"
          title="Executive Reports"
          description="Generate beautiful reports with insights and recommendations."
        />
      </div>
    </section>
  );
}

export default Features;