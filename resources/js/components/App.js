import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";

import Register from './Frontend/Auth/Register'; 
import Login from './Frontend/Auth/Login';

import Dashboard from "./Superuser/Dashboard";
import Customers from "./Superuser/pages/Customers";
import Minutes from "./Superuser/pages/Minutes";
import Users from "./Superuser/pages/Users";
import AddNewUser from "./Superuser/pages/AddNewUser";

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.post['Accept'] = "application/json";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function(config) {
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path={"/"} element={<Login />} />
                    <Route path={"/register"} element={<Register />} />

                    {/* <Route path="/login">
                        {localStorage.getItem('auth_token') ? <Navigate to='/' /> : <Login />}
                    </Route>
                    <Route path="/register">
                        {localStorage.getItem('auth_token') ? <Navigate to='/' /> : <Register />}
                    </Route> */}

                    <Route path={"/dashboard"} element={<ProtectedRoute component={Dashboard} />} />
                    <Route path={"/users"} element={<ProtectedRoute component={Users} />} />
                    <Route path={"/add-new-user"} element={<ProtectedRoute component={AddNewUser} />} />
                    <Route path={"/customers"} element={<ProtectedRoute component={Customers} />} />
                    <Route path={"/minutes"} element={<ProtectedRoute component={Minutes} />} />
                </Routes>
            </BrowserRouter>
        </div>    
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
