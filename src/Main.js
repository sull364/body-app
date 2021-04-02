import "./App.scss";
import { Button, Link, makeStyles } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  input: {
    display: 'none',
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <body className="main-content">
        <div className="section">
          <div className="welcome left-section">
            <h1>Choose an Image</h1>
            <h2>What's the best image to upload?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          <div className="upload">
            <input
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" size="large" color="primary" component="span">Upload</Button>
            </label>
            </div>
        </div>
        
       
        
        
      </body>
  );
}

