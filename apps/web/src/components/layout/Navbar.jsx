import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Container from "../ui/Container";

function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <Container>
        <nav className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl">
          <Logo />

          <div className="flex items-center gap-4">
            <Button variant="secondary">Login</Button>
            <Button>Get Started</Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;