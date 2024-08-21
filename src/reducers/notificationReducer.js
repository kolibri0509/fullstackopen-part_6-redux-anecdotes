import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: null,
    reducers: {
        showNotification(state,action){
            state = action.payload
            return state
        },
        hideNotification(state,action){
            state = action.payload
            return state
        },
    }
})
export const {showNotification, hideNotification } = notificationSlice.actions

export const setNotification = (text, time)=> {
    return dispatch => {
        dispatch(showNotification(text))
        setTimeout(() => dispatch(hideNotification(null)), time*1000)
    }
}
export default notificationSlice.reducer