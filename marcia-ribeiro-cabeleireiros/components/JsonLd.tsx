import { business } from "@/lib/business";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: `${business.name} ${business.subtitle}`,
    description: business.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: "Penafiel",
      addressCountry: "PT",
    },
    telephone: business.phone,
    email: business.email,
    openingHours: ["Tu-Fr 09:00-19:00", "Sa 09:00-17:00"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating,
      reviewCount: business.reviews,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
