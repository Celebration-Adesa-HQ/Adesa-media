import { cn } from "@/utils/cn";

export function SectionHeading({
  showFullClient = false,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}) {
  // Default headings based on showFullClient
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
        showFullClient ? "bg-brand-blue py-20 sm:py-28" : "bg-transparent",
        className,
      )}
    >
      <div
        className={cn(
          "mx-10 space-y-4 -my-10",
          showFullClient ? "max-w-4xl px-6 sm:px-10" : "max-w-3xl",
          align === "center" ? "text-center" : "text-left",
        )}
      >
        {finalHeading.eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-orange">
            {finalHeading.eyebrow}
          </div>
        )}

        <h1
          className={cn(
            "font-semibold tracking-tight",
            showFullClient
              ? "text-3xl sm:text-4xl md:text-5xl text-slate-100"
              : "text-2xl sm:text-3xl text-slate-950",
          )}
        >
          {finalHeading.title}
        </h1>

        {finalHeading.description && (
          <p
            className={cn(
              "leading-relaxed",
              showFullClient
                ? "text-base sm:text-lg text-slate-300"
                : "text-base text-slate-600",
            )}
          >
            {finalHeading.description}
          </p>
        )}
      </div>
    </div>
  );
}
