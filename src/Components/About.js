import React, {Component,Fragment} from 'react';
import logo from '../../src/assets/img/logo192.png';
class About extends Component {
    state = {  } 
    render() { 
        return (
            <Fragment>
                <div className='margenNav'></div>
                <div className='container'>
                <div className='row section'>
                    <div className='col-md-3 col-sm-12'>
                    
                        <h2 className='text-orange'>Mi logo</h2>
                        <img src={logo}/>
                    
                    </div>

                    <div className='col-md-9 col-sm-12 historia'>
                    
                        <h3 className='text-blue'>About</h3>
                        <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y
                         archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde 
                         el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido 
                         usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos 
                         especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en 
                         documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 
                         60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y 
                         más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual 
                         incluye versiones de Lorem Ipsum.</p>
                         <p className='text'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y
                         archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde 
                         el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido 
                         usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos 
                         especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en 
                         documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 
                         60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y 
                         más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual 
                         incluye versiones de Lorem Ipsum.</p>
                         
                    </div>

                </div>
                </div>
            </Fragment>
        );
    }
}
 
export default About;