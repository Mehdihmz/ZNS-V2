import React from 'react'
import { Home, Profile } from '../Pages'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import UserContext from '../Context/UserContext'
import AddContact from '../Pages/Pannel/Contacts/Components/NewContact/AddContant'
import Team from '../Pages/Home/team'
const Router = () => {
    let status = localStorage.getItem('session')
    return (
        <UserContext>
            <BrowserRouter>
                <Routes>
                    <Route path="/profile" element={<Profile />} />
                    <Route
                        path="/"
                        element={status ? <Navigate to="/profile" /> : <Home />}
                    />
                    <Route
                        path="/profile"
                        element={status ? <Profile /> : <Navigate to="/" />}
                    />
                    <Route path="/AddContact" element={<AddContact />} />
                    <Route path="/team" element={<Team />} />
                </Routes>
            </BrowserRouter>
        </UserContext>
    )
}

export default Router
