import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
    name:"root",
    initialState: {
        author_fname: "Author First Name",
        author_lname: "Author Last Name",
        binding: "Binding",
        genre: "Genre",
        isbn: "ISBN",
        length_: "Length",
        quantity: "Quantity",
        title: "Title",
        year_published: "Year Published",
    },
    reducers: {
        setAuthFname: (state, action) => {state.author_fname = action.payload},
        setAuthLname: (state, action) => {state.author_lname = action.payload},
        setBinding: (state, action) => {state.binding = action.payload},
        setGenre: (state, action) => {state.genre = action.payload},
        setIsbn: (state, action) => {state.isbn = action.payload},
        setLen: (state, action) => {state.length_ = action.payload},
        setQuant: (state, action) => {state.quantity = action.payload},
        setTitle: (state, action) => {state.title = action.payload},
        setYear: (state, action) => {state.year_published = action.payload}
    }
})

export const reducer = rootSlice.reducer
export const {setAuthFname, setAuthLname, setBinding, setGenre,
            setIsbn, setLen, setQuant, setTitle, setYear} = rootSlice.actions
