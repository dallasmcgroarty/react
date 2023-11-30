import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import SliderPage from './pages/SliderPage';
import { useState } from 'react';
import DropdownPage from './pages/DropdownPage';

function App() {

    return(
        <div>
            <ButtonPage />
            <AccordionPage />
            <DropdownPage />
            <SliderPage />
        </div>
    )
}

export default App;