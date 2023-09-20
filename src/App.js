import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {

const [progress, setProgress] = useState(0)

    return (
      <div>
       <Router>
       <NavBar/>
       <LoadingBar
        color='#f11946'
        progress={progress}
       />
       <Routes>
          <Route  exact  path="/" element = {<News setProgress= {setProgress} key={"General"} pgsize={6} country="in" category="General"/>}/>
          <Route  exact path="/Business" element = {<News setProgress= {setProgress} key={"Business"} pgsize={6} country="in" category="Business"/>}/>
          <Route  exact path="/Entertainment" element = {<News setProgress= {setProgress} key={"Entertainment"} pgsize={6} country="in" category="Entertainment"/>}/>
          <Route  exact path="/General" element = {<News setProgress= {setProgress} key={"General"} pgsize={6} country="in" category="General"/>}/>
          <Route  exact path="/Health" element = {<News setProgress= {setProgress} key={"Health"} pgsize={6} country="in" category="Health"/>}/>
          <Route  exact  path="/Science" element = {<News setProgress= {setProgress} key={"Science"} pgsize={6} country="in" category="Science"/>}/>
          <Route  exact path="/Sports" element = {<News setProgress= {setProgress} key={"Sports"} pgsize={6} country="in" category="Sports"/>}/>
          <Route  exact path="/Technology" element = {<News setProgress= {setProgress} key={"Technology"} pgsize={6} country="in" category="Technology"/>}/>
        </Routes>
       </Router>
      </div>
    )
}

export default App;