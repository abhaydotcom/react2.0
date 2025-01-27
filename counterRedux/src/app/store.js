import {configureStore} from '@reduxjs/toolkit'
import counterReducer from '../features/counter/countSlice'
export const store= configureStore({
    reducer: {
        counter:counterReducer
    } 
})