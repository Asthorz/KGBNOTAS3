import React from 'react'

import Autenticado from './Autenticado'
import NAutenticado from './NaoAutenticado'


export default function Rotas(){
    const autenticado = false

    return(
        autenticado === true ? <Autenticado /> : <NAutenticado />
    )
}