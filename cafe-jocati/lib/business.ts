export const business = {
  name: "Café Jocati",
  tagline: "O sabor de sempre, em Duas Igrejas",
  description:
    "Um espaço acolhedor onde cada café conta uma história. Desde o pequeno-almoço ao almoço, o Café Jocati é o ponto de encontro da comunidade de Duas Igrejas.",
  address: "Av. Central de Duas Igrejas N 2874, Duas Igrejas, Penafiel",
  phone: "+351 255 000 000",
  email: "geral@cafejocati.pt",
  hours: [
    { day: "Segunda a Sexta", time: "07:00 – 20:00" },
    { day: "Sábado", time: "07:30 – 19:00" },
    { day: "Domingo", time: "08:00 – 13:00" },
  ],
  rating: 4.8,
  reviews: 127,
  heroImage:
    "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80",
  aboutImage:
    "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=900&q=80",
};

export const menu = [
  {
    category: "Pequeno-Almoço",
    icon: "☕",
    items: [
      { name: "Café Expresso", price: "0,80 €", desc: "Grão selecionado, extração perfeita" },
      { name: "Galão", price: "1,20 €", desc: "Leite vaporizado com toque de café" },
      { name: "Torrada com Manteiga", price: "1,00 €", desc: "Pão artesanal torrado na hora" },
      { name: "Croissant Simples", price: "1,30 €", desc: "Folhado amanteigado e estaladiço" },
      { name: "Meia de Leite", price: "1,10 €", desc: "Café suave com leite quente" },
      { name: "Tosta Mista", price: "2,20 €", desc: "Fiambre e queijo no pão de forma" },
    ],
  },
  {
    category: "Almoço",
    icon: "🍽️",
    items: [
      { name: "Prato do Dia", price: "7,50 €", desc: "Com sopa, pão e sobremesa incluída" },
      { name: "Sopa da Pedra", price: "2,50 €", desc: "Receita tradicional transmontana" },
      { name: "Bife na Frigideira", price: "9,00 €", desc: "Com batata frita e salada" },
      { name: "Frango Assado (½)", price: "8,00 €", desc: "Temperado à nossa maneira" },
      { name: "Bacalhau à Brás", price: "10,50 €", desc: "Bacalhau desfiado com ovos e batata palha" },
      { name: "Omelete", price: "5,50 €", desc: "Com queijo, fiambre ou cogumelos" },
    ],
  },
  {
    category: "Snacks & Sandes",
    icon: "🥪",
    items: [
      { name: "Sandes de Chouriço", price: "2,50 €", desc: "Chouriço artesanal em pão alentejano" },
      { name: "Tosta de Frango", price: "3,50 €", desc: "Frango grelhado, alface e maionese" },
      { name: "Rissol de Camarão", price: "1,50 €", desc: "Feito diariamente na nossa cozinha" },
      { name: "Croquete de Carne", price: "1,20 €", desc: "Receita tradicional portuguesa" },
    ],
  },
  {
    category: "Bebidas",
    icon: "🥤",
    items: [
      { name: "Sumo Natural de Laranja", price: "2,50 €", desc: "Espremido na hora" },
      { name: "Cerveja Imperial", price: "1,50 €", desc: "Fresca e gelada" },
      { name: "Refrigerante", price: "1,50 €", desc: "Coca-cola, fanta, sprite" },
      { name: "Água (0,5L)", price: "0,80 €", desc: "Água mineral natural" },
    ],
  },
];

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
    alt: "Interior do café",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80",
    alt: "Café expresso",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&q=80",
    alt: "Mesa de pequeno-almoço",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600&q=80",
    alt: "Ambiente acolhedor",
  },
  {
    src: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=600&q=80",
    alt: "Balcão do café",
  },
  {
    src: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=600&q=80",
    alt: "Pastéis e bolos",
  },
];
