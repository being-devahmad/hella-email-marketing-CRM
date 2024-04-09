import React from "react"
import './App.css'
import ProfileBasics from "./pages/ProfileDetails/ProfileBasics"
import { Routes, Route } from "react-router-dom"
import AddressDetails from "./pages/ProfileDetails/AddressDetails"
import Business from "./pages/ProfileDetails/Business"
import PhoneDetails from "./pages/ProfileDetails/PhoneDetails"
import Hello from "./pages/ProfileDetails/Hello"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<ProfileBasics />} />
        <Route path="/address" element={<AddressDetails />} />
        <Route path="/business" element={<Business />} />
        <Route path="/phone" element={<PhoneDetails />} />
        <Route path="/hello" element={<Hello />} />
      </Routes>


    </>
  )
}

export default App
