import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetData } from "../custom-hooks/FetchData";

import Module from "./Module";
import { server_calls } from "../api/server";

const columns: GridColDef[] = [
    { field: 'title', width: 300, headerName: "Title"  },
    { field: 'author_fname', headerName: "Author First Name", flex: 1 },
    { field: 'author_lname', headerName: "Author Last Name", flex: 1 },
    { field: 'length_', headerName: "Length", flex: 1 },
    { field: 'genre', headerName: "Genre", flex: 1 },
    { field: 'year_published', headerName: "Year Published", flex: 1 },
    { field: 'isbn', headerName: "ISBN", flex: 1},
]

function BookTable() {
    const [open, setOpen] = useState(false);

    const {bookData, getData} = useGetData();

    const [selectionModel, setSelectionModel] = useState<string[]>([]);

    const handleOpen = () => {
      setOpen(true)
    };

    const handleClose = () => {
      setOpen(false)
    };

    const deleteData = () => {
      server_calls.delete(selectionModel[0])
      getData();
      console.log(`Selection model: ${selectionModel[0]}`)
      setTimeout(()=>{ window.location.reload() }, 1000)
    }
    
  return (
    <>
    <Module
      id={selectionModel}
      open={open}
      onClose={handleClose}/>
      <div className="flex flex-row mt-5 justify-center">
        <button onClick={ handleOpen } 
          className="p-2 mx-4 logo-color light-border light-logo-font rounded">
            Add Book
        </button>
        {/* might need to change this to an anon arrow function*/}
        <button onClick={ handleOpen } 
          className="p-2 mx-4 logo-color light-border light-logo-font rounded">
            Update Book Info
        </button>
        <button onClick={ deleteData } 
          className="p-2 mx-4 logo-color light-border light-logo-font rounded">
            Delete Book
        </button>
      </div>

         <div className={open ? "hidden": "container mx-10 my-5"}
            style={{height: 500, width:'100%'}}>
                <h2 className="p-3 logo-color light-logo-font text-xl">Available Books</h2>
                <DataGrid 
                    rows={bookData} 
                    getRowId={(row) => row.isbn}
                    columns={columns} 
                    checkboxSelection={true} 
                    onRowSelectionModelChange={ (item:any) =>{
                    setSelectionModel(item)
                }}

                />
            
        </div>    
    </>
  );
}

export default BookTable