
import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import BrushIcon from '@material-ui/icons/Brush';
import ImageIcon from '@material-ui/icons/Image';
import './TakeNoteOne.css';
function TakeNoteOne() {
    
     
  return (
    <div>
      <div className='containerOne'>
        <div className='layout'>
          <Box
            sx={{
              '& > :not(style)': {
                width: 750,
                height: 150,
                margin: 5,


              },
            }}
          >
            <div >
            <Paper className='paper' elevation={4}>
              <div className='whole'>
              <div className='takenoteOne'>
              <input type='text' id='takenoteone' placeholder='Take a note...'></input>         
 </div>
 <div className='iconright'>
 <CheckBoxIcon  />
            <BrushIcon />
            <ImageIcon />
 </div>
 </div>
            </Paper>
            </div>

            
          </Box>
          

        </div>
      </div>
    </div>
  )
}

export default TakeNoteOne