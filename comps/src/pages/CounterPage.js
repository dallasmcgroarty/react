//import useCounter from '../hooks/use-counter';
import { produce } from 'immer';
import Button from '../components/Button';
import { useReducer } from 'react';
import Panel from '../components/Panel';

const INCREMENT = 'increment';
const DECREMENT = 'decrement';
const UPDATE_LOT_VALUE = 'update_lot_value';
const SUBMIT = 'submit';

const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            };
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        case UPDATE_LOT_VALUE:
            return {
                ...state,
                lot: action.payload
            };
        case SUBMIT:
            return {
                ...state,
                count: state.count + state.lot,
                lot: 0
            }
        default:
            return state; 
    };
};

function CounterPage({ initialCount }) {
    //const { count, increment, decrement } = useCounter(initialCount);
    //const [count, setCount] = useState(initialCount);
    //const [lot, setLot] = useState(0);
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        lot: 0
    });

    const increment = () => {
        dispatch({ type: INCREMENT});
    }

    const decrement = () => {
        dispatch({ type: DECREMENT});
    }

    const updateLotValue = (event) => {
        dispatch({ type: UPDATE_LOT_VALUE, payload: Number(event.target.value) });
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch({ type: SUBMIT });
    }

    return (
        <Panel className="m-3">
            <h1 className='text-lg'>Count is { state.count }</h1>
            <div className='flex flex-row'>
                <Button onClick={increment}>Add</Button>
                <Button onClick={decrement}>Minus</Button>
            </div>
            
            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input type="number" className='p-1 m-3 bg-gray-50 border-gray-300' onChange={updateLotValue} value={state.lot} />
                <Button>Add it</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;