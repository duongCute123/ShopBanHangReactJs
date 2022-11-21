import CallSinhVien from "./component/GetApi/GetStudent"
import {
  BrowserRouter, Routes, Router,
  Route,
  Switch,
  NavLink,
  Redirect,
} from 'react-router-dom'
import EditPage from "./component/UpdateSinhVien/EditSinhVien"
import AddSinhVien from "./component/AddSinhVien/AddStudent"
import NavBar from "./component/Homepage/HomePage"
const App = () => {
  return (
    <div className="app">
      <NavBar />
    </div>
  )
}
export default App