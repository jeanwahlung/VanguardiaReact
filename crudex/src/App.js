import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import CreateTodo from "./components/createCar.component";
import EditTodo from "./components/editCar.component";
import TodosList from "./components/ListCar.component";
import logo from "./logo.jpg"
function App() {
  return (
    <Router>


      <div className="container">
        <nav className="navbar-expand-lg navbar-light bg-light">
          <header> 
          <a className="navbar-brand"  target="_blank">
           
            <h1>  Vanguard Cars</h1>  
          </a>  
           </header>
         
        
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">List All</Link>
              </li>
              <li className="navbar-item">
                <Link to="/crear" className="nav-link">Create Car</Link>
              </li>
            </ul>
          </div>

        </nav>
       
        <Route path="/" exact component={TodosList} />
        <Route path="/editar/:id" exact component={EditTodo} />
        <Route path="/crear" exact component={CreateTodo} />
      </div>

    </Router>

  );
}

export default App;
