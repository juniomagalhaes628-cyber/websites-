export const business = {
  name: "Márcia Ribeiro",
  subtitle: "Cabeleireiro & Estética",
  tagline: "Beleza com cuidado, em Penafiel",
  description:
    "Um salão moderno e acolhedor dedicado a realçar a tua beleza natural. Com anos de experiência, a Márcia Ribeiro oferece serviços de cabeleireiro e estética num ambiente relaxante e profissional.",
  address: "Av. José Júlio, Penafiel",
  phone: "+351 255 712 716",
  whatsapp: "+351255712716",
  email: "marciaribeiro.cabeleireiros@gmail.com",
  hours: [
    { day: "Segunda-Feira", time: "Encerrado" },
    { day: "Terça a Sexta", time: "09:00 – 19:00" },
    { day: "Sábado", time: "09:00 – 17:00" },
    { day: "Domingo", time: "Encerrado" },
  ],
  rating: 4.9,
  reviews: 214,
  heroImage:
    "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80",
  aboutImage:
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80",
  social: {
    facebook: "https://www.facebook.com/marciaribeirocabeleireiros",
    instagram: "https://www.instagram.com/marciaribeiro.cabeleireiros",
  },
  testimonials: [
    {
      name: "Catarina S.",
      rating: 5,
      text: "A Márcia é simplesmente fantástica! Saí do salão com um corte e cor que adoro.",
      date: "Mai 2025",
    },
    {
      name: "Inês F.",
      rating: 5,
      text: "Excelente serviço, muito profissional. O meu cabelo nunca esteve tão bonito!",
      date: "Jun 2025",
    },
    {
      name: "Rita A.",
      rating: 5,
      text: "Faço aqui as unhas há anos. Trabalho impecável e ambiente super acolhedor.",
      date: "Jun 2025",
    },
  ],
};

export const team = [
  {
    name: "Márcia Ribeiro",
    role: "Fundadora & Cabeleireira",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&q=80",
    bio: "Mais de 10 anos de experiência em cabeleireiro e estética.",
  },
  {
    name: "Joana Costa",
    role: "Esteticista",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    bio: "Especialista em tratamentos faciais e cuidados de beleza.",
  },
];

export const services = [
  {
    category: "Cabelo",
    items: [
      { name: "Corte de Cabelo", price: "12 €", desc: "Corte personalizado ao teu estilo", duration: "30 min" },
      { name: "Coloração Completa", price: "35 €", desc: "Com produto profissional de qualidade", duration: "90 min" },
      { name: "Brushing", price: "15 €", desc: "Modelação suave e duradoura", duration: "45 min" },
      { name: "Mechas / Madeixas", price: "40 €", desc: "Técnicas modernas de iluminação", duration: "120 min" },
      { name: "Permanente", price: "45 €", desc: "Ondulação natural e resistente", duration: "120 min" },
      { name: "Tratamento Capilar", price: "25 €", desc: "Hidratação profunda e regeneração", duration: "60 min" },
    ],
  },
  {
    category: "Estética",
    items: [
      { name: "Manicure", price: "12 €", desc: "Cuidado completo das unhas das mãos", duration: "45 min" },
      { name: "Pedicure", price: "18 €", desc: "Tratamento e beleza dos pés", duration: "60 min" },
      { name: "Depilação a Cera (pernas)", price: "20 €", desc: "Pele suave e duradoura", duration: "45 min" },
      { name: "Design de Sobrancelhas", price: "8 €", desc: "Definição perfeita para o teu rosto", duration: "20 min" },
      { name: "Limpeza de Pele", price: "35 €", desc: "Pele radiante e renovada", duration: "60 min" },
      { name: "Gel nas Unhas", price: "25 €", desc: "Gel resistente com longa duração", duration: "60 min" },
    ],
  },
];

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=600&q=80",
    alt: "Coloração profissional",
  },
  {
    src: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    alt: "Salão de cabeleireiro",
  },
  {
    src: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=600&q=80",
    alt: "Tratamento capilar",
  },
  {
    src: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=600&q=80",
    alt: "Manicure profissional",
  },
  {
    src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=600&q=80",
    alt: "Estética e beleza",
  },
  {
    src: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=600&q=80",
    alt: "Resultado final",
  },
];
