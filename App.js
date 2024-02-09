import './App.css';
import Navbar from './Components/Navbar.js';
import TextForm from './Components/TextForm.js';
import Alert from './Components/Alert.js';
import About from './Components/About.js';
import React, { useState } from 'react';
// import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App(props) {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = "React-Dark";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "React-Light"
    }
  };

  return (
    <>
           <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} ShowAlert={showAlert} />
           <About/>
    </>
    // <Router>
    //   <>
    //     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} ShowAlert={showAlert} />
    //     <Alert alert={alert} />
    //     <div className="container my-3">
    //       <Routes>
    //         <Route exact path="/" element={<TextForm ShowAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
    //         {/* <Route exact path="/about" element={<About />} /> */}
    //       </Routes>
    //     </div>
    //   </>
    // </Router>
  );
}

export default App;
