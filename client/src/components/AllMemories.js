import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Toolbar, Container } from '@mui/material';
import {PhotoCamera} from '@mui/icons-material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import App from '../App';







const AllMemories = (props) => {
    
    const[memoryList, setMemoryList] = useState([]);
   

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/memories`)
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                setMemoryList(res.data);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, [])


    const deleteMemory = (idFromBelow) => {
        axios.delete(`http://localhost:8000/api/memories/${idFromBelow}`)
            .then((res)=>{
                console.log(res)
                console.log(res.data)
                setMemoryList(memoryList.filter(memory=>memory._id !== idFromBelow))
            })
            .catch((err)=>{
                console.log("Delete attempt failed")
                console.log(err);
            })
    }

    return(
        <>
           <CssBaseline />
           <AppBar position='relative'>
               <Toolbar>
                   <PhotoCamera />
                   <Typography variant='h6'>Photo Album</Typography>
               </Toolbar>
           </AppBar>
           <main>
               <div>
                   <Container maxWidth="sm">
                        <Typography variant='h2' align='center' color="textPrimary" gutterBottom>Memories</Typography>
                        <Typography variant='h5' align='center' color="textSecondary" paragraph>Memories are the architecture of our identity and photos are our story</Typography>
                        <div>
                            <Grid justify="center">
                                <Grid item style={{marginBottom: "1em"}}>
                                    <Button variant='contained' color='primary'>
                                        <Link style={{color: "white", textDecoration: "none"}} to={"/new"}>Add a memory</Link>
                                    </Button>
                                </Grid>
                               
                            </Grid>
                        </div>
                   </Container>
               </div>

               
                    
                    {/* Material ui grid system is composed of 12 columns. If you want 3 columns, it would be md={4} (12/4 = 3), If you want 2, it would be md={6}. (12/6 = 2) */}

                    {/* md, sm represents the size of the screen. xs and sm = mobile; md and lg represents desktop and tablet sizes */}
                
                <div>
                    <Grid container spacing={4}>
                    {
                        memoryList.map((memory, i)=>{
                            return(
                                <Grid key={i} item xs={12} sm={6} md={4}>
                                    <Paper>
                                        <Typography variant="h4">{memory.title}</Typography>
                                        <img src={memory.image}></img>
                                        <div style={{padding: "1em"}}>
                                            <Link style={{color: "white", textDecoration: "none"}} to={`/memory/${memory._id}`}><Button variant='contained' color='primary'>View</Button></Link>
                                            <Button onClick={()=> deleteMemory(memory._id)} variant='contained' color='error'>Delete</Button>
                                        </div>
                                    
                                    </Paper>
                                </Grid>
                            )
                        })
                    }
                    </Grid>
                </div>
                
                   
                   

              
           </main>

          
        </>
    )
}

export default AllMemories;