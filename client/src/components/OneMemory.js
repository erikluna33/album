import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import moment from "moment";
import { Typography,Card, CardActionArea} from '@mui/material';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CssBaseline, AppBar, Toolbar,Container} from '@mui/material';
import {PhotoCamera} from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';

const OneMemory = () => {

    const {id} = useParams();
    const [memory, setMemory] = useState({});

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/memories/${id}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setMemory(res.data)
            })
            .catch((err)=>{
                console.log(err);
            })
    },[id])


    return(
        <div>
            

            <header>
            <CssBaseline />
           <AppBar position='relative'>
               <Toolbar>
                   <PhotoCamera />
                   <Typography variant='h6'>Photo Album</Typography>
                   <Link to={"/"}><HomeIcon style={{position:"absolute", right: "20", bottom: "20", color:"white"}} /></Link>
                   
               </Toolbar>
           </AppBar>
            </header>
            

<Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {memory.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
            {moment(memory.createdAt).format("MMMM Do YYYY")}{" "}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary">
            {memory.location}, {memory.continentLocation}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {memory.summary}
            </Typography>
            <Button variant='contained' color='primary'>
               <Link style={{color: "white", textDecoration: "none"}} to={`/memory/edit/${id}`}>Edit Memory</Link>
            </Button>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 350, display: { xs: 'none', sm: 'block' } }}
            image={memory.image}
          />
        </Card>
      </CardActionArea>
    </Grid>


            
        </div>
    )
}

export default OneMemory;