// src/features/landing/LandingPage.tsx
import { ProductCard } from '../../components/ProductCard';
import { products } from '../../data/mockData';

export default function LandingPage() {
  return (
    <div className="bg-vete-dark min-h-screen font-sans text-white">
      {/* Header */}
      <header className="px-16 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2 font-black text-xl">
          <img src="/logo.svg" className="w-10" /> VETERINARIA BELTRAMELLI<span className="text-vete-primary">.</span>
        </div>
        <nav className="flex items-center gap-8 font-semibold">
          <a href="#" className="hover:text-vete-primary">Servicios</a>
          <a href="#" className="hover:text-vete-primary">Tienda</a>
          <a href="#" className="hover:text-vete-primary">Contacto</a>
          <div className="bg-vete-primary p-2 rounded-full"><img src="/src/assets/carrito.svg" className="w-4" /></div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-16 py-12 flex items-center gap-10">
        <div className="w-1/2">
          <h1 className="text-7xl font-black leading-[1.1] mb-6 text-vete-primary">
            Cuidamos a <br /><span className="text-white">quienes</span> amas
          </h1>
          <p className="text-lg opacity-90 max-w-md">Tu mascota merece la mejor atención médica en un ambiente cálido y profesional...</p>
        </div>
        <div className="w-1/2 relative">
          <img src="/src/assets/imgPresentacion.png" className="rounded-[3rem] shadow-2xl" />
          <img src="/src/assets/whatsapp.svg" className="absolute -bottom-6 -right-6 w-20" />
        </div>
      </section>

      {/* Productos con Map */}
      <section className="px-16 py-20">
        <h2 className="text-3xl font-extrabold mb-10 text-white">Lista de Productos</h2>
        
        {/* Categoría Ración */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-6">
            <h3 className="text-4xl font-black text-vete-primary">Ración</h3>
            <button className="text-vete-primary font-bold flex items-center gap-2">Ver catálogo completo ➔</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.racion.map(p => <ProductCard key={p.id} {...p} />)}
          </div>
        </div>
      </section>

      {/* Aquí seguirían las secciones de Misión, Visión y Testimonios con la misma lógica */}
    </div>
  );
}