import './App.css';
import { HeaderMenu } from './componentsChildren/header';
import { CarouselT } from './componentsChildren/carousels';
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

                    <div className='h-[200px] w-full flex flex-grow justify-center items-center'>
                        <CarouselT />
                    </div>
                </div>
            )}

            <Routes>
                <Route path="/Home" element={<Home />} />
            </Routes>
        </>
    );
}
