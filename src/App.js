import './App.scss';
import Header from "./Header"

function App() {
  return (
    <div className="App">
      < Header />
      <body>
        <p>
          Welcome to the start of the temporarily named Body App
        </p>
      </body>
       <footer className="App-footer">
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       </footer> 
        
      
    </div>
  );
}

export default App;
