import React from 'react'

export const Detalle = (param) => {
    return (
        <>
            <div className="personal" style={{ display: `flex`, alignItems: `center`, justifyContent: `center`, textAlign: `center` }}>
                <div className='container' style={{margin: `20px` }}>
                    <h1>{param.titulo}</h1>
                    <p></p>
                    <br />
                </div>
            </div>
        </>
    );
}
export default Detalle;