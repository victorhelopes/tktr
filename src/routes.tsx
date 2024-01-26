import { Route, Routes } from 'react-router-dom'

import { Login } from './pages/Login';

export default function PagesRoutes(){
    return(
        <Routes>
            <Route  path = "/Login" element={<Login/>}/>
        </Routes>
    );
}