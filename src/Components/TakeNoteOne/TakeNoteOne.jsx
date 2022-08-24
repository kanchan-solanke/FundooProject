
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import BrushIcon from '@mui/icons-material/Brush';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import InputBase from '@mui/material/InputBase';
import './TakeNoteOne.css';

function TakeNoteOne(props) {

  const listeningToTakeNoteOne = () => {
    props.listenToTakeNoteOne()
  }

  return (
    <div className='noteOne_outer-box' onClick={listeningToTakeNoteOne}>
      <div className="noteOne_inner-box">
        {/* <div className='containerOne' onClick={listeningToTakeNoteOne}> */}

        <InputBase className='noteOne_input-base' placeholder="Take a note..." fullWidth />

        <IconButton aria-label="New list" size='large'>
          <CheckBoxOutlinedIcon />
        </IconButton>

        <IconButton aria-label="New note with drawing" size='large'>
          <BrushIcon />
        </IconButton>

        <IconButton aria-label="New note with image" size='large'>
          <ImageOutlinedIcon />
        </IconButton>

      </div>
    </div>


  )
}

export default TakeNoteOne