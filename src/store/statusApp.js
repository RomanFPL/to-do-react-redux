import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "statusApp",
    initialState: {
        tableSatus: 1
    },
    reducers: {
        changeStatusTable: (state) => ({
            ...state,
            tableSatus: +!state.tableSatus
        })
    }
});

export const { changeStatusTable } = slice.actions;

export const selectTableSatus = state => state.statusApp.tableSatus;

export default slice.reducer;