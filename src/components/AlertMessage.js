import React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

const AlertMessage = (props) => {
  const [open, setOpen] = React.useState(true);
  return (
    
    <Box sx={{ width: '100%',marginTop:"180px", zIndex:'1' }}>
      <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
                props.close()
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
         Task Added 📰 Check Display Page !!
        </Alert>
      </Collapse>
    </Box>
  )
}

export default AlertMessage