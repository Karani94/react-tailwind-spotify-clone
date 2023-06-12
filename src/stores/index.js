import { configureStore } from "@reduxjs/toolkit";
import playerReducer from './player'

export default configureStore ({
    reducer: {
        player: playerReducer
    }
})