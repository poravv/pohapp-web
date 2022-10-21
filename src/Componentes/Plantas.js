import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyCard from '../Cards/MyCard';

const URI = 'https://pohapp.onrender.com/api/pohapp/planta/getlimit/';


function Plantas() {
    const [Plantas, setPlantas] = useState([])
    useEffect(() => {
        getPlantas();
    }, []);


    //procedimineto para mostrar todos los Plantas
    const getPlantas = async () => {

        try {
            await axios.get(URI, {
                //responseType:'blob'
            }).then((response) => {
                setPlantas(response.data);
            })
                .catch((error) => {

                    console.log(error);

                });
        } catch (error) {
            console.log(error);
        }


    }
    return (
        <div>
            <div className='header'>
                <h1>Productos Naturales</h1>
            </div>
            <section>
                <div className="container d-flex justify-content-center" style={{ flexWrap: `wrap` }}>
                    {
                        Plantas ? Plantas.map((planta) => {
                            
                            let asciiTraducido="";
                            
                            planta.img.data.map((valor) => { 
                                //se traduce a base64
                                return asciiTraducido += String.fromCharCode(valor);
                            })
                            //console.log(asciiTraducido);

                            return <li style={{ listStyle: `none` }} key={planta.idplanta}>
                                <MyCard cabecera={planta.nombre} cuerpo={planta.descripcion} imagen={`data:image/jpeg;base64,${asciiTraducido}`}  />
                            </li>
                        }) : null
                    }
                </div>
            </section>
        </div>
    );
}
export default Plantas;