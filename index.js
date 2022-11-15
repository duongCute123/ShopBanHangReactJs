var express = require('express')
var cors = require('cors')
var bodyParse = require("body-parser")
var mysql = require('mysql')
var app = express()
//Kết nối với localhost
app.use(cors())
//Part dữ liệu từ client gửi về
app.use(bodyParse.urlencoded({ extended: true }))
app.use(bodyParse.json())
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'khanhly1',
    database: 'SinhVien'
})
conn.connect(err => {
    if (err) throw err
    console.log("Kết nối cơ sở dữ liệu thành công nhá!!");
})
//Chạy câu lệnh hello nhá mn ơi
app.get("/hello", function (req, res) {
    res.json("Hello bạn dương nhá hì")
})
//Lấy danh sách sinh viên nhá
app.get("/getStudent", function (req, res) {
    var sql = "select * from sinhviens"
    conn.query(sql, function (err, sinhvien) {
        if (err) {
            res.status(400).json("Lỗi lấy dữ liệu nhé")
        } else {
            res.status(200).json(sinhvien)
        }
    })
})
//Thêm sinh viên nhá bạn ơi
app.post("/addStudent", function (req, res) {
    var data = req.body
    console.log(data);
    var sql = "insert into sinhviens values" + data
    conn.query(sql, function (errr, sinhvien) {
        //Kiem tra nếu dữ liệu sai
        if (errr) {
            res.status(400).json("Lỗi thêm sinh viên nhá")
        } else {
            res.status(200).json(sinhvien)
        }
    })
})
//Tìm sinh viên nhá
app.get("/seach/:mssv", function (req, res) {
    var mssv = req.params.mssv
    console.log(mssv);
    var sql = 'select * from sinhviens where mssv=' + mssv
    conn.query(sql, function (err, sinhvien) {
        //Kiem tra neu loi nhas
        if (err) {
            res.status(400).json("Loi tim kiem du lieu nha")
        } else {
            res.status(200).json(sinhvien)
        }
    })
})
//Tim sinh vien va cap nhat lai
app.post("/edit", function (req, res) {
    var sql = `update sinhviens set firstname=${req.params.firstname},lastname=${req.params.lastname} where mssv=${req.params.mssv}`
    conn.query(sql, function (errr, sinhvien) {
        if (errr) {
            res.status(400).json("Loi cap nhat du lieu nha")
        } else {
            res.status(200).json(sinhvien)
        }
    })
})
//Xoa sinh vien theo id nha
app.get("/deleteStuden/:mssv", function (req, res) {
    var mssv = req.params.mssv
    console.log(mssv);
    var sql = "delete from sinhviens where mssv=" + mssv
    conn.query(sql, function (errr, sinhvien) {
        if (errr) {
            res.status(400).json("Loi xoa sinh vien")
            console.log(errr);
        } else {
            res.status(200).json("Xoa thanh cong nha" + `${mssv}`)
        }
    })
})
//Cổng chạy localhost nhé
var serrvice = app.listen(8000, function (host, port) {
    var host = serrvice.address().address
    var port = serrvice.address().port
    console.log("Chạy thành công localhost nhé !!!", host, port);
})