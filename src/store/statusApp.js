import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "statusApp",
    initialState: {
        tableSatus: 1, 
        modalSatus: false
    },
    reducers: {
        changeStatusTable: (state) => ({
            ...state,
            tableSatus: +!state.tableSatus
        }),
        changeStatusModal: (state, action) => ({
            ...state,
            modalSatus: action.payload
        }),
        
    }
});

export const { changeStatusTable, changeStatusModal} = slice.actions;

export const selectTableSatus = state => state.statusApp.tableSatus;
export const selectModalSatus = state => state.statusApp.modalSatus;

export default slice.reducer;