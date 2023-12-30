import { changeName, changeCost, addCar } from "../store";
import { useDispatch, useSelector } from "react-redux";

function CarForm() {
    const dispatch = useDispatch();

    const form = useSelector((state) => {
        return state.form;
    });

    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value));
    };

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addCar({name: form.name, cost: form.cost}))
    }

    return <div className="car-form panel">
        <h4 className="subtitle is-3">Add Car</h4>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
                <div className="field">
                    <label className="label">Name</label>
                    <input className="input is-expanded" value={form.name} onChange={handleNameChange} />
                </div>
            </div>

            <div className="field-group">
                <div className="field">
                    <label className="label">Cost</label>
                    <input type="number" className="input is-expanded" value={form.cost || ''} onChange={handleCostChange} />
                </div>
            </div>

            <div className="field">
                <button className="button is">Submit</button>
            </div>
        </form>
    </div>
}

export default CarForm;