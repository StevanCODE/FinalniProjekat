import React, { useState, useEffect } from 'react';
import './App.css';
import { getChamps } from "./services"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"
import { Header } from "./components/Header"
import { Home } from "./components/Home"
import { Logo } from "./components/Logo"
import { Contact } from "./components/Contact"
import { About } from "./components/About"
import { SignIn } from "./components/SignIn"
import { Buttons } from "./components/Buttons"
import { ShowChampions } from "./components/ShowChampions"
import { ShowChampionDetails } from "./components/ShowChampionDetails"
import { Map } from "./components/Map"
import { Menu } from "./components/Menu"
import { Freljord } from './components/Freljord'
import { Demacia } from './components/Demacia'
import { Bilgewater } from './components/Bilgewater'
import { Noxus } from './components/Noxus'
import { Ionia } from './components/Ionia'
import { Piltover } from './components/Piltover'
import { ShadowIsles } from './components/ShadowIsles'
import { Zaun } from './components/Zaun'
import { Shurima } from './components/Shurima'
import { Targon } from './components/Targon'



// import styled from "styled-components"



function App() {

  const [bodyId, setBodyId] = useState("body")
  const [champs, setChamps] = useState(null)
  const [champions, setChampions] = useState([])

  const [showHeader, setShowHeader] = useState(true)
  const [users, setUsers] = useState([{ name: "admin", password: 123 }])
  const [signedIn, setsignedIn] = useState(false)
  const [start, setStart] = useState(Number(0))
  const [end, setEnd] = useState(Number(24))







  document.body.id = bodyId
  useEffect(() => {
    getChamps().then(res => {
      setChamps(Object.values(res.data.data))

    })
  }, [])
  useEffect(() => {
    if (champs) {
      setChampions(champs.slice(start, end))
    }
  }, [champs, start, end])




  return (
    <div>
      <Router>

        {signedIn ? <Link id="menu" to="/menu"> Menu </Link> : <></>}
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        {showHeader ? <Header setBodyId={setBodyId} setShowHeader={setShowHeader} /> : <Home setBodyId={setBodyId} setShowHeader={setShowHeader} setsignedIn={setsignedIn} />}

        {signedIn === false ? <Link id="signin" to="signin" onClick={() => {
          setBodyId("body2")
          setShowHeader(false)
        }}> Sign in </Link> : <p></p>}
        <Switch>
          <Route path="/signin">
            <SignIn users={users} signedIn={signedIn} setBodyId={setBodyId} setShowHeader={setShowHeader} showHeader={showHeader} setsignedIn={setsignedIn} />
          </Route>
          <Route path="/home">
            <Logo signedIn={signedIn} showHeader={showHeader} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/champions">
            <ShowChampions champions={champions} />
            <Buttons start={start} setStart={setStart} end={end} setEnd={setEnd} />
          </Route>
          <Route exact path="/champions/:id">
            <ShowChampionDetails champions={champions} />
          </Route>
          <Route exact path="/menu">
            <Menu signedIn={signedIn} setBodyId={setBodyId} />
          </Route>
          <Route path="/world">
            <Map />
          </Route>
          <Route path="/freljord">
            <Freljord />
          </Route>
          <Route path="/demacia">
            <Demacia />
          </Route>
          <Route path="/noxus">
            <Noxus />
          </Route>
          <Route path="/bilgewater">
            <Bilgewater />
          </Route> 
          <Route path="/Ionia">
            <Ionia />
          </Route>
          <Route path="/shadowisles">
            <ShadowIsles />
          </Route>
          <Route path="/targon">
            <Targon />
          </Route>
          <Route path="/shurima">
            <Shurima />
          </Route>
          <Route path="/piltover">
            <Piltover />
          </Route>
          <Route path="/zaun">
            <Zaun />
          </Route> 
        </Switch>

      </Router>
    </div>
  );
}


export default App;
