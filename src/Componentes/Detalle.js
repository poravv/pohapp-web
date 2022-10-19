import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Card } from 'react-bootstrap';


function Detalle() {

    const { paramIdpoha } = useParams();

    //Parametros/iddolencias-te-mate-terere-idplanta
    const URIDET = `http://186.158.152.141:3000/api/pohapp/medicinales/getid/${paramIdpoha}`;

    const [medicinal, setMedicinal] = useState([])
    useEffect(() => {
        getMedicinal();

    });


    //procedimineto para mostrar todos los Medicinal
    const getMedicinal = async (e) => {
        //console.log(URIDET)
        //console.log(paramIdpoha)
        //console.log(URI)
        try {
            await axios.get(URIDET, {
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
        <>
            <div className="personal" style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, textAlign: `center` }}>
                <div className='container' style={{ margin: `20px` }}>
                    <h1>Detalle Medicinal</h1>

                    {
                        medicinal ? medicinal.map((item) => {
                            //console.log(item);
                            let asciiTraducido1 = "";
                            let asciiTraducido2 = "";
                            let asciiTraducido3 = "";
                            let asciiTraducido4 = "";
                            if(item.descripcion1) item.img1.data.map((valor) => {return asciiTraducido1 += String.fromCharCode(valor)})
                            if(item.descripcion2) item.img2.data.map((valor) => {return asciiTraducido2 += String.fromCharCode(valor)})
                            if(item.descripcion3) item.img3.data.map((valor) => {return asciiTraducido3 += String.fromCharCode(valor)})
                            if(item.descripcion4) item.img4.data.map((valor) => {return asciiTraducido4 += String.fromCharCode(valor)})
                            
                            return <div>
                                {
                                    asciiTraducido1 ? <div>
                                    <Card.Img variant="200px" height="200px" src={`data:image/jpeg;base64,${asciiTraducido1}`} />
                                    <h2>{item.nombre1}</h2>
                                    <p>{item.descripcion1}</p>
                                </div>: null
                                }
                                {
                                    asciiTraducido2 ? <div>
                                    <Card.Img variant="200px" height="200px" src={`data:image/jpeg;base64,${asciiTraducido2}`} />
                                    <h2>{item.nombre2}</h2>
                                    <p>{item.descripcion2}</p>
                                </div>: null
                                }
                                {
                                    asciiTraducido3 ? <div>
                                    <Card.Img variant="200px" height="200px" src={`data:image/jpeg;base64,${asciiTraducido3}`} />
                                    <h2>{item.nombre3}</h2>
                                    <p>{item.descripcion3}</p>
                                </div>: null
                                }
                                {
                                    asciiTraducido4 ? <div>
                                    <Card.Img variant="200px" height="200px" src={`data:image/jpeg;base64,${asciiTraducido4}`} />
                                    <h2>{item.nombre4}</h2>
                                    <p>{item.descripcion4}</p>
                                </div>: null
                                }
                            </div>
                        }) : null
                    }

                    <br />
                </div>
            </div>
        </>
    );
}
export default Detalle;