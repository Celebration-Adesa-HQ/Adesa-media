export default function ResultsList({ results }) {
  if (!results || results.length === 0) return null;

  return (
    <div className="bg-brand-light rounded-xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-brand-blue mb-4">Results</h2>

      <ul className="list-disc pl-6 space-y-2">
        {results.map((item, i) => (
          <li key={i} className="text-brand-dark">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
