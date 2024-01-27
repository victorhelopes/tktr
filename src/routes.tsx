import { Route, Routes } from 'react-router-dom'

import { Login } from './pages/Login';
import { Feed } from './pages/Feed';

export default function PagesRoutes(){
    return(
        <Routes>
            <Route  path = "/Login" element={<Login/>}/>
            <Route  path = "/Feed" element={<Feed/>}/>
        </Routes>
    );
}