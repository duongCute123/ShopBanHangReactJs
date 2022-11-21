import React from "react";
import { Component } from "react";
import axios from 'axios'
import { UseFetch } from "../Config/ConfigAPI";
import { NavLink } from "react-router-dom";
const Student = ({ sinhvien: { mssv, firstname, lastname } }) => {
    const xoa=()=>{
        axios.get("http://localhost:8000/deleteStuden/"+`${mssv}`)
        .then(console.log("Xoa thanh cong"))
    }
    return (
        <div className="get">
            <tr>
                <td>MSSV</td>
                <td>Ho Sinh Vien</td>
                <td>Ten Sinh Vien</td>
                <td>Orther</td>
            </tr>
            <tr>
                <td>{mssv}</td>
                <td>{firstname}</td>
                <td>{lastname}</td>
                <td>
                   <NavLink to={'/edit/'+mssv} className="btn btn-primary">EditPage</NavLink>  
                    <input type="button" value="Xoa" onClick={xoa} className="btn btn-primary" />
                </td>
            </tr>
        </div>
    )
}
const CallSinhVien = () => {
    const url = "http://localhost:8000/getStudent"
    const data = UseFetch(url)
    return (
        <div className="callsinhvien">
            <h1>Số sinh viên lấy đuoc la :{data.length}</h1>
            <table className="table">
                {
                    data.map((sinhvien) => (
                        <Student sinhvien={sinhvien} />
                    ))
                }
            </table>
        </div>
    )
}
export default CallSinhVien