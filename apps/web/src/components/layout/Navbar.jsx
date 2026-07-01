import Logo from "../ui/Logo";
import Button from "../ui/Button";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      <Logo />

      <div className="flex items-center gap-4">
        <Button variant="secondary">Login</Button>
        <Button>Get Started</Button>
      </div>
    </nav>
  );
}

export default Navbar;