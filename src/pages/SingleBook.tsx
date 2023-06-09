import { useState, useEffect } from "react";
import { Card } from "@mui/material"
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import { CardActionArea } from '@mui/material';


interface Item {
    isbn:string,
    title: string,
    author_fname: string,
    author_lname: string,
    length_:string,
    genre:string,
    binding:string,
    quantity:string,
    year_published: string,
}

const exIsbn = ''

function SingleBook() {
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
          .then(data => setData(data.slice(0,4)));
      }, []);

    
  return (
    <div className="m-5 flex flex-row flex-wrap justify-center">
      {data.map(item => (

        <div className="w-1/4">
        <Card key={item.isbn} className="logo-color border-2 dark-border m-2 rounded-lg">

            <CardActionArea>
                <CardContent className="logo-color">
    
                    <h3 className="logo-font light-logo-font 
                    logo-color py-4 text-2xl border-b light-border">
                        {item.title}
                    </h3>
                    
                    <p className="light-logo-font mt-3">
                        {item.author_fname} {item.author_lname}
                    </p>
                <Typography sx={{ mb: 1.5 }}>
                    <p className="light-logo-color">
                        Genre: {item.genre}
                    </p>
                </Typography>
                </CardContent>
            </CardActionArea>

        </Card>
        </div>

      ))}
    </div>
  );
}

export default SingleBook