import { business } from "@/lib/business";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: business.name,
    description: business.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: "Penafiel",
      addressCountry: "PT",
    },
    telephone: business.phone,
    email: business.email,
    openingHours: ["Mo-Fr 06:30-19:30", "Sa 06:30-18:00", "Su 07:00-13:00"],
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
