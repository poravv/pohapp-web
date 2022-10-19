import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
//Importamos componentes creados
import Inicio from '../Componentes/Inicio';
import Medicinales from '../Componentes/Medicinales';
import Plantas from '../Componentes/Plantas';
import Detalle from '../Componentes/Detalle';
import Navbar from '../layouts/NavBar';

//<Route exact path="/Detalle/idpoha" render={(props) => <Detalle props={props} /> } />

function NavigatorBar() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navbar />} >
            <Route index element={<Inicio />} />
            <Route path='Inicio' element={<Inicio />} />
            <Route path='Medicinales' element={<Medicinales />} />
            <Route path='Plantas' element={<Plantas />} />
            <Route exact path="/Detalle/:paramIdpoha" element={<Detalle/>}/>
            
            

            <Route path='*' element={<Navigate replace to='/' />} />
        </Route>
    </Routes>
</BrowserRouter>
    </>
  )
}

export default NavigatorBar;
