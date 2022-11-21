import React from "react";
import { Component } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const EditPage = () => {
    var {mssv}=useParams()
    console.log(mssv);
    const list = {
        firstname: "",
        lastname: ""
    }
    const [forms, setForms] = useState(list)
    useEffect(()=>{
        axios.get('http://localhost:8000/seach/'+mssv)
        .then(res=>{
            setForms(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    const changes = (e) => {
        const { name, value } = e.target
        setForms({ ...forms, [name]: value })
    }
    const submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/edit',+mssv,forms)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    const { firstname, lastname } = forms
    console.log(forms);
    return (
        <div className="edirpage">
            <form action="" method="post">
                <div className="form-group">
                    <label htmlFor="firstname">Nhập họ tên cua bạn vào nhá</label> <br />
                    <input type="text" className="form-control" placeholder="Vui lòng nhập tên cua bạn nhá" name="firstname" value={firstname} onChange={changes} id="" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Nhập tên cua bạn vào nhá</label> <br />
                    <input type="text" className="form-control" placeholder="Vui lòng nhập tên cua bạn nhá" name="lastname" value={lastname} onChange={changes} id="" />
                </div>
                <input type="submit" value="AddSinhVien" onClick={submit} />

            </form>
        </div>
    )
}
export default EditPage