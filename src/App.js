import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Router and Routes are imported from react-router-dom.


function App() {
  const [mode, setMode] = useState('light'); // weather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500); // After 3 seconds, remove the alert from the state.
  } //Now set Alert is a Object


  const toggleMode = () => {
    if(mode=== 'light'){
      setMode("dark");
      document.body.style.backgroundColor ='#302f2f';
      showAlert("Dark mode Enabled","success");
      document.title='TextUtils - Dark Mode';
    }else{
      setMode("light");
      document.body.style.backgroundColor ='white';
      showAlert("Light mode Enabled","success");
      document.title='TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
   
    <Alert alert={alert} />
    <div className="container my-3">
    {/* <Routes> */}
      {/* <Route exact path='/about' element={<About />} /> */}
      {/* <Route exact path='/' element={}/> */}
      <TextForm showAlert={showAlert} heading="Enter Your Text Here:/" mode={mode} />
      {/* <About mode={mode} /> */}
    {/* </Routes> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
