import Sidebar from './components/Sidebar';
import ButtonPage from './pages/ButtonPage';
import AccordionPage from './pages/AccordionPage';
import SliderPage from './pages/SliderPage';
import ModalPage from './pages/ModalPage';
import DropdownPage from './pages/DropdownPage';
import TablePage from './pages/TablePage';
import Route from './components/Route';
import CounterPage from './pages/CounterPage';

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
                <Route path="/modal">
                    <ModalPage />
                </Route>
                <Route path="/table">
                    <TablePage />
                </Route>
                <Route path="/counter">
                    <CounterPage initialCount={0} />
                </Route>
            </div>
        </div>
    )
}

export default App;