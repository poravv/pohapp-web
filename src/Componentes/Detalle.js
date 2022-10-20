import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { Card, Container } from 'react-bootstrap';
import ContenedorImg from './ContenedorImg';


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
                            if (item.descripcion1) item.img1.data.map((valor) => { return asciiTraducido1 += String.fromCharCode(valor) })
                            if (item.descripcion2) item.img2.data.map((valor) => { return asciiTraducido2 += String.fromCharCode(valor) })
                            if (item.descripcion3) item.img3.data.map((valor) => { return asciiTraducido3 += String.fromCharCode(valor) })
                            if (item.descripcion4) item.img4.data.map((valor) => { return asciiTraducido4 += String.fromCharCode(valor) })

                            return <div>
                                <section style={{ backgroundColor: `#D8C7B4`, width: `100%`, borderRadius: `10px`,margin:`10px`,display:`flex` }}>
                                    {
                                        asciiTraducido1 ? <div>
                                            <h2>{item.nombre1}</h2>
                                            <ContenedorImg img={`data:image/jpeg;base64,${asciiTraducido1}`} />
                                            <p>{item.descripcion1}</p>
                                        </div> : null
                                    }
                                    {
                                        asciiTraducido2 ? <div>
                                            <h2>{item.nombre2}</h2>
                                            <ContenedorImg img={`data:image/jpeg;base64,${asciiTraducido2}`} />
                                            <p>{item.descripcion2}</p>
                                        </div> : null
                                    }
                                    {
                                        asciiTraducido3 ? <div>
                                            <h2>{item.nombre3}</h2>
                                            <ContenedorImg img={`data:image/jpeg;base64,${asciiTraducido3}`} />
                                            <p>{item.descripcion3}</p>
                                        </div> : null
                                    }
                                    {
                                        asciiTraducido4 ? <div>
                                            <h2>{item.nombre4}</h2>
                                            <ContenedorImg img={`data:image/jpeg;base64,${asciiTraducido4}`} />
                                            <p>{item.descripcion4}</p>
                                        </div> : null
                                    }
                                </section>

                                <section style={{ backgroundColor: `#CEFBD0`, width: `100%`, borderRadius: `10px`,margin:`10px` }}>
                                    <h2>Malestar / Dolencias</h2>
                                    <Card.Text>
                                        {item.descripcion}
                                    </Card.Text>
                                </section>

                                <section style={{ backgroundColor: `#FDF4AC`, width: `100%`, borderRadius: `10px`,margin:`10px` }}>
                                    <h2>Metodo de Preparacion</h2>
                                    <Card.Text>
                                        {item.preparado}
                                    </Card.Text>
                                    <h2>Recomendacion</h2>
                                    <Card.Text>
                                        {item.recomendacion}
                                    </Card.Text>
                                </section>
                                <section style={{ backgroundColor: `#CEFBD0`, width: `100%`, borderRadius: `10px`,margin:`10px` }}>
                                    <h2>Datos del Autor</h2>
                                    <Card.Text>{item.autor}</Card.Text>
                                    <Card.Text>{item.nacimiento}</Card.Text>
                                    <Card.Text>{item.ciudad}</Card.Text>
                                    <Card.Text>{item.pais}</Card.Text>
                                </section>
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