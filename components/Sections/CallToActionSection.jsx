import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="py-24 bg-brand-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-4xl md:text-5xl text-brand-light mb-6">
          READY TO BUILD SOMETHING GREAT?
        </h2>
        <p className="font-body text-xl text-brand-light/80 mb-8">
          Let&apos;s talk about your project and see how we can help your brand grow.
        </p>
        <Link href="/contact" passHref>
          <span className="inline-block bg-brand-orange text-brand-dark px-10 py-4 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all">
            Start Your Project Today
          </span>
        </Link>
      </div>
    </section>
  );
}
