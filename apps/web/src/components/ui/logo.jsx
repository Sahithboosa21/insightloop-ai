function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="h-10 w-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
        I
      </div>

      <div>
        <h1 className="text-xl font-bold text-white">
          InsightLoop AI
        </h1>

        <p className="text-sm text-gray-400">
          AI Data Intelligence
        </p>
      </div>
    </div>
  );
}

export default Logo;