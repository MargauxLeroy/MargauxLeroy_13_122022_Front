import { configureStore } from '@reduxjs/toolkit'

import loginReducer from './slices/login'
 
export const store = configureStore({
    reducer: {
        login: loginReducer
    },
})