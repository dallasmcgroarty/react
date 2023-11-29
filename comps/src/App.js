import Button from './Button';

function App() {
    return(
        <div>
            <div>
                <Button success rounded outline>Text here</Button>
            </div>
            <div>
                <Button danger outline>Buy now</Button>
            </div>
            <div>
                <Button warning>Click me</Button>
            </div>
            <div>
                <Button secondary outline>Show more</Button>
            </div>
            <div>
                <Button seconday rounded>Something</Button>
            </div>
        </div>
    )
}

export default App;