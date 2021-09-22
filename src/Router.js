import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'



function Router() {
    return(
        <BrowserRouter>
        <Link  to="/">Home</Link>
        <br/>
        <Link to="/About">About</Link>
        <br/>
        <Link to="/Contact">Contact</Link>
        <br/>
        <Link to="/Services">Services</Link>

        <Route exact path="/" component={Home}/>
        <Route path="/About" component={About} />
        <Route path ="/Contact" component={Contact}/>
        <Route path="/Services" component={Services} />

        </BrowserRouter>
    );
}

export default Router;