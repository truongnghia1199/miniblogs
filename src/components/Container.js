import React  from 'react'
import Author from './Author'
import Posts from "./Home";
import About from './About';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Contact from './Contact';
import Post from './Post';


const Container = () => {

    return (
        <div className="container">
            <div className="content">
                <Author></Author>
                <div className="router">
                    <Switch>
                        <Route  exact path="/">
                            <Posts>
                            </Posts>
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/post/:id">
                            <Post />
                        </Route>
                </Switch>
                </div>
            </div>
        </div>
    )
}

export default Container
