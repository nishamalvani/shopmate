import React from 'react'
import{Routes,Route} from "react-router-dom"
import{ Home,CartPage} from "../pages";
export const AllRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/Cart' element={<CartPage/>}/>
  </Routes>
  )
}
