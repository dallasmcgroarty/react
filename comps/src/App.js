import Sidebar from './components/Sidebar';
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import SliderPage from './pages/SliderPage';
import { useState } from 'react';
import DropdownPage from './pages/DropdownPage';
import Route from './components/Route';

function App() {

    return(
        <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
            <Sidebar />
            <div className='col-span-5'>
                <Route path="/accordion">
                    <AccordionPage />
                </Route>
                <Route path="/">
                    <DropdownPage />
                </Route>
                <Route path="/buttons">
                    <ButtonPage />
                </Route>
                <Route path="/slider">
                    <SliderPage />
                </Route>
            </div>
        </div>
    )
}

export default App;