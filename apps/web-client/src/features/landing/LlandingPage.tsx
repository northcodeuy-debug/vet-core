// apps/web-client/src/features/landing/LandingPage.tsx
import { ProductCard } from '../../components/ProductCard.tsx';
import products from '../../data/productos.json';


import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';


// <!DMI> Header de la web
const Header = () => {
  return (
    <header className="px-16 py-8 flex justify-between items-center">
      <div className="flex items-center gap-2 font-black text-xl">
        <img src="/logo.png" className="w-10" /> VETERINARIA BELTRAMELLI<span className="text-vete-primary">.</span>
      </div>
      <nav className="flex items-center gap-8 font-semibold">
        <a href="#" className="hover:text-vete-primary">Servicios</a>
        <a href="#" className="hover:text-vete-primary">Tienda</a>
        <a href="#" className="hover:text-vete-primary">Contacto</a>
        <div className="bg-vete-primary p-2 rounded-full"><img src="/images/branding/carrito.svg" className="w-4" /></div>
      </nav>
    </header>
  )
};

// <!DMI> Seccion Principal de la web  Compuesto de 2 div uno con el texto y otro 
const HeroSection = () => {
  return (
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
        <img src="/images/branding/HeroSection.png" className="rounded-[3rem] shadow-2xl" />
      </div>
    </section>
  )
};

// <!DMI> Seccion Productos donde estan las tarjetas de los productos 
// <!>  Esta tengo que dividirla en las categorias 

