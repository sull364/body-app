import "./App.scss";
import { Button, Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import placeholder from './images/placeholder.png'

function Home() {
  return (
    <div className="Home">
      <div className="top-image"></div>
      <body className="main-content">
        <div className="section">
          <div className="welcome left-section">
            <h1>Welcome to the BodyApp</h1>
            <h2>What do we do here?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          <div className="welcome-image images">
            <img src={placeholder} alt="empty" width="300px"></img>
          </div>
        </div>
        <div className="section opposite-section">
          <div className="app-for left-section">
            <h1>Who is the App For?</h1>
            <h2>What do we do here?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="app-for-image images">
            <img src={placeholder} alt="empty" width="300px"></img>
          </div>
        </div>
        <div className="section">
          <div className="how-to-use left-section">
            <h1>How do You Use the Site?</h1>
            <h2>What do we do here?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          <div className="how-to-use-image images">
            <img src={placeholder} alt="empty" width="300px"></img>
            </div>
        </div>
        <div className="get-started">
          <h3>Get Started</h3>
          <Link component={RouterLink} to="/main"><Button variant="contained" size="large" color="primary">Let's Go!</Button></Link>

        </div>
        
        <p>Welcome to the start of the temporarily named Body App</p>
      </body>
    </div>
  );
}

export default Home;
