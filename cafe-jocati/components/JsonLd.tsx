import { business } from "@/lib/business";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
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
    openingHours: ["Mo-Fr 07:00-20:00", "Sa 07:30-19:00", "Su 08:00-13:00"],
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
