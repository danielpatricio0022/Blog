import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { TextField } from '@mui/material';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export function FullScreenDialog({
     open,
     handleClose,
     formData,
     handleChange,
     handleSavePost,
 }: {
    open: boolean;
    handleClose: () => void;
    formData: { name: string; description: string; image: File | null };
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSavePost: () => void;
}) {
    return (
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
            <AppBar sx={{ position: 'relative' }}>
                <Toolbar
                    sx={{
                        backgroundColor: 'primary.main',
                        '&.MuiToolbar-root': {
                            backgroundColor: 'black',
                        },
                    }}
                >
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                        New Post
                    </Typography>
                    <Button autoFocus color="inherit" onClick={() => { handleSavePost(); handleClose(); }}>
                        Save
                    </Button>
                </Toolbar>
            </AppBar>
            <List>
                <ListItemButton>
                    <ListItemText
                        primary="Name"
                        secondary={
                            <TextField
                                placeholder="Enter Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        }
                    />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemText
                        primary="Description"
                        secondary={
                            <TextField
                                placeholder="Enter Description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                            />
                        }
                    />
                </ListItemButton>
                <Divider />
                <ListItemButton>
                    <ListItemText
                        primary="Image"
                        secondary={
                            <TextField
                                type="file"
                                name="image"
                                inputProps={{ accept: 'image/*' }}
                                onChange={handleChange}
                            />
                        }
                    />
                </ListItemButton>
            </List>
        </Dialog>
    );
}
