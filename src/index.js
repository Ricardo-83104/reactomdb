import React, { Fragment, Container } from "react";
import ReactDom from "react-dom";

import List from './containers/List';
import Navbar from "./components/NavBar";

import 'bootswatch/dist/lux/bootstrap.min.css';
import "./index.css";

const App = () => {
    return (
           <>
           <Navbar/>
           
            <main className="bg-dark">
                <div className="container">
                    <List />
                </div>
            </main>
            </>  
        
    )
}



ReactDom.render(<App />, document.getElementById('root'))