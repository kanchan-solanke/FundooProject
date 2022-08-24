
import './Header.css'
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import RefreshIcon from '@mui/icons-material/Refresh';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(4),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(4),
    width: '70%',

  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));

function Header(props) {
  const handleDrawer = () => {
    props.listenToHeader()
  }
  return (
    <div class="header">
      <div class="childone">
        <p>  <MenuIcon onClick={handleDrawer}/></p>
        <p>
          <img class="header-logo" src="https://www.gstatic.com/images/branding/product/1x/keep_48dp.png" alt="logo"></img>
        </p>
        <p> <Typography variant="h5">
          Keep
        </Typography>
        </p>
      </div>
      <div class="childtwo">
        <span>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search></span>
      </div>
      <div class="childthree">
        <p><RefreshIcon /></p>
        <p><DragHandleIcon /></p>
        <p><SettingsIcon /></p>

      </div>

      <div class="childfour">
        <p><AppsIcon /></p>
        <p><AccountCircle /></p>
      </div>
      
    </div>

  )
}




export default Header
