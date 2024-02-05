import { useState } from 'react';
import './AnimalShow.css';
import bird from './images/bird.svg';
import cat from './images/cat.svg';
import cow from './images/cow.svg';
import dog from './images/dog.svg';
import gator from './images/gator.svg';
import horse from './images/horse.svg';
import heart from './images/heart.svg';

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse,
    heart
};

function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0);
    const [hovered, setHovered] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    }

    const handleMouseOver = (event) => {
        event.target.style.background = 'yellow';
        setHovered(hovered + 1);
    }

    return (
        <div className='animal' onClick={handleClick} onMouseOver={handleMouseOver}>
            <img className='animal-image' src={svgMap[type]} alt="animal" />
            <img 
                className='heart'
                src={heart} 
                alt="heart"
                style={{ width: 10 + 10 * clicks + 'px' }}
                data-hover={hovered}
            />
        </div>
    )
}

export default AnimalShow;