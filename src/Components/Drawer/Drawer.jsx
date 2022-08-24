import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import ListItemButton from "@mui/material/ListItemButton";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    marginTop: 70,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    marginTop: 70,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});





const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function MiniDrawer(props) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer variant="permanent" open={props.drawer}>
                <List>
                    <ListItem key={"Notes"} disablePadding sx={{ display: "block" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <LightbulbOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Notes"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key={"Reminders"} disablePadding sx={{ display: "block" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <NotificationsNoneOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Reminders"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key={"Inspiration labels"} disablePadding sx={{ display: "block" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <LabelOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Inspiration"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key={"Personal labels"} disablePadding sx={{ display: "block" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <LabelOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Personal"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key={"Work labels"} disablePadding sx={{ display: "block" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <LabelOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Work "} />
                        </ListItemButton>
                    </ListItem>


                    <ListItem disablePadding sx={{ display: "block" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <EditOutlinedIcon> Edit </EditOutlinedIcon>
                            </ListItemIcon>
                            <ListItemText primary={"Edit labels"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding sx={{ display: "block" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <ArchiveOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Archive"} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem key={"Trash"} disablePadding sx={{ display: "block" }}>
                        <ListItemButton>
                            <ListItemIcon>
                                <DeleteOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Trash"} />
                        </ListItemButton>
                    </ListItem>

                </List>
            </Drawer>
        </Box>
    );
}
