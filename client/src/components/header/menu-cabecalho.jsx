import React from 'react';
import { Box, Button, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu"

function MenuCabecalho() {

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Galeria de Habilidades
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
export default MenuCabecalho;