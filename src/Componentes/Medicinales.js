import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import MyCard from '../Cards/MyCard';

//const URI = 'https://pohapp.onrender.com/api/pohapp/medicinales/get/0-0-0-0-0';
const URI = 'http://192.168.100.186:3001/api/pohapp/medicinales/get/0-0-0-0-0';

function  Medicinales (){

    const listaEstudios = [
        {
            titulo: "Ingeniería en Sistemas Informáticos",
            adicional: "2021-cursando",
            contenido: `Universidad Tecnológica Intercontinental (UTIC)`
        },
        {
            titulo: "Licenciatura en Análisis de Sistemas Informáticos",
            adicional: "2013 - 2018",
            contenido: `Universidad Tecnológica Intercontinental (UTIC)`
        },
        {
            titulo: "Bachiller Técnico en Informática",
            adicional: "2010 – 2012",
            contenido: `Centro Educativo Técnico Privado (EducArt)`
        },


    ];

    const [medicinales, setMedicinal] = useState([])
    useEffect(() => {
        getMedicinales();
    }, []);


    //procedimineto para mostrar todos los Medicinales
    const getMedicinales = async () => {

        try {
            await axios.get(URI).then((response) => {
                console.log("Respuesta es: ")
                console.log(response.data);
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
                <h1>Medicinales</h1>
            </div>

            <Table striped bordered hover variant="dark">
                <thead >
                    <tr>
                        <th>Id</th>
                        <th>Descripcion</th>
                    </tr>
                </thead>
                <tbody>
                    {medicinales.map((medicinal) => (
                        <tr key={medicinal.idpoha}>
                            <td> {medicinal.idpoha} </td>
                            <td> {medicinal.preparado} </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div className='App-header'>
                <section>
                    <h1 style={{ display: `flex`, justifyContent: `center` }}>Estudios</h1>
                    <div className="container d-flex justify-content-center">
                        <div className="column">
                            <div className="row-md-4">
                                {
                                    listaEstudios.map((experiencia) => {
                                        return <MyCard titulo={experiencia.titulo} adicional={experiencia.adicional} contenido={experiencia.contenido} />
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
export default Medicinales;