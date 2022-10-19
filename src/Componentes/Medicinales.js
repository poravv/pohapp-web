import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import mezcla from '../Imagenes/mezcla.png';
import Form from 'react-bootstrap/Form';


//const URI = 'https://pohapp.onrender.com/api/pohapp/medicinales/get/0-0-0-0-0';
//const URI = 'http://192.168.100.186:4000/api/pohapp/medicinales/get/0-0-0-0-0';

function Medicinales() {

    const [dolencia, setDolencia] = useState(0);
    const [te, setTe] = useState(0);
    const [mate, setMate] = useState(0);
    const [terere, setTerere] = useState(0);
    //Parametros/iddolencias-te-mate-terere-idplanta
    const [uri, setUri] = useState('http://186.158.152.141:3000/api/pohapp/medicinales/get/0-0-0-0-0');


    const [medicinales, setMedicinal] = useState([]);
    
    useEffect(() => {
        getMedicinales();
    }, []);
    



    //procedimineto para mostrar todos los Medicinales
    const getMedicinales = async () => {
        
        setUri(`http://186.158.152.141:3000/api/pohapp/medicinales/get/${dolencia}-${te}-${mate}-${terere}-0`);

        console.log(uri)

        try {
            await axios.get(uri, {
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

    const cambioCheck = (e)=>{
        const {name,checked} = e.target;
        console.log(name,checked)
        if (name === "te" && checked === true) { setTe(1); } else { setTe(0); }
        if (name === "mate" && checked === true) { setMate(1); } else { setMate(0); }
        if (name === "terere" && checked === true) { setTerere(1); } else { setTerere(0); }
    }

    return (
        <div>

            <div className="personal" style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, textAlign: `center` }}>
                <div className='column'>
                    <h1>Medicinales</h1>
                </div>
            </div>
            <div style={{ display: `flex`, justifyContent: `center`, margin: `20px` }}>
                <Form>
                <label style={{ marginRight: `20px`, marginLeft: `10px` }}>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Te"
                        name="te"
                        onChange={cambioCheck}
                    />
                </label>
                <label style={{ marginRight: `20px`, marginLeft: `10px` }}>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Mate"
                        name='mate'
                        onChange={cambioCheck}
                    />
                </label>
                <label style={{ marginRight: `20px`, marginLeft: `10px` }}>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Terere"
                        name='terere'
                        onChange={cambioCheck}
                    />
                </label>
                </Form>
            </div>
            <section>
                <div className="container d-flex justify-content-center" style={{ flexWrap: `wrap` }}>
                    {
                        medicinales ? medicinales.map((medicina) => {

                            let asciiTraducido1 = "";
                            let asciiTraducido2 = "";
                            let asciiTraducido3 = "";
                            let asciiTraducido4 = "";
                            let contadorImg = 0;

                            if (medicina.descripcion1) { medicina.img1.data.map((valor) => { return asciiTraducido1 += String.fromCharCode(valor) }); contadorImg += 1 }
                            if (medicina.descripcion2) { medicina.img2.data.map((valor) => { return asciiTraducido2 += String.fromCharCode(valor) }); contadorImg += 1 }
                            if (medicina.descripcion3) { medicina.img3.data.map((valor) => { return asciiTraducido3 += String.fromCharCode(valor) }); contadorImg += 1 }
                            if (medicina.descripcion4) { medicina.img4.data.map((valor) => { return asciiTraducido4 += String.fromCharCode(valor) }); contadorImg += 1 }
                            //console.log(asciiTraducido);

                            let plantas = "";

                            if (medicina.nombre1) plantas += medicina.nombre1;
                            if (medicina.nombre2) plantas += "/ " + medicina.nombre2;
                            if (medicina.nombre3) plantas += "/ " + medicina.nombre3;
                            if (medicina.nombre4) plantas += "/ " + medicina.nombre4;

                            return <li style={{ listStyle: `none` }} key={medicina.idpoha}>
                                <Card key={medicina.idpoha} id={medicina.idpoha} style={{ width: '18rem', margin: `10px` }}>

                                    <Card.Body>
                                        <div style={{ display: `flex`, flexWrap: `nowrap`, }} >
                                            {
                                                contadorImg === 1 ?
                                                    <Card.Img variant="top" height="200px" src={`data:image/jpeg;base64,${asciiTraducido1}`} /> :
                                                    <Card.Img variant="top" height="200px" src={mezcla} />
                                            }
                                        </div>
                                        <Card.Title >{plantas}</Card.Title>
                                        <Card.Text>
                                            {medicina.descripcion}
                                        </Card.Text>
                                        <Button as={Link} to={`/Detalle/${medicina.idpoha}`} variant="primary">Detalle</Button>
                                    </Card.Body>
                                </Card>
                            </li>
                        }) : null
                    }
                </div>
            </section>
        </div>
    );
}
export default Medicinales;