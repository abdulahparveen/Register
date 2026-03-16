import { useContext, useEffect } from "react";
import './App.css';
import { dataContext } from './navbar';

function App() {
  const data = useContext(dataContext);

  useEffect(() => {
    console.log("inside use effect called");
  }, []); // runs only once when App mounts
                                                          
  return (
    <>
      <h3>{data}</h3>
      <button>Login</button>
    </>
  );
}

export default App;
