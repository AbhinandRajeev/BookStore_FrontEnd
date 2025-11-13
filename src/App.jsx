import { Button, Card } from "flowbite-react";
import { FaBookOpen } from "react-icons/fa6";
import { Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Home from "./user/pages/Home";
import Auth from "./pages/Auth";
import AllBooks from "./user/pages/AllBooks";
import Viewbooks from "./user/pages/Viewbooks";
import Careers from "./user/pages/Careers";
import Profile from "./user/pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import Contact from "./user/pages/Contact";
import { useEffect, useState } from "react";
import Preloader from "./components/Preloader";
import AdminHome from "./admin/pages/AdminHome";
import AdminCareers from "./admin/pages/AdminCareers";
import AdminBooks from "./admin/pages/AdminBooks";
import AdminSettings from "./admin/pages/AdminSettings";
import Paymenterror from "./user/pages//Paymenterror";
import Paymentsuccess from "./user/pages/Paymentsuccess";


function App() {

  const[isLoading,setIsLoading] = useState(false)

  useEffect(() =>{
    setTimeout(() =>{
      setIsLoading(true)
    },4000)
  })

  return (
    <>
      <Routes>
        <Route path ='' element ={isLoading?<Home/> : <Preloader/>}/>
        <Route path="/login" element={<Auth register={false} />} />
        <Route path="/register" element={<Auth register={true} />} />
        <Route path ='contact' element ={<Contact/>}/>
        <Route path ='allBooks' element ={<AllBooks/>}/>
        <Route path ='viewbooks/:id' element ={<Viewbooks/>}/>
        <Route path ='careers' element ={<Careers/>}/>
        <Route path ='profile' element ={<Profile/>}/>
        <Route path='/payment-success' element={<Paymentsuccess />} />
        <Route path='/payment-error' element={<Paymenterror />} />

        <Route path='/admin-home' element={<AdminHome/>} />
         <Route path='/admin-books' element={<AdminBooks />} />
        <Route path='/admin-career' element={<AdminCareers />} />
        <Route path='/admin-settings' element={<AdminSettings />} />
  
        <Route path ='*' element ={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App