import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined'
import { editNote } from '../../Services/dataService';

export default function ColorPopper(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
        '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
        '#80B300', '#809900', 
    ]
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const takeColor = (color) => { 
if(props.action == 'create'){
    // console.log(color)
    props.listenToColorPopper(color)
}
else if(props.action == 'update'){
    // console.log(color)
    let obj = {color : color}
   editNote(obj, props.id )
   .then((response) => console.log(response))
   .catch((error) => console.log(error))

}
    }

    return (
        <div>
            <ColorLensOutlinedIcon className='note2_icon-button' fontSize='small' onClick={handleClick} />

            <Popper id={id} open={open} anchorEl={anchorEl}>
                <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display: 'flex' }}>
                    {
                        colorArray.map((color) => (
                        <div onClick={() => takeColor(color)} style={{height:35, width: 35,borderRadius:50, backgroundColor:color, margin: 5 }}></div>))
                    }
                </Box>
            </Popper>
        </div>
    );
}
