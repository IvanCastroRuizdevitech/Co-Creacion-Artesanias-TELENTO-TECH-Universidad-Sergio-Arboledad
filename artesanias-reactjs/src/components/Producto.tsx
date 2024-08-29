import  { IProducto }  from '../interface/interface.producto.ts'

interface ProductoProps {
  producto: IProducto;
}

const Producto: React.FC<ProductoProps> = ({ producto }) => {

  const {id, description, title, url} = producto;

  return (
    <>  
        <div className="card">
            <img src={url} alt={id} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </>
  )
}

export default Producto