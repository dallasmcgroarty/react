import Button from '../components/Button';
import { GoBell, GoCloud, GoDatabase } from 'react-icons/go';

function ButtonPage() {
    const handleClick = () => {
        
    }

    return(
        <div>
            <div>
                <Button success rounded outline className='mb-5' onClick={handleClick}>
                    <GoBell /> 
                    Text here
                </Button>
            </div>
            <div>
                <Button danger outline onMouseEnter={handleClick}>
                    <GoCloud />
                    Buy now
                </Button>
            </div>
            <div>
                <Button warning onMouseLeave={handleClick}>
                    <GoDatabase />
                    Click me
                </Button>
            </div>
            <div>
                <Button secondary outline>Show more</Button>
            </div>
            <div>
                <Button primary rounded>Something</Button>
            </div>
        </div>
    )
}

export default ButtonPage;