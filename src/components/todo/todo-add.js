import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './todo-add.css';
import {submit} from "../redux/todoSlice";
import AlertMessage from '../AlertMessage';




const TodoAdd = () => {
  const [todo, setTodo] = useState('');
  const [alert, setAlert] = useState('')
  const dispatch = useDispatch()

  const inpCheck = ()=>{
   if(todo.length===0){
  setAlert(null)
   }
   else{
   setAlert('working')
   }
  }

  const closeTab = ()=>{
setAlert(null)
  }
  return ( 
    <Box className='custom-box_1' component="span"
    sx={{ mx: '4px', transform: 'scale(0.8)',display:"block", marginTop:'160px'}}>
      {alert===null && null}
      {alert=== 'working' &&  < AlertMessage close={closeTab}/>}
    <Card className='custom-card_1' sx={{ minWidth: "50%", minHeight:'40vh'}}>
    <CardContent>
      <Typography sx={{ fontSize: 34, textAlign:'center'}} color="text.secondary" gutterBottom>
        TO DO LIST
      </Typography>  
    </CardContent>
    <CardContent>
    <TextField
    value={todo} onChange={(e)=>setTodo(e.target.value)}
    fullWidth label="Add Your Tasks here" id="fullWidth" variant='standard'/>
    </CardContent>
    <CardActions>
    <Button
    disabled={todo.length===0}
    onClick={
      ()=>{dispatch(submit({todo}));setTodo(''); inpCheck()}}
    sx={{marginLeft:'auto', marginRight:'auto'}} className='custom-button_1' variant="contained">Add</Button>
    </CardActions>
  </Card>
  </Box>
  )
}

export default TodoAdd;