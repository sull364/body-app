import "./App.scss";
import { Button } from '@material-ui/core';

import placeholder from './images/placeholder.png'


function About() {
  return (
    <body className="main-content">
        <div className="section">
          <div className="how-works left-section">
            <h1>How Does the Site Work?</h1>
            <h2>How we made magic</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          <div className="welcome-image images">
            <img src={placeholder} alt="empty" width="300px"></img>
          </div>
        </div>
        <div className="section opposite-section">
          <div className="contribute left-section">
            <h1>Contribute before and After Pics</h1>
            <h2>Help us become more accurate</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <Button variant="contained" size="large" color="primary">Upload</Button>
            </div>
          <div className="app-for-image images">
            <img src={placeholder} alt="empty" width="300px"></img>
          </div>
        </div>
      </body>
  );
}

export default About;
