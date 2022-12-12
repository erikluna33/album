import React, {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import axios from 'axios';
import { CssBaseline, AppBar, Toolbar, Typography,Container} from '@mui/material';
import {PhotoCamera} from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Button from "@mui/material/Button";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import HomeIcon from '@mui/icons-material/Home';





const NewMemories = () => {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [summary, setSummary] = useState("");
    const [location, setLocation] = useState("");
    const [continentLocation, setContinentLocation] = useState("");
    

    const navigate = useNavigate();



    const submitHandler = (e) => {
        e.preventDefault();

        axios.post("http://localhost:8000/api/memories",
        {
            title,
            image,
            summary,
            location,
            continentLocation
        })
            .then((res)=>{
                console.log("Success in creating memory");
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err)=>{
                console.log("Problem in creating memory.");
                console.log(err);
            })
    }



    return(
        <div>
            <main>
            <CssBaseline />
           <AppBar position='relative'>
               <Toolbar>
                   <PhotoCamera />
                   <Typography variant='h6'>Photo Album</Typography>
                   <Link to={"/"}><HomeIcon style={{position:"absolute", right: "20", bottom: "20", color:"white"}} /></Link>
                   
               </Toolbar>
           </AppBar>


           <div>
                   <Container maxWidth="sm">
                        <Typography style={{margin: ".5em"}} variant='h2' align='center' color="textPrimary" gutterBottom>Add Memories</Typography>
                        
                   </Container>
               </div>
            
            

            
                <Container>
                    <form autoComplete='off' onSubmit={submitHandler}>
                        <TextField
                        onChange={(e)=> setTitle(e.target.value)}
                        label="Title"
                        variant='outlined'
                        fullWidth
                        required 
                        margin='normal'
                        />

                        <TextField
                        onChange={(e)=> setImage(e.target.value)}
                        label="Image"
                        variant='outlined'
                        fullWidth
                        required
                        margin='normal'
                        />

                        <TextField
                        onChange={(e)=> setLocation(e.target.value)}
                        label="Location"
                        variant='outlined'
                        fullWidth
                        required 
                        margin='normal'
                        />


                        <TextField
                        onChange={(e)=> setSummary(e.target.value)}
                        label="Summary"
                        variant='outlined'
                        fullWidth
                        required 
                        multiline
                        rows={4}
                        margin='normal'
                        />

                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Continent Location</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={continentLocation}
                            label="Continent Location"
                            onChange={(e)=> setContinentLocation(e.target.value)}
                            >
                            <MenuItem value="Asia">Asia</MenuItem>
                            <MenuItem value="North America">North America</MenuItem>
                            <MenuItem value="South America">South America</MenuItem>
                            <MenuItem value="Africa">Africa</MenuItem>
                            <MenuItem value="Europe">Europe</MenuItem>
                            <MenuItem value="Antartica">Antartica</MenuItem>
                            <MenuItem value="Oceania">Oceania</MenuItem>
                        </Select>
                            </FormControl>
                        </Box>


                        

                        <Button
                        style={{margin: "1em"}}
                        variant="contained"
                        type='submit'
                        endIcon={<ArrowForwardIosIcon />}
                        >Submit</Button>
                    </form>
                </Container>
           
            </main>
        </div>
    )
}

export default NewMemories;