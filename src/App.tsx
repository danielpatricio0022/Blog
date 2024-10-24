import '/src/global.css';
import { HeaderMenu } from './componentsChildren/header';

import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Home } from './components/ui/homepage'; 
import { Edit } from './componentsChildren/editpost';
import { Perfil } from './componentsChildren/routePerfil';

import ComplexGrid from './componentsChildren/grid';


export function App() {
    const location = useLocation(); 

    return (
        <>
            {location.pathname !== "/Home" && (
                <div className='flex flex-col h-full w-full'>
                    <div className='bg-gray-800 p-4'>
                        <HeaderMenu />
                    </div>
                </div>
            )}

            <Routes>
                <Route path="/Edit/:postId" element={<Edit />} /> 
                <Route path="/" element={<ComplexGrid/>} />
                
                <Route path="/Home" element={<Home />} />
                <Route path="/Profile" element={<Perfil/>} />
            </Routes>
        </>
    );
}
