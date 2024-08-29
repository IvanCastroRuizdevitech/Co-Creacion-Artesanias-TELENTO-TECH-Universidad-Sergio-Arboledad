import './App.css'

import { Header } from '../src/components/Header';
import { Footer } from '../src/components/Footer';
import { Promocion } from '../src/components/Promocion';
import { Productos } from '../src/components/Productos';
import { Informacion } from '../src/components/Informacion';

function App() {

  return (
    <div>
      <Header />
      <main>
        <Promocion /> 
        <Productos /> 
        <Informacion /> 
      </main>
      <Footer />
    </div>
  )
}

export default App
