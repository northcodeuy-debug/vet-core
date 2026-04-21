// apps/web-client/src/features/landing/LandingPage.tsx


import { ProductCard } from '../../components/ProductCard.tsx';
import products from '../../data/productos.json';
import { SectionDivider } from '../../components/SectionDivider';
// import OndaInferior from '../../assets/branding/terminacionInferior.svg?react'; //<!> para sacar Importar SVG Silueta : Fijate el "?react" al final


import { Mail, MapPin, Phone, Instagram, Facebook } from 'lucide-react';


// <!DMI> Header de la web
const Header = ({bgColor}: {bgColor: string}) => {
  return (
    // Cambiamos px-16 por px-6 en móvil y md:px-16 en escritorio

    <header className={`${bgColor} px-6 md:px-16 py-8 flex justify-between items-center w-full max-w-full overflow-hidden`}>
      <div className="flex items-center gap-2 font-black text-xl">
        <img src="/logo.png" className="w-10 shrink-0" alt="Logo" />

        {/* 
           hidden: oculta el texto por defecto (móvil)
           md:inline: lo muestra como inline a partir de tablets/PC (768px)
        */}
        
          {/* <!> Agregar el tamanio de figma por variable telwind.config.js  text-white*/}
        <span className="hidden tablet-vete:inline whitespace-nowrap ">
          VETERINARIA BELTRAMELLI<span className="text-vete-primary">.</span>
        </span>

      </div>

      {/* <!> Agregar el tamanio de figma por variable telwind.config.js  text-white */}
      <nav className="flex items-center gap-4 md:gap-8 font-semibold ">
        {/* Ocultamos los links en móvil para que no se amontonen, o podrías usar un menú hamburguesa luego */}
        <a href="#" className=" hover:text-vete-primary transition-colors">Servicios</a>
        <a href="#" className=" hover:text-vete-primary transition-colors">Tienda</a>
        <a href="#" className="hover:text-vete-primary transition-colors">Contacto</a>

        <div className="bg-vete-primary p-2 rounded-full cursor-pointer hover:scale-110 transition-transform">
          <img src="/images/branding/carrito.svg" className="w-5" alt="Carrito" />
        </div>
      </nav>
    </header>
  )
};

// <!DMI> Seccion Principal de la web  Compuesto de 2 div uno con el texto y otro 
// bgColor: string -> Color de fondo de la seccion

// <!>  En la version desktop queda muy vasio queda todo al medio y no queda bien abria que plantear
// agrandar la letar o algo y que la imagen el limite sea mas grande NO quea bien en resoluiones grandes 
// Estaria bueno agregar animacion de 3 fotos para la version grande para que me jore el contenido 
// 
const HeroSection = ({bgColor}: {bgColor: string}) => {
  return (
    /* 
      1. Agregamos un wrapper (div) o usamos la sección como contenedor.
      2. 'max-w-[1200px]' limita el crecimiento en pantallas ultra-anchas.
      3. 'mx-auto' centra todo el bloque horizontalmente.
    */
    <section className={`relative w-full ${bgColor}`}> 
      <div className=" max-w-[1200px] mx-auto px-6 md:px-16 py-12 flex flex-col md:flex-row items-center gap-10 relative z-10">
        
        {/* Lado del Texto: Limitamos el ancho para que no se estire de más */}
        <div className="w-full desktop-vete:w-1/2 text-center desktop-vete:text-left flex flex-col items-center desktop-vete:items-start">
          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] mb-6 text-vete-primary">
            <span className="whitespace-nowrap">Cuidamos <span className='text-vete-text-light'>a</span></span> <br />
            <span className="text-vete-text-light">quienes</span> amas
          </h1>
          
          {/* text-lg  _ text-white*/}
          <p className="text-vete-body opacity-90 max-w-md leading-relaxed ">
            Tu mascota merece la mejor atención médica en un ambiente cálido y
            profesional. Contamos con especialistas comprometidos con el bienestar 
            integral de tus compañeros, brindando cuidado, dedicación y confianza 
            en cada etapa de su vida.
          </p>
        </div>

        {/* Lado de la Imagen: Controlamos el tamaño máximo para que no sea 'gigante' */}
        <div className="hidden desktop-vete:flex w-full md:w-1/2 justify-center desktop-vete:justify-end relative">
          <img 
            src="/images/branding/HeroSection.png"
            className="rounded-[3rem] shadow-2xl object-cover max-w-full h-auto lg:max-h-[1100px]" 
            alt="Mascotas"
          />
        </div>

      </div>

    </section>
  )
};




// <!DMI> Seccion Productos donde estan las tarjetas de los productos  

