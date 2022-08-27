import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App(props) {

  const [mode, setmode] = useState('light')
  const modeDarkToggle = ()=>{
    if(mode === 'light' || mode === 'lightgreen' || mode === 'dodgerblue'){
      setmode('dark')
      document.body.style.backgroundColor = '#0b0b52';
      document.body.style.color = 'white';
      showAlert('Dark mode has been enables', "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enables', "success")
    }
  }
  const modeBlueToggle = ()=>{
    if(mode === 'light' || mode === 'dark' || mode === 'lightgreen'){
      setmode('dodgerblue')
      document.body.style.backgroundColor = 'dodgerblue';
      document.body.style.color = 'black';
      showAlert('Dark mode has been enables', "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enables', "success")
    }
  }
  const modeGreenToggle = ()=>{
    if(mode === 'light' || mode === 'dark' || mode === 'dodgerblue'){
      setmode('lightgreen')
      document.body.style.backgroundColor = 'lightgreen';
      document.body.style.color = 'black';
      showAlert('Dark mode has been enables', "success")
    }
    else{
      setmode('light')
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('Light mode has been enables', "success")
    }
  }
    
  const [alert, setalert] = useState(null);
  const showAlert = (message , type)=>{
    setalert({
      msg : message,
      type : type,
    })

    setTimeout(() => {
      setalert(null);
    }, 1500);
    
  }
  return (
  <Router>
    
    <Navbar tittle="Textutils2" about="About Textutils" toggleDarkMode={modeDarkToggle} mode={mode} modeBlueToggle={modeBlueToggle} modeGreenToggle={modeGreenToggle}/>

      <Alert alert={alert}/>

      <Routes>
        <Route exact path="/" element = {<TextForm heading="Enter your text here" mode={mode} showAlert={showAlert} />}/>

        <Route exact path="/about" element ={ <About />}/>
      </Routes>

  </Router>
      
  );
}

export default App;