function Card({ icon: Icon, title, description }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20">
      
      <div className="mb-4">
        <Icon className="h-10 w-10 text-blue-500" />
      </div>

      <h3 className="mb-3 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default Card;