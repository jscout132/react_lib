import { useState, useEffect } from "react";


import { Link } from "react-router-dom";
import { Card } from "@mui/material"
import { CardActionArea } from '@mui/material';
import { CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';


interface Item {
    isbn:string,
    title: string,
    author_fname: string,
    author_lname: string,
    length_:number,
    genre:string,
    binding:string,
    quantity:number,
    year_published: number,
}

function FeaturedBook() {
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
          .then(data => setData(data.slice(-1)));
      }, []);


  return (
    <div className="m-1 flex flex-row flex-wrap justify-center">
      {data.map(item => (

        <div className="">
        <Card key={item.isbn} className="logo-color border-2 dark-border m-2 rounded-lg">

            <CardActionArea >
                <CardContent className="logo-color">
                    <Typography className="logo-font light-logo-font 
                    logo-color py-2 text-2xl border-b light-border">
                        {item.title}
                    </Typography>

                    <Typography className="light-logo-font">
                        {item.author_fname} {item.author_lname}

                    </Typography>

                <Typography sx={{ mb: 1.5 }} className="light-logo-color">
                        Genre: { item.genre }
                </Typography>
                    <Link to={`/book/${item.isbn}`} className="logo-light dark-logo-color rounded-md p-2">
                        See Book
                    </Link>
                
                </CardContent>
            </CardActionArea>


        </Card>
        </div>

      ))}
    </div>
  );
}

export default FeaturedBook