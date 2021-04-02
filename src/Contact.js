import "./App.scss";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import placeholder from './images/placeholder.png'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  left: {
    color: '#ffffff',
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <body className="main-content">
        <div className="section">
          <div className="contact-us left-section">
            <h1>Contact Us</h1>
            <form className={classes.root} noValidate autoComplete="off">
              <div className="name-field">
                <div className="first-name">
                  <TextField id="outlined-basic" label="First" variant="outlined" placeholder="First" />
                </div>
                <div className="last-name">
                  <TextField id="outlined-basic" label="Last" variant="outlined" placeholder="Last" />
                </div>
              </div>
              <div>
                <TextField id="outlined-basic" label="Email" variant="outlined" placeholder="Email" />
              </div>
              <div>
              <TextField
                id="outlined-textarea"
                label="Message"
                placeholder="What are you thinking?"
                multiline
                variant="outlined"
              />              
              </div>
            </form>
            </div>
          <div className="welcome-image images">
            <img src={placeholder} alt="empty" width="300px"></img>
          </div>
        </div>
        
          
       
      </body>
  );
}

export default Contact