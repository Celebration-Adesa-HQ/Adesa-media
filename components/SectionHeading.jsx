import { cn } from "@/utils/cn";

export function SectionHeading({
  showFullClient = false,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}) {
  const defaultHeading = showFullClient
    ? {
        eyebrow: "Our Clients",
        title: "Trusted by Leading Brands",
        description:
          "We partner with ambitious brands across finance, healthcare, mobility, and consumer markets.",
      }
    : {
        eyebrow: "Clients",
        title: "Brands That Trust Us",
        description:
          "Chosen by brands that value clarity, execution, and results.",
      };

  const finalHeading = {
    eyebrow: eyebrow ?? defaultHeading.eyebrow,
    title: title ?? defaultHeading.title,
    description: description ?? defaultHeading.description,
  };

  return (
    <div
      className={cn(
        "w-full",
        showFullClient ? "bg-[#070e24] py-16 sm:py-20" : "bg-transparent",
        className,
      )}
    >
      <div
        className={cn(
          "space-y-4 max-w-4xl mx-auto px-6 sm:px-10",
          align === "center" ? "text-center" : "text-left",
        )}
      >
        {finalHeading.eyebrow && (
          <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#ffa205] bg-[#ffa205]/15 px-4 py-1.5 rounded-full border border-[#ffa205]/30">
            {finalHeading.eyebrow}
          </span>
        )}

        <h2
          className={cn(
            "font-extrabold tracking-tight",
            showFullClient
              ? "text-3xl sm:text-4xl md:text-5xl text-white"
              : "text-2xl sm:text-3xl text-white",
          )}
        >
          {finalHeading.title}
        </h2>

        {finalHeading.description && (
          <p
            className={cn(
              "leading-relaxed",
              showFullClient
                ? "text-base sm:text-lg text-slate-300 max-w-3xl"
                : "text-sm sm:text-base text-slate-400 max-w-2xl",
            )}
          >
            {finalHeading.description}
          </p>
        )}
      </div>
    </div>
  );
}

