import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MyCard from '../Cards/MyCard';
import { resolvePath } from 'react-router-dom';

//const URI = 'https://pohapp.onrender.com/api/pohapp/medicinales/get/0-0-0-0-0';
const URI = 'http://192.168.100.186:3001/api/pohapp/medicinales/get/0-0-0-0-0';


function Medicinales() {

    /*
        const listaEstudios = [
            {
                cabecera: "Ingeniería en Sistemas Informáticos",
                cuerpo: "2021-cursando",
                imagen: `${imagen}`
            },
            {
                cabecera: "Licenciatura en Análisis de Sistemas Informáticos",
                cuerpo: "2013 - 2018",
                imagen: `${imagen}`
            },
            {
                cabecera: "Bachiller Técnico en Informática",
                cuerpo: "2010 – 2012",
                imagen: `${imagen}`
            },
    
        ];
    */

    const [medicinales, setMedicinal] = useState([])
    useEffect(() => {
        getMedicinales();
    }, []);


    //procedimineto para mostrar todos los Medicinales
    const getMedicinales = async () => {

        try {
            await axios.get(URI, {
                //responseType:'blob'
            }).then((response) => {
                //console.log("Respuesta es: ")
                //console.log(response.data);
                setMedicinal(response.data);
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
            <div className="personal" style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, textAlign: `center` }}>
                <div className='column'>
                    <h1>Medicinales</h1>
                </div>
            </div>
            <section>
                <div className="container d-flex justify-content-center" style={{ flexWrap: `wrap` }}>
                    {
                        medicinales ? medicinales.map((medicina) => {

                            //[70,43,2,3,22,44,64,32,]//Array Ascii

                            let asciiTraducido="";
                            
                            medicina.img1.data.map((valor) => {
                                //se traduce a base64
                                asciiTraducido += String.fromCharCode(valor);
                            })
                            //console.log(asciiTraducido);

                            return <li style={{ listStyle: `none` }} key={medicina.idpoha}>
                                <MyCard cabecera={medicina.nombre1} cuerpo={medicina.descripcion} imagen={`data:image/jpeg;base64,${asciiTraducido}`}  />
                            </li>
                        }) : null
                    }
                </div>
            </section>
        </div>
    );
}
export default Medicinales;