import { ArrowDownRight, ArrowUpRight, Check, ChevronRight, Flame, Menu, X } from 'lucide-react'
import { useState } from 'react'

const services = [
  { number: '01', title: 'Recarga & control', copy: 'Ponemos tu equipo a punto y te avisamos cuándo vuelve a tocar.', tone: 'red' },
  { number: '02', title: 'Instalación', copy: 'Ubicación, señalización y equipos pensados para tu espacio.', tone: 'yellow' },
  { number: '03', title: 'Venta directa', copy: 'La protección correcta para casa, comercio, auto o industria.', tone: 'ink' },
]

const products = [
  { name: 'ABC 5 kg', type: 'Polvo químico seco', tag: 'El clásico', image: '/images/mata3.png' },
  { name: 'CO₂ 3.5 kg', type: 'Dióxido de carbono', tag: 'Sin residuo', image: '/images/mata4-sin-fondo.png' },
  { name: 'ABC 10 kg', type: 'Alta capacidad', tag: 'Para industria', image: '/images/mata5.png' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [manifestoExpanded, setManifestoExpanded] = useState(false)

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Matafuegos OFF inicio">
          <span className="brand-mark"><Flame size={22} fill="currentColor" /></span>
          <span>MATAFUEGOS<br /><strong>OFF</strong></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a>
          <a href="#equipos" onClick={() => setMenuOpen(false)}>Equipos</a>
          <a href="#nosotros" onClick={() => setMenuOpen(false)}>Nosotros</a>
          <a className="nav-cta" href="#contacto" onClick={() => setMenuOpen(false)}>Hablemos <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <h1><span className="hero-first-line">Tu <span className="accent-word">Seguridad</span> también</span><br /><span className="hero-second-line">es Importante</span></h1>
          <p className="hero-intro">Matafuegos, recargas y prevención contra incendios para todo tipo de estblecimientos y lugares</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contacto">Pedí asesoramiento <ArrowUpRight size={18} /></a>
            <a className="text-link" href="#servicios">Ver cómo trabajamos <ArrowDownRight size={18} /></a>
          </div>
        </div>
        <div className="hero-visual">
          <img className="hero-image" src="/images/mata2.png" alt="Matafuegos rojo" />
        </div>
      </section>

      <section className="manifesto" id="nosotros">
        <div className="manifesto-content">
          <h2>Nuestro trabajo es tu tranquilidad</h2>
          <p className={`manifesto-copy${manifestoExpanded ? ' expanded' : ''}`}>Trabajamos en CABA y GBA con hogares, comercios, industrias, consorcios, oficinas y todo tipo de instalaciones. Asesoramos para que cada ambiente cuente con los equipos adecuados, correctamente ubicados y listos para actuar. Realizamos venta, instalación, recarga, mantenimiento y control periódico de matafuegos, señalización y elementos de prevención contra incendios. Revisamos vencimientos, capacidades y condiciones de uso, y te acompañamos con recomendaciones claras para que cumplas con los requisitos y tengas la tranquilidad de estar protegido todos los días.</p>
          <button className="manifesto-toggle" type="button" onClick={() => setManifestoExpanded(!manifestoExpanded)} aria-expanded={manifestoExpanded}>{manifestoExpanded ? 'Ver menos' : 'Seguir leyendo'}</button>
        </div>
      </section>

      <section className="services-section" id="servicios">
        <div className="services-heading"><h2>Todo en orden.<br /><em>Todo OFF.</em></h2></div>
        <div className="service-grid">{services.map((service) => <article className={`service-card ${service.tone}`} key={service.number}><div><h3>{service.title}</h3><p>{service.copy}</p></div><ArrowUpRight size={23} /></article>)}</div>
      </section>

      <section className="products-section" id="equipos">
        <div className="products-top"><div><h2>Equipos</h2></div></div>
        <div className="product-grid">{products.map((product) => <article className="product-card" key={product.name}><div className="product-image" style={{ backgroundImage: `url(${product.image})`, backgroundColor: product.name === 'ABC 5 kg' ? '#111212' : undefined, backgroundPosition: product.name === 'ABC 5 kg' ? 'left center' : undefined, backgroundSize: product.name === 'CO₂ 3.5 kg' || product.name === 'ABC 10 kg' ? 'contain' : undefined, backgroundRepeat: product.name === 'CO₂ 3.5 kg' || product.name === 'ABC 10 kg' ? 'no-repeat' : undefined }}><span>{product.tag}</span></div><div className="product-info"><div><h3>{product.name}</h3><p>{product.type}</p></div><ChevronRight size={22} /></div></article>)}</div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-content">
          <h2>Dejanos tu consulta</h2>
          <p>Contanos qué necesitás proteger. Te respondemos con una solución concreta</p>
          <a className="button button-red" href="https://wa.me/5491100000000" target="_blank" rel="noreferrer">Escribir por WhatsApp <ArrowUpRight size={18} /></a>
          <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
            <label className="form-field">Nombre<input type="text" name="nombre" placeholder="Tu nombre" required /></label>
            <label className="form-field">Correo electrónico<input type="email" name="email" placeholder="nombre@correo.com" required /></label>
            <label className="form-field">Teléfono<input type="tel" name="telefono" placeholder="Tu teléfono" /></label>
            <label className="form-field">Empresa<input type="text" name="empresa" placeholder="Opcional" /></label>
            <label className="form-field form-field-full">¿Cómo podemos ayudarte?<textarea name="mensaje" rows={4} placeholder="Contanos qué necesitás proteger" required /></label>
            <button className="button form-submit" type="submit">Enviar consulta <ArrowUpRight size={18} /></button>
          </form>
        </div>
      </section>

      <footer><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Flame size={18} fill="currentColor" /></span><span>MATAFUEGOS <strong>OFF</strong></span></a><span>Buenos Aires, Argentina</span><a href="mailto:hola@matafuegos-off.com">hola@matafuegos-off.com</a><span>© 2024</span></footer>
    </main>
  )
}

export default App
