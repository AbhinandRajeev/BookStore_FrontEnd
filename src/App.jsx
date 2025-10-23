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
        <Route path ='login' element ={<Auth/>}/>
        <Route path ='register' element ={<Auth register/>}/>
        <Route path ='contact' element ={<Contact/>}/>
        <Route path ='allBooks' element ={<AllBooks/>}/>
        <Route path ='viewbook/:id' element ={<Viewbooks/>}/>
        <Route path ='careers' element ={<Careers/>}/>
        <Route path ='profile' element ={<Profile/>}/>
        <Route path ='*' element ={<PageNotFound/>}/>
      </Routes>
    </>
  )
}

export default App