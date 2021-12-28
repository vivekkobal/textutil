
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
import Contact from './component/Contact';
import React, { useState } from 'react'
import  Alert  from './component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null)

const showAlert=(message,type)=>{
setAlert({
  msg:message,
  type:type
})
setTimeout(() => {
  setAlert(null);
}, 2000);
}
// const removeBodyClasses =() =>{
//   document.body.classList.remove('bg-light')
//   document.body.classList.remove('bg-dark')
//   document.body.classList.remove('bg-warning')
//   document.body.classList.remove('bg-danger')
//   document.body.classList.remove('bg-success')


// }
const togglemode=(cls)=>{
  //removeBodyClasses();
  //console.log(cls)
  //document.body.classList.add('bg-'+cls)
  if (mode==='light') {
    setMode ('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark mode has been enabled","success")
    //document.title="Dark Mode-Enable"
  } else {
    setMode ('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled","success")
    //document.title="Light Mode-Enable"


  }
}


  return (
    <>
<Router>
<Navbar title="Textutilize" mode={mode} togglemode={togglemode}>

</Navbar>
<Alert alert={alert}></Alert>
<div className="container my-3">
<Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route path="/Contact">
          <Contact/>
          </Route>
         <Router  path="/">
         <TextForm showAlert={showAlert} heading="Enter the text analyze below"  mode={mode}/>

         </Router>
         
        </Switch>
</div>
</Router>
</>
  );
}

export default App;
