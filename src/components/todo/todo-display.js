import React, {memo} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useSelector,useDispatch } from 'react-redux';
import {deleteArray} from "../redux/todoSlice"
import { Typography } from '@mui/material';

const TodoDisplay = () => {
const {todo} = useSelector((state)=>state.todo)
console.log(todo);
const dispatch = useDispatch()

const headingStyle = {
  textAlign:"center",
  marginTop: "140px"
};
const divStyle = {
  marginTop:'140px'
}
  return (
    <div style={divStyle}>
      {todo.length===0 ? <Typography variant="h3" gutterBottom style={headingStyle}>
        List Is Empty
      </Typography> : 
      <Typography variant="h3" gutterBottom style={headingStyle}>
      To Do List
    </Typography>
      }  
    {todo.map((value, i) => (
    <List key={i} sx={{ width: '100%', maxWidth: 760, bgcolor: 'background.paper', marginLeft:'auto', marginRight:'auto'}}>
        <ListItem  sx={{boxShadow:'0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', margin:'6px 5px', padding:'15px'}}
          disableGutters
          secondaryAction={
            <IconButton aria-label="delete" onClick={()=>dispatch(deleteArray({index:i}))}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemText primary={`${value}`} />
        </ListItem>
    </List>
   
    ))}
  </div>
    
);
 }
export default memo(TodoDisplay)

