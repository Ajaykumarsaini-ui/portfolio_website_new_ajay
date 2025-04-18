  import React, { useState } from "react";
  import Navbar from "./Components/Navbar/Navbar";
  
  import "./App.css";
import Approute from "./Approute/Approute";

  const App = () => {
    const [toggletheme, settoggletheme] = useState(false);
    const toggleTheme = () => {
      settoggletheme(!toggletheme);
    };

    return (
      <div className={`${toggletheme ? "light-theme" : "dark-theme"}`}>
        <Navbar toggleTheme={toggleTheme} />
        <Approute/>
        
      </div>
    );
  };

  export default App;
