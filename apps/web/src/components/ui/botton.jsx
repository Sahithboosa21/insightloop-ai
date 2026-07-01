function Button({ children, onClick, variant = "primary" }) {
  const baseClasses =
    "px-6 py-3 rounded-xl font-semibold transition-all duration-300";

  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-slate-200 text-slate-900 hover:bg-slate-300",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;