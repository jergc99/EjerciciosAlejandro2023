import React from "react";



function ComponenteDos({telefono}){
    let objeto = {
        'username' : 'Carlos',
        'email':'carlos@so.com'
    }
    return(
    <h2>El usuario {objeto.username} tiene el correo: {objeto.email} ,y el telefono: {telefono}</h2>
    )
}

export default ComponenteDos