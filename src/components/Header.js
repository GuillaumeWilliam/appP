import React from "react";
import Admin from './Admin';
import Page404 from './Page404';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HomeMain from "./HomeMain";
import MainCv from "./MainCv";
import MainContact from "./MainContact";
import Login from "./Login";

function Header() {
    return (
        <header>
            <div className="maintitle">
                <h1>Mon portfolio</h1>
                <h2>par Guillaume W. Gallard</h2>
            </div>
            <div id="logo">
                <img src="images/portfoliogo.png" alt="Guillaume Gallard" />
            </div>
            <Router>
                <nav>
                    <ul>
                        <div class="portfoliobtn"><li><Link to="/" />Portfolio</li></div>
                        <div class="cvbtn"><li><Link to="/cv" />CV</li></div>
                        <div class="contactbtn"><li><Link to="/contact" />Contact</li></div>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/admin" component={Admin}/>                  
                    <Route path='/' component={HomeMain} exact/>
                    <Route path='/cv' component={MainCv} />
                    <Route path='/contact' component={MainContact} />
                    <Route path='/login' component={Login} />
                    <Route path='*' component={Page404} />
                    
                </Switch>
            </Router>
        </header>
    )
}

export default Header;