import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
//Importamos componentes creados
import Inicio from '../Componentes/Inicio';
import Medicinales from '../Componentes/Medicinales';
import Agregar from '../Componentes/Agregar';
import Navbar from '../layouts/NavBar';

function NavigatorBar() {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navbar />} >
            <Route index element={<Inicio />} />
            <Route path='Inicio' element={<Inicio />} />
            <Route path='Medicinales' element={<Medicinales />} />
            <Route path='Agregar' element={<Agregar />} />

            <Route path='*' element={<Navigate replace to='/' />} />
        </Route>
    </Routes>
</BrowserRouter>
    </>
  )
}

export default NavigatorBar;
