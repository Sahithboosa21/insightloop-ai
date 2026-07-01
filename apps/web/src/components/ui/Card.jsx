function Card({ title, description, icon }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500">
      <div className="mb-4 text-4xl">{icon}</div>

      <h3 className="mb-2 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default Card;