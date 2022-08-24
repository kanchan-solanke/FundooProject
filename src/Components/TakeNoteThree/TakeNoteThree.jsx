import React from 'react';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
// import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Box from '@mui/material/Box';

import ColorPopper from '../ColorPopper/colorPopper';
import Modal from '@mui/material/Modal';
import { delNote, editNote, updateNote } from '../../Services/dataService';
import './TakeNoteThree.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function TakeNoteThree(props) {
  const [open, setOpen] = React.useState(false);
  const [editObj, seteditObj] = React.useState({});

  const updateArchieve = () => {
    updateNote(props.note._id).then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  const deleteNote = () => {
    delNote(props.note._id).then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  const handleOpen = (obj) => {
    seteditObj(obj)
    setOpen(true)

  };

  const handleClose = () => setOpen(false);

  const editTitle = (event) => {
    seteditObj((prevState) => ({ ...prevState, Title: event.target.value }))

  }
  const editDescreption = (event) => {
    seteditObj((prevState) => ({ ...prevState, Descreption: event.target.value }))

  }

  const updateModal = () => {
    editNote(editObj, props.note._id).then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  return (
    <div className='noteThree_outer-box' >
      <div className='noteThree_inner-box' style={{ backgroundColor: props.note.color }}>

        <div className='noteThree_box1' onClick={() => handleOpen(props.note)}>
          {props.note.Title}
          <div className="noteThree_box1_pin-icon">
            <IconButton id='noteThree_pin-note' aria-label="pin-note" size='small'>
              <PushPinOutlinedIcon />
            </IconButton>
          </div>
        </div>


        <div className="noteThree_box2" onClick={() => handleOpen(props.note)}>
          {/* <input type='text' name='takenote' onChange={takeDescription} className='note2_input' placeholder='Take a note...' ></input> */}
          {props.note.Descreption}
        </div>

        <div className="noteThree_box3">


          <div className="noteThree_icon-group">

            <IconButton className='noteThree_icon-button' aria-label="New list" size='small'>
              <AddAlertOutlinedIcon className='iconThree' />
            </IconButton>

            <IconButton className='noteThree_icon-button' aria-label="New list" size='small'>
              <PersonAddAltOutlinedIcon className='iconThree' />
            </IconButton>

            <IconButton className='noteThree_icon-button' aria-label="New list" size='small'>
              {/* <ColorLensOutlinedIcon className='iconThree' fontSize='small' /> */}
              <ColorPopper action='update' id={props.note._id} />
            </IconButton>

            <IconButton className='noteThree_icon-button' aria-label="New list" size='small'>
              <ImageOutlinedIcon className='iconThree' />
            </IconButton>

            <IconButton className='noteThree_icon-button' aria-label="New list" size='small'>
              <ArchiveOutlinedIcon className='iconThree' onClick={updateArchieve} />
            </IconButton>

            <IconButton className='noteThree_icon-button' aria-label="New list" size='small'>
              <DeleteOutlineOutlinedIcon className='iconThree' onClick={deleteNote} />
            </IconButton>

            <IconButton className='noteThree_icon-button' aria-label="New list" size='small'>
              <MoreVertOutlinedIcon className='iconThree' />
            </IconButton>


          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box className="modal-Box"  sx={style} style={{ backgroundColor: props.note.color }}>

          <div className='noteTwo_box1'>
            <input type='text' name='title' className='noteTwo_input' style={{ backgroundColor: props.note.color }} defaultValue={editObj.Title} onChange={editTitle} placeholder='Title' ></input>

            <div className="noteTwo_box1_pin-icon">
              <IconButton id='noteTwo_pin-note' aria-label="pin-note" size='small'>
                <PushPinOutlinedIcon />
              </IconButton>
            </div>
          </div>


          <div className="noteTwo_box2">
            <input type='text' name='takenote' defaultValue={editObj.Descreption} style={{ backgroundColor: props.note.color }} onChange={editDescreption} className='noteTwo_input' placeholder='Take a note...' ></input>
          </div>

          <div className="noteTwo_box3">

            <button type='submit' htmlColor="black" onClick={updateModal}>Close</button>

            <div className="noteTwo_icon-group">

              <IconButton className='noteTwo_icon-button' aria-label="New list" size='small'>
                <AddAlertOutlinedIcon className='icon' />
              </IconButton>

              <IconButton className='noteTwo_icon-button' aria-label="New list" size='small'>
                <PersonAddAltOutlinedIcon className='icon' />
              </IconButton>

              <IconButton className='noteTwo_icon-button' aria-label="New list" size='small'>
                {/* <ColorLensOutlinedIcon className='note2_icon-button' fontSize='small' /> */}
                {/* <ColorPopper action='create' id={props.note._id} listenToColorPopper={props.listenToColorPopper} /> */}
                <ColorPopper action='update' id={props.note._id} listenToColorPopper={props.listenToColorPopper}  />
              </IconButton>

              <IconButton className='noteTwo_icon-button' aria-label="New list" size='small'>
                <ImageOutlinedIcon className='icon' />
              </IconButton>

              <IconButton className='noteThree_icon-button' aria-label="New list" size='small'>
                <DeleteOutlineOutlinedIcon className='iconThree' onClick={deleteNote} />
              </IconButton>

              <IconButton className='noteTwo_icon-button' aria-label="New list" size='small'>
                <ArchiveOutlinedIcon className='icon' onClick={updateArchieve} />
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

        </Box>
      </Modal>

    </div>






  )
}

export default TakeNoteThree