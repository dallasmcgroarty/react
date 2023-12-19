import { configureStore, createSlice } from '@reduxjs/toolkit';

const songsSlice = createSlice({
    name: 'song',
    initialState: [],
    reducers: {
        // 'song' + '/' + 'addSong' = 'song/addSong' // <-- action type of calling dispatch
        addSong(state, action) {
            // state is not the big state object in the store
            // it is the piece of state managed  by this reducer
            state.push(action.payload);
        },

        removeSong(state, action) {
            return state.filter((song) => {
                return song !== action.payload;
            });

            // const index = state.indexOf(action.payload);
            // state.splice(index,1);
        },
    }
});

const store = configureStore({
    reducer: {
        songs: songsSlice.reducer
    }
});

export { store };
export const { addSong, removeSong } = songsSlice.actions;

//console.log(songsSlice.actions.addSong('new song'));

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(
//     songsSlice.actions.addSong('new song')
// );

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));