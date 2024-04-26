import React from "react"
import './App.css'
import ProfileBasics from "./pages/ProfileDetails/ProfileBasics"
import { Routes, Route } from "react-router-dom"
import AddressDetails from "./pages/ProfileDetails/AddressDetails"
import Business from "./pages/ProfileDetails/Business"
import PhoneDetails from "./pages/ProfileDetails/PhoneDetails"
import SignUp from "./pages/ProfileDetails/Signup"
import Home from "./pages/Home/Home"
import EmailVerification from "./pages/ProfileDetails/EmailVerification"
import PhoneVerification from "./pages/ProfileDetails/PhoneVerification"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verifyEmail" element={<EmailVerification />} />
        <Route path="/profile" element={<ProfileBasics />} />
        <Route path="/address" element={<AddressDetails />} />
        <Route path="/business" element={<Business />} />
        <Route path="/phone" element={<PhoneDetails />} />
        <Route path="/verifyPhone" element={<PhoneVerification />} />
      </Routes>
    </>
  )
}

export default App
