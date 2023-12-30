import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name:'form',
    initialState: {
        searchTerm: '',
        data: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
        
        addCar(state, action) {
            // assume action.payload is a object
            state.data.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            });
        },

        removeCar(state, action) {
            // payload = id
            const updated = state.data.filter((car) => {
                return car.id !== action.payload;
            })

            state.data = updated;
        }
    }
});

export const {
    changeSearchTerm, addCar, removeCar
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;