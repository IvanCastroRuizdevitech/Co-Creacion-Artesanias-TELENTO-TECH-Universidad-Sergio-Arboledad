import { useState, useEffect }  from 'react'
import clienteAxios from '../config/axios';

import Spinner from '../components/Spinner';
import Producto from '../components/Producto';

// import img1 from '../assets/1.png'; 
// import img2 from '../assets/2.png'; 
// import img3 from '../assets/3.png'; 
// import img4 from '../assets/4.png'; 
// import img5 from '../assets/5.png'; 
// import img6 from '../assets/6.png'; 
import { IProducto } from '../interface/interface.producto';



export const Productos = () => {

  const [ productos, setProducto] = useState<IProducto[]>([]);
  const [ spinner, setSpinner ] = useState(true);  

  const consultarApi = async () =>{
    try {
        const { data } = await clienteAxios.get('/artesanias-productos');
        setProducto(data.data);
    } catch (error){
        console.error('Error:', error);
        setProducto([]);
    }; 
  };

  useEffect( () =>{
    consultarApi();   
  }, []);

  
  console.log(productos);

  return (

    <>

        {

            spinner 
                    ?
                        <Spinner
                            spinner={spinner}
                            setSpinner={setSpinner}
                        />
                    :
                    
                    productos.length > 0
                                        ?

                                        <section id="productos" className="section">
                                            <div className="container">

                                                    { 
                                                        productos.map( producto => (
                                                            <Producto 
                                                                key={producto.id}
                                                                producto={producto}
                                                            />
                                                        ))
                                                    }
                                            </div>
                                        </section>     
                                        :

                                        <p>Cargando el listado de productos...</p>  
        }


{/* 
        <section id="productos" className="section">
                <div className="container">
                    <div className="card">
                        <img src={img1} alt="Producto 1" />
                        <h3>Cesteria</h3>
                        <p>Productos elaborados con la mas alta calidad...</p>
                    </div>
                    <div className="card">
                        <img src={img2} alt="Producto 2" />
                        <h3>Metal</h3>
                        <p>Productos elaborados con la mas alta calidad...</p>
                    </div>
                    <div className="card">
                        <img src={img3} alt="Producto 3" />
                        <h3>Hilo</h3>
                        <p>Productos elaborados con la mas alta calidad...</p>
                    </div>
                    <div className="card">
                        <img src={img4} alt="Producto 4" />
                        <h3>Cerámica</h3>
                        <p>Productos elaborados con la mas alta calidad...</p>
                    </div>
                    <div className="card">
                        <img src={img5} alt="Producto 5" />
                        <h3>Lana</h3>
                        <p>Productos elaborados con la mas alta calidad...</p>
                    </div>
                    <div className="card">
                        <img src={img6} alt="Producto 6" />
                        <h3>Tela</h3>
                        <p>Productos elaborados con la mas alta calidad...</p>
                    </div>
                </div>
        </section> */}
    </>

    
  )
}