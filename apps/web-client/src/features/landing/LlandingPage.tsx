// apps/web-client/src/features/landing/LandingPage.tsx
import { ProductCard } from '../../components/ProductCard.tsx';
import  products  from '../../data/productos.json';
import HeroSeccioImg from '../../../public/images/branding/HeroSection.png';

import { MapPin, Phone, Instagram, Facebook } from 'lucide-react';


// <!DMI> Header de la web
const Header = () => {
  return (
      <header className="px-16 py-8 flex justify-between items-center">
        <div className="flex items-center gap-2 font-black text-xl">
          <img src="/logo.svg" className="w-10" /> VETERINARIA BELTRAMELLI<span className="text-vete-primary">.</span>
        </div>
        <nav className="flex items-center gap-8 font-semibold">
          <a href="#" className="hover:text-vete-primary">Servicios</a>
          <a href="#" className="hover:text-vete-primary">Tienda</a>
          <a href="#" className="hover:text-vete-primary">Contacto</a>
          <div className="bg-vete-primary p-2 rounded-full"><img src={HeroSeccioImg} className="w-4" /></div>
        </nav>
      </header>
  )
};

// <!DMI> Seccion Principal de la web  Compuesto de 2 div uno con el texto y otro 
const HeroSection = () => {
  return(
        <section className="px-16 py-12 flex items-center gap-10">
          <div className="w-1/2">
            <h1 className="text-7xl font-black leading-[1.1] mb-6 text-vete-primary">
              Cuidamos a <br /><span className="text-white">quienes</span> amas
            </h1>
            <p className="text-lg opacity-90 max-w-md">
              Tu mascota merece la mejor atención 
              médica en un ambiente cálido y 
              profesional. Contamos con especialistas 
              comprometidos con el bienestar integral 
              de tus compañeros, brindando cuidado, 
              dedicación y confianza en cada etapa 
              de su vida.
            </p>          
          </div>
          <div className="w-1/2 relative">
            <img src="../../.." className="rounded-[3rem] shadow-2xl" />
          </div>
        </section>
      )
    }; 

  // <!DMI> Seccion Productos donde estan las tarjetas de los productos 
  // <!>  Esta tengo que dividirla en las categorias 

  const ProductsSection = () => {
    return(
          <section className="px-16 py-20 bg-white/5 mt-10">
            <h2 className="text-4xl font-extrabold mb-12 text-white italic">
              Lista de <span className="text-vete-primary">Productos</span>
            </h2>
            
            {/* Categoría Ración */}
            <div className="mb-20">
              <div className="flex justify-between items-end mb-8 border-b border-vete-primary/30 pb-4">
                <h3 className="text-5xl font-black text-vete-primary leading-none">Ración</h3>
                <button className="text-vete-primary font-bold hover:underline">Ver catálogo completo ➔</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {products.racion.map(p => (
                  <ProductCard 
                    key={p.id} 
                    title={p.titulo}        // El JSON dice 'titulo', el componente espera 'title'
                    desc={p.descripcion}    // 'descripcion' -> 'desc'
                    price={p.precio}        // 'precio' -> 'price'
                    img={p.imagen}          // 'imagen' -> 'img'
                  />
                ))}
              </div>
            </div>

            {/* Categoría Accesorios */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-6">
                <h3 className="text-4xl font-black text-vete-primary">Accesorios</h3>
                <button className="text-vete-primary font-bold flex items-center gap-2">Ver catálogo completo ➔</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {products.accesorios.map(p => (
                  <ProductCard 
                    key={p.id} 
                    title={p.titulo}        // El JSON dice 'titulo', el componente espera 'title'
                    desc={p.descripcion}    // 'descripcion' -> 'desc'
                    price={p.precio}        // 'precio' -> 'price'
                    img={p.imagen}          // 'imagen' -> 'img'
                  />
                ))}
              </div>
            </div>

            {/* Categoría Medicamentos */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-6">
                <h3 className="text-4xl font-black text-vete-primary">Medicamentos</h3>
                <button className="text-vete-primary font-bold flex items-center gap-2">Ver catálogo completo ➔</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {products.racion.map(p => (
                  <ProductCard 
                    key={p.id} 
                    title={p.titulo}        // El JSON dice 'titulo', el componente espera 'title'
                    desc={p.descripcion}    // 'descripcion' -> 'desc'
                    price={p.precio}        // 'precio' -> 'price'
                    img={p.imagen}          // 'imagen' -> 'img'
                  />
                ))}
                
              </div>
            </div>

          </section>
    )
  }

  const MapsSection = () => {
    return (
      <section className="px-6 md:px-16 py-20 bg-vete-bg">
        {/* Contenedor Principal con fondo suavizado */}
        <div className="max-w-7xl mx-auto bg-vete-soft rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 items-center">
          
          {/* LADO IZQUIERDO: Información de contacto */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl font-black text-vete-header leading-tight">
                ¿Dónde estamos?
              </h3>
              <p className="text-vete-text text-lg opacity-80 max-w-sm">
                Te esperamos en Salto con la mejor atención para tu mascota.
              </p>
            </div>

            {/* Bloques de Información */}
            <div className="space-y-6">
              {/* Dirección */}
              <div className="flex items-center gap-4">
                <div className="bg-white/60 p-3 rounded-2xl shadow-sm text-vete-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-vete-header text-lg">Salto, Uruguay</p>
                  <p className="text-vete-text opacity-70">Calle 1 N° 5657</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-center gap-4">
                <div className="bg-white/60 p-3 rounded-2xl shadow-sm text-vete-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-vete-header text-lg">092 444 510</p>
                  <p className="text-vete-text opacity-70">Lunes a Sábado 09:00 - 19:00</p>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="flex gap-4 pt-4">
              <a href="#" className="bg-white/60 p-3 rounded-full text-vete-header hover:bg-vete-primary hover:text-white transition-all shadow-sm">
                <Instagram size={24} />
              </a>
              <a href="#" className="bg-white/60 p-3 rounded-full text-vete-header hover:bg-vete-primary hover:text-white transition-all shadow-sm">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* LADO DERECHO: Mapa */}
          <div className="w-full lg:w-1/2 relative h-[450px]">
            {/* Badge Flotante sobre el mapa */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-vete-header/90 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center gap-3 shadow-2xl border border-white/10">
              <div className="bg-vete-primary p-2 rounded-lg">
                <MapPin size={20} className="text-white" />
              </div>
              <span className="text-white font-bold whitespace-nowrap">Salto, Uruguay</span>
            </div>

            {/* Iframe del Mapa */}
            <iframe
              title="Ubicación Veterinaria Beltramelli"
              className="w-full h-full rounded-[2.5rem] shadow-inner grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3405.8225168916!2d-57.906870999999995!3d-31.391457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDIzJzI5LjMiUyA1N8KwNTQnMjQuNyJX!5e0!3m2!1sen!2suy!4v1774287344710!5m2!1sen!2suy"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </section>
    );
  };



export default function LandingPage() {
  return (
    <div className="bg-vete-dark min-h-screen font-sans text-white">

      <Header />
      <HeroSection />
      <ProductsSection />
      <MapsSection />
    </div>
  )
};