export function buildApplicationMailto(email, subject, body = "") {
  const query = new URLSearchParams({ subject, body });
  return `mailto:${email}?${query.toString()}`;
}

export function buildPositionMailto(email, positionTitle) {
  return buildApplicationMailto(
    email,
    `Adesa Media Application — ${positionTitle}`,
    `Hello Adesa Media Careers Team,\n\nI would like to apply for the ${positionTitle} position.\n\nI have attached my CV for your review.\n\nKind regards,\n[Your full name]`,
  );
}

export function getCareerListingsState(openPositions) {
  return openPositions.length === 0 ? "empty" : "available";
}

export function createJobPostingSchema(position, siteConfig) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: position.title,
    description: position.summary,
    employmentType: position.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: siteConfig.name,
      sameAs: siteConfig.url,
      logo: new URL(siteConfig.logo, siteConfig.url).toString(),
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: position.location,
        addressCountry: "NG",
      },
    },
    directApply: false,
  };
}
