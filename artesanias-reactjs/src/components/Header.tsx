
import logo from '../assets/logo.png'; 

export  const Header = () => {
  return (
    <header className="header">
    <div className="logo">
      <img src={logo} alt="Artesanías de Nuestra Tierra" />
    </div>
    <nav className="nav">
      <ul>
        <li><a href="#promocion">Promoción</a></li>
        <li><a href="#productos">Productos</a></li>
        <li><a href="#informacion">Información</a></li>
      </ul>
    </nav>
  </header>
  )
}