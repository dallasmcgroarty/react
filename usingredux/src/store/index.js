import { configureStore } from '@reduxjs/toolkit';
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';

const store = configureStore({
    reducer: {
        songs: songsReducer,
        movies: moviesReducer
    }
});

export { store, addSong, removeSong, addMovie, removeMovie };

//console.log(songsSlice.actions.addSong('new song'));

// const startingState = store.getState();
// console.log(JSON.stringify(startingState));

// store.dispatch(
//     songsSlice.actions.addSong('new song')
// );

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));