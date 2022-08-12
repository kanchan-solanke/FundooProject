import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PushPinIcon from '@mui/icons-material/PushPin';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import ImageIcon from '@mui/icons-material/Image';
import ArchiveIcon from '@mui/icons-material/Archive';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import './TakeNoteThree.css'
function TakeNoteThree() {
    return (
        <div>

            <Box className='ThreeBox'
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        width: 200,
                        height: 100,
                    },
                }}
            >
                <Paper className='ThreePaper' elevation={3}>
                    <div className='pushThree'>
                    <PushPinIcon />
</div>
<div className='downThree'>
    <div className='alert'>
    <AddAlertIcon />

    </div>
                <ColorLensIcon />
                <ArchiveIcon />
                <MoreVertIcon />
                <ImageIcon />
                <UndoIcon />
                <RedoIcon />
</div>
              
                    </Paper>
                    <Paper className='ThreePaper' elevation={3}>
                    <div className='pushThree'>
                    <PushPinIcon />
</div>
<div className='downThree'>
    <div className='alert'>
    <AddAlertIcon />

    </div>
                <ColorLensIcon />
                <ArchiveIcon />
                <MoreVertIcon />
                <ImageIcon />
                <UndoIcon />
                <RedoIcon />
</div>
              
                    </Paper>
               

            </Box>
        </div>
    )
}

export default TakeNoteThree