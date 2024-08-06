import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
        name: 'filter',
        initialState: 'ALL',
        reducers: {
            filteredAnecdotes(state, action){
                state = 'SET_FILTER'
                return action.payload
            }
        }
}) 

export const {filteredAnecdotes} = filterSlice.actions
export default filterSlice.reducer