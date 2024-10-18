
import './App.css';
import { HeaderMenu } from './componentsChildren/header';
import { CarouselT } from './componentsChildren/carousels';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

<script src="http://localhost:8097"></script>

export function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/home" component={Home} />
                </Switch>
            </Router>

            <div className='flex flex-col h-full w-full'>
                <div className='bg-gray-800 p-4'>
                    <HeaderMenu />
                </div>
            </div>

            <div className='h-[200px] w-full flex flex-grow justify-center items-center'>
                <CarouselT />
            </div>

        </>
    );
}