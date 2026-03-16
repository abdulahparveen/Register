import { useState, createContext,useEffect } from "react";
import App from "./App";

let my = "My first react app";
export const dataContext = createContext();

function Navbar() {
  const [purchased, setPurchased] = useState(false);
  const [dummy, setDummy]= useState(true);
  const data = "DataData";

  useEffect(()=>{
     console.log("use effect called");
     console.log(dummy);
     
    
  },[]);

  function Bycourse(discount) {
    console.log("parveen purchased with", discount, "% discount");
    setPurchased(true);
  }          

  return (
    <>
      <dataContext.Provider value={data}>
            <App />
      </dataContext.Provider>
      <div className="container">
        <h1>{my}</h1>
        <button onClick={() => Bycourse(20)}>Buy Now</button>
        <p>{purchased ? "You already purchased this item" : "Get it now"}</p>


               <button onClick={() => setDummy(false)}>Dummy Button</button>
      </div>
    </>
  );
}

export default Navbar;
