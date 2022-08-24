import * as React from 'react';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
// import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ColorPopper from '../ColorPopper/colorPopper';
import './TakeNoteTwo.css'
import { addNote } from '../../Services/dataService';

function TakeNoteTwo(props) {
  const [takeNoteTwoObj, setTakeNoteTwoObj] = React.useState({ Title: '', Descreption: '', color: 'White',isArchived: false })

  const takeTitle = (event) => {
    setTakeNoteTwoObj((prevState) => ({ ...prevState, Title: event.target.value }))

  }

  const takeDescription = (event) => {
    setTakeNoteTwoObj((prevState) => ({ ...prevState, Descreption: event.target.value }))
  }

  const submit = () => {
    addNote(takeNoteTwoObj).then((response) => {
      console.log(response);
      props.listenToTakeNoteTwo()
    }).catch((error) => {
      console.log(error)
    })

  }
  
  const listenToColorPopper = (color) => {
    setTakeNoteTwoObj((prevState) => ({ ...prevState, color: color }))
  }

  const handleArchieve = () => {
      setTakeNoteTwoObj((prevState) => ({ ...prevState, isArchived:true }))
    }
  
  return (
    
    <div className='noteTwo_outer-box' >
      <div className='noteTwo_inner-box' style={{backgroundColor: takeNoteTwoObj.color }}>

        <div className='noteTwo_box1'>
          <input type='text' name='title' className='noteTwo_input' onChange={takeTitle} placeholder='Title' style={{backgroundColor: takeNoteTwoObj.color }}></input>

          <div className="noteTwo_box1_pin-icon">
            <IconButton id='noteTwo_pin-note' aria-label="pin-note" size='small'>
              <PushPinOutlinedIcon />
            </IconButton>
          </div>
        </div>


        <div className="noteTwo_box2">
          <input type='text' name='takenote' onChange={takeDescription} style={{backgroundColor: takeNoteTwoObj.color }}className='noteTwo_input' placeholder='Take a note...' ></input>
        </div>

        <div className="noteTwo_box3">

          <button type='submit' htmlColor="black" onClick={submit}>Close</button>

          <div className="noteTwo_icon-group">

            <IconButton className='noteTwo_icon-button' aria-label="New list" size='small'>
              <AddAlertOutlinedIcon className='icon' />
            </IconButton>

            <IconButton className='noteTwo_icon-button' aria-label="New list" size='small'>
              <PersonAddAltOutlinedIcon className='icon' />
            </IconButton>
            <IconButton className='noteTwo_icon-button' aria-label="New list" size='small'>
              {/* <ColorLensOutlinedIcon className='note2_icon-button' fontSize='small' /> */}
              <ColorPopper action='create' listenToColorPopper={listenToColorPopper}/>
            </IconButton>

            <IconButton className='noteTwo_icon-button' aria-label="New list" size='small'>
              <ImageOutlinedIcon className='icon' />
            </IconButton>

            <IconButton className='noteTwo_icon-button' aria-label="New list" size='small'>
              <ArchiveOutlinedIcon className='icon' onClick={handleArchieve} />
            </IconButton>

            <IconButton className='noteTwo_icon-button' aria-label="New list" size='small'>
              <MoreVertOutlinedIcon className='icon' />
            </IconButton>

            <IconButton className='noteTwo_icon-button' aria-label="New list" size='small' disabled>
              <UndoOutlinedIcon className='icon' />
            </IconButton>

            <IconButton className='noteTwo_icon-button' aria-label="New list" size='small' disabled>
              <RedoOutlinedIcon className='icon' />
            </IconButton>
          </div>
        </div>
      </div>
    </div>

  )
}

export default TakeNoteTwo
