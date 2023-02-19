import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import About from './Components/About';
import Home from './Components/Home';

import Contacto from './Components/Contact';
import History from './Components/History';
import Formulario from './Components/Formulario';
import Listado from './Components/Listado';


class Router extends Component {
    state = {  } 
    render() { 
        return (
            <BrowserRouter>
                <Navbar></Navbar>
               
                    <Route exact path="/" component={Home}></Route>
                    {/* <Route exact path="/home" component={Home}></Route> */}
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/contacto" component={Contacto}></Route>
                    <Route exact path="/history" component={History}></Route>
                    <Route exact path="/Formulario" component={Formulario}></Route>
                    <Route exact path="/Listado" component={Listado}></Route>
                    
                    {/* <Route exact path="/Contador" component={Contador}></Route> */}

                   
                    
            
                    
                <Footer></Footer>
            
            </BrowserRouter>
        );
    }
}
 
export default Router;