const ProductsSection = () => {
  return (
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


// Componente auxiliar para evitar repetir código en Misión, Visión y Valores
const InfoSection = ({ title, children, image, reversed = false }: { title: string, children: React.ReactNode, image: string, reversed?: boolean }) => (
  <section className={`flex flex-col ${reversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 py-20 px-16`}>
    <div className="w-full md:w-1/2 space-y-6">
      <h2 className="text-5xl font-black text-vete-primary italic">{title}</h2>
      <div className="text-lg leading-relaxed opacity-90 space-y-4">
        {children}
      </div>
    </div>
    <div className="w-full md:w-1/2">
      <img
        src={image}
        alt={title}
        className="w-full h-[450px] object-cover rounded-[3rem] shadow-2xl border-2 border-vete-primary/10"
      />
    </div>
  </section>
);

const AboutSection = () => {
  return (
    <div className="bg-white/5">
      {/* Misión */}
      <InfoSection
        title="Misión"
        image="/images/branding/Mision.png"
      >
        <p>
          Brindar atención <strong className="text-vete-primary">veterinaria profesional</strong>, cálida y confiable, cuidando la salud y el bienestar de cada
          animal como parte fundamental de la vida de sus familias y de la producción responsable. Nos
          comprometemos a acompañar a cada mascota en todas las etapas de su vida, mediante tratamientos
          integrales, planes sanitarios, desparasitaciones y cirugías, incluyendo atención de emergencias. Al mismo
          tiempo, ofrecemos soluciones eficientes y basadas en el rigor profesional para animales de producción,
          contribuyendo al desarrollo y la sostenibilidad del sector agropecuario.
        </p>

      </InfoSection>

      {/* Visión */}
      <InfoSection
        title="Visión"
        image="/images/branding/Vision.png"
        reversed={true}
      >
        <p>
          Ser un referente en la medicina veterinaria, reconocido por la confianza, la calidad profesional y la cercanía con
          nuestros clientes.
        </p>
        <p>
          Aspiramos a consolidarnos como una clínica destacada en el cuidado de pequeños animales, sin dejar de aportar nuestra
          experiencia y eficiencia al servicio veterinario de grandes animales y producción, respaldados por años de trayectoria,
          formación constante y compromiso con la excelencia.
        </p>
      </InfoSection>

      {/* Valores */}
      <InfoSection
        title="Valores"
        image="/images/branding/Valores.png"
      >
        <div className="space-y-4 text-white">

          <p><strong className="text-vete-primary">Compromiso con la vida: </strong>
            Cuidamos cada animal con responsabilidad, vocación y respeto, entendiendo
            su importancia en la vida de las personas y en la producción.
          </p>

          <p><strong className="text-vete-primary">Profesionalismo y experiencia: </strong>
            Aplicamos conocimiento, criterio clínico y mejora continua, respaldados por años
            de trayectoria en el ámbito veterinario. Atención con calidez humana.
            Entendemos el vínculo emocional entre las personas y sus mascotas, brindando
            un trato cercano, empático y respetuoso.
          </p>

          <p><strong className="text-vete-primary">Responsabilidad y confianza: </strong>
            Actuamos con honestidad, transparencia y ética, generando relaciones duraderas
            basadas en la confianza. Eficiencia y seriedad profesional, ofrecemos soluciones
            veterinarias confiables tanto en clínica de pequeños animales como en el ámbito de
            la producción, donde la precisión y la eficiencia son fundamentales.
          </p>

        </div>
      </InfoSection>
    </div>
  );
};

// const Footer = () => {
//   return (
//     <footer className="main-footer">
//       <div className="footer-container">

//         {/* Sección del Logo */}
//         <div className="flex items-center gap-2 font-black text-xl">
//             <img src="/logo.png" className="w-10" /> VETERINARIA BELTRAMELLI<span className="text-vete-primary">.</span>
//         </div>

//         {/* Sección de Iconos */}
//         <div className="footer-icons">

//         </div>
//       </div>
//     </footer>
//   );


// };








// export const Footer = () => {
//   return (
//     <>
//       {/* 1. IMAGEN DE FONDO (PASTO) 
//           La ponemos 'fixed' para que siempre esté al fondo del navegador, 
//           pero con un z-index bajo para que no tape el contenido. */}
//       <div className="fixed bottom-0 left-0 w-full h-20 pointer-events-none z-0 opacity-40">
//         <img
//           src="/images/branding/NavPasto.png"
//           alt="Nav Pasto"
//           className="w-full h-full object-cover object-top"
//         />
          
//           {/* SECCIÓN C: Redes Sociales */}
//           <div className="space-y-4">
//             <h4 className="text-vete-primary font-bold uppercase tracking-widest text-sm">Seguinos</h4>
//             <div className="flex gap-4">
//               <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-vete-primary transition-all group">
//                 <Instagram size={24} className="group-hover:text-white" />
//               </a>
//               <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-vete-primary transition-all group">
//                 <Facebook size={24} className="group-hover:text-white" />
//               </a>
//               <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-vete-primary transition-all group">
//                 <MapPin size={24} className="group-hover:text-white" />
//               </a>
//             </div>
//           </div>  


//       </div>


//       {/* 2. EL FOOTER REAL
//           Usamos 'relative' y 'z-10' para que flote por encima del pasto.
//           'backdrop-blur' hace que el pasto se vea suave por detrás. */}
//       <footer className="relative z-10 bg-vete-dark/90 backdrop-blur-sm border-t border-white/10 px-6 md:px-16 py-12 mt-20">
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

//           {/* SECCIÓN A: Logo y Eslogan */}
//           <div className="space-y-4">
//             <div className="flex items-center gap-2 font-black text-xl text-white">
//               <img src="/logo.png" className="w-10" alt="Logo" />
//               VETERINARIA BELTRAMELLI<span className="text-vete-primary">.</span>
//             </div>
//             <p className="text-gray-400 text-sm max-w-xs">
//               Comprometidos con la salud de tus animales de producción y el bienestar de tus mascotas en Salto.
//             </p>
//           </div>

//           {/* SECCIÓN B: Contacto Rápido */}
//           <div className="space-y-4">
//             <h4 className="text-vete-primary font-bold uppercase tracking-widest text-sm">Contacto</h4>
//             <ul className="space-y-3 text-gray-300">
//               <li className="flex items-center gap-3 hover:text-white transition">
//                 <Phone size={18} className="text-vete-primary" />
//                 <span>092 444 510</span>
//               </li>
//               <li className="flex items-center gap-3 hover:text-white transition">
//                 <Mail size={18} className="text-vete-primary" />
//                 <span>contacto@vete-beltramelli.com</span>
//               </li>
//               <li className="flex items-center gap-3 hover:text-white transition">
//                 <MapPin size={18} className="text-vete-primary" />
//                 <span>Salto, Uruguay</span>
//               </li>
//             </ul>
//           </div>

//           {/* SECCIÓN C: Redes Sociales */}
//           <div className="space-y-4">
//             <h4 className="text-vete-primary font-bold uppercase tracking-widest text-sm">Seguinos</h4>
//             <div className="flex gap-4">
//               <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-vete-primary transition-all group">
//                 <Instagram size={24} className="group-hover:text-white" />
//               </a>
//               <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-vete-primary transition-all group">
//                 <Facebook size={24} className="group-hover:text-white" />
//               </a>
//               <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-vete-primary transition-all group">
//                 <MapPin size={24} className="group-hover:text-white" />
//               </a>
//             </div>
//           </div>

//         </div>

//         {/* Créditos finales */}
//         <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
//           <p>© 2024 Veterinaria Beltramelli - Todos los derechos reservados.</p>
//           <p className="tracking-widest uppercase opacity-50">Infraestructura por NorthCode</p>
//         </div>
//       </footer>
//     </>
//   );
// };



export const Footer = () => {
  return (
    <>
      {/* 1. BARRA FLOTANTE DE PASTO + REDES SOCIALES
          Esta barra siempre está al fondo mientras haces scroll.
      */}
      <div className="fixed bottom-0 left-0 w-full h-24 z-20 flex flex-col items-center justify-end pb-4">
        {/* Imagen del pasto (Fondo de la barra flotante) */}
        <img
          src="/images/branding/NavPasto.png"
          alt="Nav Pasto"
          className="absolute bottom-0 left-0 w-full h-full object-cover object-top opacity-60 pointer-events-none z-0"
        />

        {/* Iconos de Redes Sociales sobre el pasto flotante */}
        <div className="relative z-30 flex gap-6 mb-2">
          <a href="#" className="p-2 bg-vete-dark/50 backdrop-blur-md rounded-full border border-white/20 hover:bg-vete-primary transition-all shadow-lg group">
            <Instagram size={20} className="text-white group-hover:scale-110" />
          </a>
          <a href="#" className="p-2 bg-vete-dark/50 backdrop-blur-md rounded-full border border-white/20 hover:bg-vete-primary transition-all shadow-lg group">
            <Facebook size={20} className="text-white group-hover:scale-110" />
          </a>
        </div>
        
        {/* <p className="relative z-30 text-[10px] text-white/40 font-bold uppercase tracking-widest pointer-events-none">
          Salto, Uruguay
        </p> */}
      
      </div>


      {/* 2. EL FOOTER REAL (El que aparece al final de la página)
          Tiene un z-index de 40 para "tapar" la barra flotante cuando llegas al final.
      */}
      <footer className="relative z-40 bg-vete-dark border-t border-white/10 px-6 md:px-16 py-12 mt-40 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-white">

          {/* SECCIÓN A: Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-black text-xl">
              <img src="/logo.png" className="w-10" alt="Logo" />
              VETERINARIA BELTRAMELLI<span className="text-vete-primary">.</span>
            </div>
            <p className="text-gray-400 text-sm">
              Cuidado experto y calidez humana en cada etapa de su vida.
            </p>
          </div>

          {/* SECCIÓN B: Contacto */}
          <div className="space-y-4">
            <h4 className="text-vete-primary font-bold uppercase tracking-widest text-sm text-center md:text-left">Contacto</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-3"><Phone size={16} className="text-vete-primary" /> 092 444 510</li>
              <li className="flex items-center gap-3"><Mail size={16} className="text-vete-primary" /> contacto@vete.com</li>
            </ul>
          </div>

          {/* SECCIÓN C: Info Extra */}
          <div className="space-y-4 text-right">
             <p className="text-xs text-gray-500 uppercase tracking-widest">Atención 24hs en Salto</p>
             <p className="text-xs text-gray-500">© 2024 NorthCode Infrastructure</p>
          </div>

        </div>
      </footer>
    </>
  );
};




// <!DMI> Seccion Mapas
const MapsSection = () => {
  return (
    <section className="px-6 md:px-16 py-20 ">
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
      <AboutSection />
      <MapsSection />
      <Footer />

    </div>
  )
};