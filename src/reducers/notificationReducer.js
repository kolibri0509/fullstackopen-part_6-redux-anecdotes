import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: 'initialState',
    reducers: {
        showNotification(state){
            return state
        }
    }
})
export const {showNotification} = notificationSlice.actions
export default notificationSlice.reducer