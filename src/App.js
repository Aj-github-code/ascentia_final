import "@fontsource/montserrat";
import "./App.css"
import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './common/Navbar/Navbar'
import Footer from "./common/Footer/Footer"
import Career from "./components/Career/Career"
import Home from "./components/Pages/Home"
import Product_sub from "./components/Pages/ProductSinglePage"
import Products from "./components/Products/ProductHome"
import SinglePage from "./components/Pages/ProductSinglePage"
import Media from "./components/Media/Media"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
import { useState } from "react";


function App() {
  //const [darkTheme, setDarkTheme] = useState(false);
  
  // React useEffect hook that will fire up
  // when "darkTheme" changes
  useEffect(() => {
    // Accessing scss variable "--background-color"
    // and "--text-color" using plain JavaScript
    // and changing the same according to the state of "darkTheme"
    const root = document.documentElement;
    root?.style.setProperty(
      "--font-family", "Montserrat" 
      //darkTheme ? "#262833" : "#fff"
    );
    root?.style.setProperty("--font-family", "Montserrat");
  }, []);
  return (
    <>
    <Router>
      <Navbar/>

      <Switch>
        <Route path='/' component={Home} exact></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/career' component={Career}></Route>
        <Route path='/product' component={Product_sub}></Route>
        <Route path='/products' component={Products}></Route>
        <Route path='/singlepage/:id/:slug' component={SinglePage} ></Route>
        <Route path='/media' component={Media}></Route>
        <Route path='/contact' component={Contact}></Route>


        

      </Switch>
      <Footer/>
    </Router>
    </>
  )
}

export default App