export default function ClientDetails({ data }) {
  return (
    <div className="bg-brand-light rounded-xl shadow-md p-6 mb-8">
      <h2 className="text-2xl font-bold text-brand-blue mb-4">
        Client Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.client && <Detail label="Client" value={data.client} />}

        {data.industry && <Detail label="Industry" value={data.industry} />}

        {data.serviceProvided && (
          <Detail label="Service Provided" value={data.serviceProvided} />
        )}

        {data.objective && <Detail label="Objective" value={data.objective} />}
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div>
      <h3 className="font-semibold text-brand-dark">{label}:</h3>
      <p className="text-brand-dark">{value}</p>
    </div>
  );
}
