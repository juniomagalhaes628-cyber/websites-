export const business = {
  name: "Padaria & Pastelaria Sebolido",
  tagline: "Feito com amor, desde o amanhecer",
  description:
    "Uma padaria de tradição em Penafiel, onde o pão sai do forno ainda quente e os pastéis são feitos com receitas de família. O cheiro de pão fresco é o nosso cartão de visita.",
  address: "Penafiel, Porto",
  phone: "+351 255 000 111",
  email: "geral@pastelariasebolido.pt",
  hours: [
    { day: "Segunda a Sexta", time: "06:30 – 19:30" },
    { day: "Sábado", time: "06:30 – 18:00" },
    { day: "Domingo", time: "07:00 – 13:00" },
  ],
  rating: 4.7,
  reviews: 189,
  heroImage:
    "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1600&q=80",
  aboutImage:
    "https://images.unsplash.com/photo-1486887396153-fa416526c108?w=900&q=80",
};

export const products = [
  {
    category: "Pão Artesanal",
    icon: "🍞",
    items: [
      { name: "Pão de Trigo", price: "1,20 €", desc: "Miolo macio, casca estaladiça — saído do forno de manhã" },
      { name: "Pão de Centeio", price: "2,00 €", desc: "Rico em fibra, sabor intenso e duradouro" },
      { name: "Baguete", price: "0,60 €", desc: "Crocante por fora, fofinha por dentro" },
      { name: "Pão de Forma", price: "2,50 €", desc: "Fatiado, ideal para sandes e tostas" },
      { name: "Broa de Milho", price: "1,80 €", desc: "Receita tradicional minhota" },
    ],
  },
  {
    category: "Pastéis & Bolos",
    icon: "🥐",
    items: [
      { name: "Pastel de Nata", price: "1,20 €", desc: "Com canela e açúcar em pó, quentinho" },
      { name: "Pastel de Feijão", price: "1,10 €", desc: "Receita original de Torres Vedras" },
      { name: "Bolo de Arroz", price: "0,90 €", desc: "Fofo e levemente adocicado" },
      { name: "Queque", price: "0,80 €", desc: "Com pepitas de chocolate ou frutas" },
      { name: "Croissant", price: "1,30 €", desc: "Amanteigado, estaladiço e irresistível" },
      { name: "Mil-Folhas", price: "2,00 €", desc: "Folhado com creme chantilly" },
    ],
  },
  {
    category: "Bolos Especiais",
    icon: "🎂",
    items: [
      { name: "Bolo de Aniversário", price: "Sob consulta", desc: "Personalizado à tua medida, encomende com 48h" },
      { name: "Tarte de Maçã", price: "12,00 €", desc: "Canela e maçã da nossa horta" },
      { name: "Bolo de Chocolate", price: "18,00 €", desc: "Húmido e intensamente chocolatado" },
      { name: "Tarte de Frutos Vermelhos", price: "15,00 €", desc: "Com creme de pasteleiro e fruta fresca" },
    ],
  },
  {
    category: "Bebidas",
    icon: "☕",
    items: [
      { name: "Café Expresso", price: "0,80 €", desc: "Para acompanhar o pastel" },
      { name: "Galão", price: "1,20 €", desc: "Leite vaporizado suave" },
      { name: "Sumo Natural", price: "2,50 €", desc: "Laranja ou maçã, espremido na hora" },
      { name: "Água", price: "0,80 €", desc: "Mineral natural" },
    ],
  },
];

export const gallery = [
  {
    src: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80",
    alt: "Pão artesanal fresco",
  },
  {
    src: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&q=80",
    alt: "Pastéis de nata",
  },
  {
    src: "https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?w=600&q=80",
    alt: "Bolos e sobremesas",
  },
  {
    src: "https://images.unsplash.com/photo-1486887396153-fa416526c108?w=600&q=80",
    alt: "Forno artesanal",
  },
  {
    src: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=600&q=80",
    alt: "Croissants frescos",
  },
  {
    src: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=600&q=80",
    alt: "Bolo de aniversário",
  },
];
