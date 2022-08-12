import * as React from 'react';
import Box from '@mui/material/Box';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import './TakeNoteTwo.css'
import { Paper } from '@mui/material';
function TakeNoteTwo() {
  const [takeNoteTwoObj, setTakeNoteTwoObj] = React.useState({Title:'',Descreption:''})
    
  const takeTitle  = (event) =>{
      setTakeNoteTwoObj((prevState) =>({...prevState, Title: event.target.value}))
  }
  
  const takeNote = (event) =>{
    setTakeNoteTwoObj((prevState) => ({...prevState, Descreption : event.target.value}))
  }


    
  return (
    <div className='mainTwo'>
      <Box sx={{
        width: 600,
        height: 800,
      }}>
        <Paper className='width'>
        <div className='wholeone'>
        <div className='titleTwo'>
        <input type='text' name='title' id='title' placeholder='Title'></input>
        </div>

          <div className='take'>                  
          <input type='text' name='takenote' id='takenote' placeholder='Take a note...'></input>
          </div>          
          </div>


        <div className='rightTwo'>
          <PushPinIcon />
        </div>
        <div className='down'>
          <div className='one'>
            <AddAlertIcon />
          </div>
          <div className='two'>
            <ColorLensIcon />
          </div>
          <div className='threeOne'>
            <ArchiveIcon />
          </div>
          <div className='four'>
            <MoreVertIcon />
          </div>

          <div className='five'>

            <ImageIcon />
          </div>

          <div className='six'>

            <UndoIcon />
          </div>

          <div className='seven'>

            <RedoIcon />
          </div>

          <div className='eight'>

            <PersonAddAlt1Icon />
          </div>
          <div className='nine'>
            Close
          </div>
        </div>
</Paper>
      </Box>

    </div>

  )
}

export default TakeNoteTwo
