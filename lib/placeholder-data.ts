type Property = {
  id: number;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area?: number;
  image: string;
  price: number;
  type: "venda" | "aluguel";
};

export const properties: Property[] = [
  {
    id: 1,
    title: "Linda Casa",
    bathrooms: 3,
    bedrooms: 3,
    image: "https://picsum.photos/500/300",
    location: "Capão Novo Village",
    price: 500000,
    type: "venda",
    area: 250
  },
  {
    id: 2,
    title: "Casa 3 Andares",
    bathrooms: 3,
    bedrooms: 3,
    image: "https://picsum.photos/500/300",
    location: "Capão Novo",
    price: 850000,
    type: "venda",
    area: 250
  },
  {
    id: 3,
    title: "Lindíssima Mansão",
    bathrooms: 3,
    bedrooms: 3,
    image: "https://picsum.photos/500/300",
    location: "Capão Novo Village",
    price: 500000,
    type: "venda",
    area: 250
  },
  {
    id: 4,
    title: "Bela Casa",
    bathrooms: 3,
    bedrooms: 3,
    image: "https://picsum.photos/500/300",
    location: "Capão Novo Village",
    price: 500000,
    type: "venda",
    area: 250
  },
  {
    id: 5,
    title: "Casa com Piscina",
    bathrooms: 3,
    bedrooms: 3,
    image: "https://picsum.photos/500/300",
    location: "Capão Novo Village",
    price: 500000,
    type: "venda",
    area: 250
  },
  {
    id: 6,
    title: "Casa de Madeira",
    bathrooms: 3,
    bedrooms: 3,
    image: "https://picsum.photos/500/300",
    location: "Capão Novo Village",
    price: 500000,
    type: "venda",
    area: 250
  },
];
