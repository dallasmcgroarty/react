import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

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
    },
    extraReducers(builder) {
        // watch for when resetMovies action is dispatched and reset this state
        // builder.addCase(moviesSlice.actions.resetMovies, (state, action) => {
        //     return [];
        // });
        builder.addCase(reset, (state, action) => {
            return [];
        })
    }
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;