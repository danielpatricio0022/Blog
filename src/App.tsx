import '/src/global.css';
import { HeaderMenu } from './componentsChildren/header';

import { Route, Routes, Navigate, useLocation } from "react-router-dom";
import { Home } from './components/ui/home'; 

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
{/* 
<div className='h-[200px] w-full flex flex-grow justify-center items-center'>
</div> */}
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}
