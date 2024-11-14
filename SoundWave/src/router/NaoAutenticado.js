import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Inicio from '../Page/home'
import Login from '../Page/Login'
import RecoverySenha from '../Page/Recovery/index'
import CreateLogin from '../Page/CreateLogin'

export default function Nautenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={< Inicio />} />
                <Route path='/Login' element={< Login />} />
                <Route path='/Recovery' element={< RecoverySenha />} />
                <Route path='/Cadastra' element={<CreateLogin/>} />

                
                <Route path='*' element={< Inicio />} />
            </Routes>
        </BrowserRouter>
    )
}