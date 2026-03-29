// apps/web-client/src/data/mockData.ts

// <!> Esto hay que mejorarlo creo que me falta mas datos 

export const products = {
  racion: [
    { 
      id: 1, title: "Alimento Premium Adulto", desc: "Nutrición balanceada 15kg", price: 2450, img: "/src/assets/product.png" },
    // ... más productos
  ],
  accesorios: [
    { id: 5, title: "Correa Retráctil", desc: "Hasta 2 metros se estira", price: 850, img: "/src/assets/correa.png" },
  ]
};

export const reviews = [
  { id: 1, name: "Ana Martínez", pet: "Luna", text: "La atención es increíble...", img: "/src/assets/ana.jpg" },
];