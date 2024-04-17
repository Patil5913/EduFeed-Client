import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
export default function App() {
  return (
    <main className='md:h-screen flex flex-col justify-between'>
      
      <Header />
      <Outlet/>
      <Footer />
     
    </main>
  )
}