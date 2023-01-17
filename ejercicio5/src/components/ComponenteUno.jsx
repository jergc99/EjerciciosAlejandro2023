import React from "react";



function ComponenteUno({telefono}){
    let objeto = {
        'username' : 'Jeremy',
        'email':'jeremy@so.com'
    }
    return(
        <h2>El usuario {objeto.username} tiene el correo: {objeto.email} ,y el telefono: {telefono}</h2>
    )
}

export default ComponenteUno