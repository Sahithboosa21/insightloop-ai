import Button from "../ui/Button";
import Container from "../ui/Container";

function Hero() {
  return (
    <section className="min-h-[80vh] py-20">
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <span className="mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            🚀 AI-Powered Business Intelligence
          </span>

          <h1 className="max-w-5xl text-5xl font-extrabold leading-tight text-white md:text-7xl">
            The AI Data Analyst
            <br />
            That Investigates Before It Answers
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Upload your data, ask business questions, and let AI investigate,
            analyze, and generate actionable insights with complete transparency.
          </p>

          <div className="mt-10 flex gap-4">
            <Button>Get Started</Button>
            <Button variant="secondary">View Demo</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;