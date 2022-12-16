import { createSlice } from '@reduxjs/toolkit'
 
const { actions, reducer } = createSlice({
    name: 'login',
    initialState: false,
    reducers: {
        toggle: (state) => !state,
        set: (state, action) => action.payload
    },
})

export const { set, toggle } = actions

export default reducer