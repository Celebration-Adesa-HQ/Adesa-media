export default function StrategyList({ strategy }) {
  if (!strategy || strategy.length === 0) return null;

  return (
    <div className="bg-brand-light rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-brand-blue mb-4">
        Strategy & Execution
      </h2>

      <ul className="list-disc pl-6 space-y-2">
        {strategy.map((item, i) => (
          <li key={i} className="text-brand-dark">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
