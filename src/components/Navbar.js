import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CloseIcon from '@material-ui/icons/Close';


const drawerWidth = '40vw';
const useStyles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        position: 'absolute'
    },
    drawerPaper: {
        width: drawerWidth,
        height: '100vh',
        border: 'none',
    }
}));


function Navbar(props) {

    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    const handleClickMenu = (destination) => {
        props.history.push(`/${destination}`);
        handleDrawerClose();
    }

    return (
        <div className="navContainer">
            <div className="navWrapper">
                <div className="leftSide">
                    <img
                        className="logo"
                        src={require(`../img/logo/${
                            props.location.pathname === '/' ?
                                'logo_matailmu_orange.png' :
                                'logo_matailmu_white.png'
                            }`)}
                        alt="logo"
                        onClick={() => handleClickMenu('')}
                    />
                </div>
                <div className="rightSide">
                    <Button className="btnLogin">
                        <AccountCircleIcon className="iconAccount" />
                        <p>LOGIN</p>
                    </Button>
                    <IconButton
                        onClick={handleDrawerOpen}
                        className="btnMenu"
                    >
                        <MenuIcon className="iconMenu" />
                    </IconButton>
                </div>
            </div>
            {props.location.pathname === '/' ? null : <div className='bgWhite' />}
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className='drawerHeader'>
                    <IconButton onClick={handleDrawerClose}>
                        <CloseIcon className="iconCloseMenu" />
                    </IconButton>
                </div>
                <List className='drawerMenu'>
                    <Button className='btnMenu' onClick={() => handleClickMenu('')}>HOME</Button>
                    <Button className='btnMenu' onClick={() => handleClickMenu('services')}>SERVICES</Button>
                    <Button className='btnMenu' onClick={() => handleClickMenu('profile')}>PROFILE</Button>
                    <Button className='btnMenu' onClick={() => handleClickMenu('career')}>CAREER</Button>
                    <Button className='btnMenu' onClick={() => handleClickMenu('contact')}>CONTACT US!</Button>
                </List>
            </Drawer>
        </div>
    )
}

export default withRouter(Navbar)
