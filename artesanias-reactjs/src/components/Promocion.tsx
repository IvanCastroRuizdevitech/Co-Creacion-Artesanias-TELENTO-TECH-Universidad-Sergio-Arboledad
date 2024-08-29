import central from '../assets/central.png'; 

export const Promocion = () => {
  return (
    <section id="promocion" className="section">
        <div className="card_center">
        <h1>¡Bienvenidos a "Artesanías de Nuestra Tierra"!</h1>
        <img
            src={central}
            alt="Promoción de Artesanías de Nuestra Tierra"
        />
        <h2>
            Descubre la belleza y el encanto de las artesanías de Boyacá y
            Cundinamarca, contamos una amplia selección de productos únicos y
            auténticos, elaborados con pasión y dedicación por talentosos
            artesanos locales...
        </h2>
        </div>
    </section>
  )
}