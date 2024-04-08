import React from "react"
import './App.css'
import ProfileBasics from "./pages/ProfileDetails/ProfileBasics"
import { Routes, Route } from "react-router-dom"
import AddressDetails from "./pages/ProfileDetails/AddressDetails"
import Business from "./pages/ProfileDetails/Business"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProfileBasics />} />
        <Route path="/address" element={<AddressDetails />} />
        <Route path="/business" element={<Business />} />
      </Routes>


    </>
  )
}

export default App
