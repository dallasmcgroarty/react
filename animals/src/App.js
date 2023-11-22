import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

function getRandomAnimal() {
    const animals = ['bird','cat','cow','dog','gator','horse'];

    return animals[(Math.floor(Math.random() * animals.length))];
}

function App() {
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        // never modify a piece of state
        setAnimals([...animals, getRandomAnimal()]);
    };

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index} />
    })
    
    return (
        <div className='app'>
            <button className='add-button' onClick={handleClick}>Add Animal</button>
            <div className='animals'>
                {renderedAnimals}
            </div>
        </div>
    )
}

export default App;