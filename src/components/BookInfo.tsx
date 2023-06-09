import { useState, useEffect } from "react";
import { Card } from "@mui/material";

interface Item {
    isbn: string,
    title: string,
    author_fname: string,
    author_lname: string,
    length_: string,
    genre: string,
    binding: string,
    quantity: string,
    year_published: string,
}

function BookInfo() {
    const [data, setData] = useState<Item[]>([]);


    useEffect(() => {
        fetch(`https://coal-alabaster-venus.glitch.me/api/books`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
          .then(response => response.json())
          .then(data => setData(data));
      }, []);
    
      const bookId = '9780525657743'


  return (

  <>
      {/* {data.map(item => (
        <div key={item.isbn}>
            {item.isbn}  
        </div> 
    ))}; */}

        { bookId }
    </>
    )
}
export default BookInfo