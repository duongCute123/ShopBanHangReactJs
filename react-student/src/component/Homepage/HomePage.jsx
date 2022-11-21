import React from "react";
import { Component } from "react";
import AddSinhVien from "../AddSinhVien/AddStudent";
import EditPage from "../UpdateSinhVien/EditSinhVien";
import CallSinhVien from "../GetApi/GetStudent";
import {
    BrowserRouter, Routes, Router,
    Route,
    Switch,
    NavLink,
    Redirect,
} from 'react-router-dom'
const Navbar = () => (
    <ul>
        <li>
            <NavLink to='/home'>HomePage</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
            <NavLink to='/suport'>Suport</NavLink>
        </li>
        {/* <li>
            <NavLink to='/login'>Login</NavLink>
        </li> */}
    </ul>
)
const Navs = () => {
    return (
        <div className="rouetr">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<CallSinhVien />} />
                    <Route path="/contact" element={<AddSinhVien />} />
                    <Route path="/suport" element={<AddSinhVien />} />
                    <Route path="/login" element={<AddSinhVien />} />
                    <Route path="/edit/:mssv" element={<EditPage />} />
                    
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Navs