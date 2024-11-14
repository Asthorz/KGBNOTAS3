import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DashBoard from '../dashboard/page/home'


export default function Autenticado() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/DashBoard' element={< DashBoard />} />
                
                <Route path='*' element={< DashBoard />} />
            </Routes>
        </BrowserRouter>
    )
}