const ProductsSection = ({bgColor}: {bgColor: string}) => {
  return (
    <section className={`${bgColor} px-6 md:px-16 py-20  mt-10`}>
      {/* text-white */}
      <h2 className="text-4xl font-black mb-12 italic">
        Lista de <span className="text-vete-primary">Productos</span>
      </h2>

      {/* Categoría Genérica para todas */}
      {[
        { title: "Ración", data: products.racion },
        { title: "Accesorios", data: products.accesorios },
        { title: "Medicamentos", data: products.racion } // Ajustar a products.medicamentos cuando esté listo
      ].map((cat, idx) => (
        <div key={idx} className="mb-20">
          <div className="flex justify-between items-end mb-8 border-b border-vete-primary/30 pb-4">
            <h3 className="text-5xl font-black text-vete-primary leading-none">{cat.title}</h3>
            <button className="text-vete-primary font-bold hover:underline">Ver catálogo completo ➔</button>
          </div>

          {/* 
              Lógica de columnas:
              grid-cols-1: Móvil (1 tarjeta)
              sm:grid-cols-2: Tablet pequeña (2 tarjetas)
              lg:grid-cols-3: Tablet grande / Monitor pequeño (3 tarjetas)
              xl:grid-cols-4: Monitor normal (4 tarjetas)
          */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-10 gap-x-6 justify-items-center">
            {cat.data.map(p => (
              <ProductCard
                key={p.id}
                title={p.titulo}
                desc={p.descripcion}
                price={p.precio}
                img={p.imagen}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};


// Componente auxiliar para evitar repetir código en Misión, Visión y Valores
const InfoSection = ({title, children, image, reversed = false }: {title: string, children: React.ReactNode, image: string, reversed?: boolean }) => (
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

const AboutSection = ({bgColor}: {bgColor: string}) => {
  return (
    <div className={`${bgColor}`}>
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
        {/* text-white */}
        <div className="space-y-4">

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

// <!DMI> Pie de la web en este tien la animaion de pato y ademas el pie debajo 
// bgColor: string - Color de fondo del footer  
export const Footer = ({bgColor}: {bgColor: string}) => {
  return (
    <>
      {/* 1. BARRA FLOTANTE DE PASTO + REDES SOCIALES
          Esta barra siempre está al fondo mientras haces scroll.
      */}
      <div className={`fixed bottom-0 left-0 w-full h-24 z-20 flex flex-col items-center justify-end pb-4`}>
        {/* Imagen del pasto (Fondo de la barra flotante) */}
        <img
          src="/images/branding/NavPasto.png"
          alt="Nav Pasto"
          className="absolute bottom-0 left-0 w-full h-full object-cover object-top opacity-60 pointer-events-none z-0"
        />

        {/* Iconos de Redes Sociales sobre el pasto flotante */}
        <div className="relative z-30 flex gap-6 mb-2">
          <a href="#" className="p-2 bg-vete-dark/50 backdrop-blur-md rounded-full border border-white/20 hover:bg-vete-primary transition-all shadow-lg group">
            {/* <!> text-white */}
            <Instagram size={20} className=" group-hover:scale-110" />
          </a>
          <a href="#" className="p-2 bg-vete-dark/50 backdrop-blur-md rounded-full border border-white/20 hover:bg-vete-primary transition-all shadow-lg group">
            {/* <!> text-white */}
            <Facebook size={20} className=" group-hover:scale-110" />
          </a>
        </div>

        {/* <p className="relative z-30 text-[10px] text-white/40 font-bold uppercase tracking-widest pointer-events-none">
          Salto, Uruguay
        </p> */}

      </div>


      {/* 2. EL FOOTER REAL (El que aparece al final de la página)
          Tiene un z-index de 40 para "tapar" la barra flotante cuando llegas al final.
      */}
      <footer className={`${bgColor} relative z-40 border-t border-white/10 px-6 md:px-16 py-12 mt-40 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]`}>
        {/* text-white */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

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
// bgColor: string - Color de fondo de la sección
const MapsSection = ({bgColor}: {bgColor: string}) => {
  return (
    <section className={`${bgColor} px-6 md:px-16 py-20 `}>
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
            {/* <!> hover:text-white */}
            <a href="#" className="bg-white/60 p-3 rounded-full text-vete-header hover:bg-vete-primary transition-all shadow-sm">
              <Instagram size={24} />
            </a>
              {/* hover:text-white */}
            <a href="#" className="bg-white/60 p-3 rounded-full text-vete-header hover:bg-vete-primary transition-all shadow-sm">
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* LADO DERECHO: Mapa */}
        <div className="w-full lg:w-1/2 relative h-[450px]">
          {/* Badge Flotante sobre el mapa */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-vete-header/90 backdrop-blur-md px-6 py-3 rounded-2xl flex items-center gap-3 shadow-2xl border border-white/10">
            <div className="bg-vete-primary p-2 rounded-lg">
              {/* <!> className="text-white */}
              <MapPin size={20} />
            </div>
            {/* <!> text-white */}
            <span className="font-bold whitespace-nowrap">Salto, Uruguay</span>
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
    /* Agregamos overflow-x-hidden para evitar la franja lateral */
    <div className="bg-vete-dark min-h-screen font-sans text-vete-text-light overflow-x-hidden w-full relative border-0 m-0 p-0">
      <Header bgColor='bg-vete-secondary' />    
      <main>
        <HeroSection bgColor='bg-vete-secondary'/>

        {/* 2. EL DIVISOR MÁGICO */}
        {/* El fondo del contenedor es negro, y la onda es verde oscuro */}
        <SectionDivider 
          topColor="bg-vete-dark" 
          bottomColor="text-vete-secondary" 
        />
        <ProductsSection bgColor='bg-vete-dark'/>
        
        <SectionDivider 
          topColor="bg-vete-secondary" 
          bottomColor="text-vete-dark" 
        />

        <AboutSection bgColor='bg-vete-secondary'/>

        <SectionDivider 
          topColor="bg-vete-dark" 
          bottomColor="text-vete-secondary" 
        />
        
        <MapsSection bgColor='bg-vete-dark'/>
      </main>
      <Footer bgColor='bg-vete-dark'/>
    </div>
  )
};