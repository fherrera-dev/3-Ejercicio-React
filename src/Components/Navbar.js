import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import logoSloth from '../assets/logo-sloth.png'



class Navbar extends Component{

    render(){

        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <NavLink className="navbar-brand" to="/">
                    {/* <img className="logo" src={}/> */}
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Listado">Listado</NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/Form">Formulario</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/history">History</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Formulario">Formulario</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                       
        
                    </ul>
                    
                    <div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search a tour" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        )

    }
}

export default Navbar