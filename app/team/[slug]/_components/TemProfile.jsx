import Link from "next/link";
import Image from "next/image";

export default function TeamProfile({ member }) {

  return (
    <main className="min-h-screen bg-linear-to-b from-slate-50 to-white py-24">
      <div className="mx-auto max-w-5xl px-6 space-y-12">
        {/* Back */}
        <Link
          href="/team"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition"
        >
          ← Back to Team
        </Link>

        {/* Hero Section */}
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={member.image}
              alt={member.name}
              width={800}
              height={900}
              className="h-105 w-full object-cover"
              priority
            />
          </div>

          {/* Identity */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                {member.name}
              </h1>

              <p className="mt-3 text-lg font-medium text-blue-600">
                {member.role}
              </p>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed">
              {member.bio}
            </p>

            {/* Skills */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
                Expertise
              </p>

              <div className="flex flex-wrap gap-3">
                {member.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-blue-50 text-blue-700 px-4 py-1.5 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Detail Card */}
        <div className="rounded-3xl bg-white shadow-lg border border-slate-100 p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Professional Summary
          </h2>

          <p className="text-slate-600 leading-relaxed text-lg">{member.bio}</p>
        </div>
      </div>
    </main>
  );
}
