import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "statusApp",
    initialState: {
        tableSatus: 1, 
        modalSatus: false,
        selectedRow: {}
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
        setSelectedRow: (state, action) => ({
            ...state,
            selectedRow: action.payload
        }),
        
    }
});

export const { changeStatusTable, changeStatusModal, setSelectedRow} = slice.actions;

export const selectTableSatus = state => state.statusApp.tableSatus;
export const selectModalSatus = state => state.statusApp.modalSatus;
export const selectCurentRow = state => state.statusApp.selectedRow;

export default slice.reducer;