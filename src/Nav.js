import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    backgroundColor: "#282c34",
  }
}));

export default function Nav() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.nav}>
        <Toolbar>
        <Typography edge="start" variant="h6" className={classes.title}>
            NavBar
          </Typography>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            <div className= 'burger'>
              <div className = "burger div"></div>
              <div className = "burger div"></div>
              <div className = "burger div"></div>
            </div>
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link component={RouterLink} to="/"><MenuItem onClick={handleClose}>Home</MenuItem></Link>
            <Link component={RouterLink} to="/main"><MenuItem onClick={handleClose}>Main</MenuItem></Link>
            <Link component={RouterLink} to="/about"><MenuItem onClick={handleClose}>About</MenuItem></Link>
            <Link component={RouterLink} to="/contact"><MenuItem onClick={handleClose}>Contact</MenuItem></Link>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}