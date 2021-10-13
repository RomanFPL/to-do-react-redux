import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: "itemList",
    initialState: {
        notes: [
            {
                id: "rmsd7skah",
                name: "Pet the cat",
                date: "2021-10-01",
                category: "Random Thought",
                content: "Find a cat, catch it, pet it",
                dates: "",
                status: 1,
            },
            {
                id: "dn9jrtz7",
                name: "Feed ducks",
                date: "2021-09-01",
                category: "Random Thought",
                content: "Take some breadcrumbs, find ducks, feed them",
                dates: "",
                status: 1,
            },
            {
                id: "1caw9hq9i",
                name: "Pick raspberry",
                date: "2021-08-01",
                category: "Task",
                content: "Go to the garden, and pick it",
                dates: "",
                status: 1,
            },
            {
                id: "5fhvgj61f",
                name: "Build the house",
                date: "2021-07-01",
                category: "Task",
                content: "Call to the builder teem in 10/10/2021",
                dates: "10/10/2021",
                status: 1,
            },
            {
                id: "mxof3uoni",
                name: "Visit a doctor",
                date: "2021-08-20",
                category: "Task",
                content: "Visit a doctor. The dog was powerfull.",
                dates: "",
                status: 0,
            },
            {
                id: "699161at",
                name: "Kick naughty dog",
                date: "2021-08-19",
                category: "Random Thought",
                content: "Find and kick it",
                dates: "",
                status: 0,
            },
        ]
    },
    reducers: {
        addNewRow: (state, action) => ({
            ...state,
            notes: [...state.notes, action.payload]
        }),
        changeSatusArchive: (state, action) => ({
            ...state,
            notes: [...state.notes.map(row => row.id === action.payload ? Object.assign({}, row, {status: +!row.status} ) : row )
            ]
        }),
        deleteRowById: (state, action) => deleteNote(state, action)
    }
})

const deleteNote = (state, action) => {
    const spliced = [...state.notes]
    spliced.splice(state.notes.findIndex(item => item.id === action.payload),1);
    return{...state,
        notes: spliced,
    }

};

export const { addNewRow, changeSatusArchive, deleteRowById } = slice.actions;

export const selectItemList = state => state.itemList.notes

export default slice.reducer;