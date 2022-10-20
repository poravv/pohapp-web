import React from 'react'
import { IoLogoGooglePlaystore } from 'react-icons/io5';

export const Inicio = () => {
    return (
        <>
        <div className='header'>
            <h1>Poha ÑanApp</h1>
        </div>
            <div className="personal" style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, textAlign: `center` }}>
                <div className='container' style={{margin: `20px` }}>
                    <h1>Te damos una cordial Bienvenida</h1>
                    <p>Poha ÑanApp nace con la intencion de educar e informar acerca de las propiedades de las plantas y sus combinaciones para distintos tipos de dolencias.</p>
                    <p>Aqui podras hallar información, recetas de los remedios caceros, y a su vez ir nutriendo nuestra base de conocimientos ancestrales con tu propio aporte.</p>
                    <br />
                    <p>Si te interesa la idea de colaborar dando tu aporte en una mezcla de remedios o sobre las propiedades de alguna planta.</p>
                    <p>Te invitamos a descargar nuestra app de Google PlayStore a traves de este enlace.</p>
                    <br/>
                    <a href="https://play.google.com/store/apps/details?id=com.pohapp.pohapp"><h1><IoLogoGooglePlaystore color='green' /></h1></a>
                    <h3>Poha ÑanApp</h3>
                </div>
            </div>
        </>
    );
}
export default Inicio;