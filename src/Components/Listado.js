import React, { Component, Fragment } from 'react';

import axios from 'axios';

export default class Listado extends Component {
  state = {
    persons: []
  }

  componentDidMount() {

    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })

     
  }

  render() {
    return (
      <Fragment>
             <div className='margenNav'></div>
             <div className='container'>
                    <h1 className='text-orange animate__animated animate__fadeIn'>
                    COMPONENTE LISTADO
                    </h1>
            <table className="table animate__animated animate__fadeIn">    
                <thead className='thead-dark'>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Dirección</th>
                            </tr>
                            
                        </thead>
                        {this.state.persons.map(person =>
                    <tbody>
                    <tr>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td>{person.username}</td>
                        <td>{person.email}</td>
                        <td>{person.phone}</td>
                        <td>{person.address.city}</td>
                    </tr>
                    </tbody>

              
                    
                )}


            </table> 

            </div>         
        {/* <ul>
        {/* { this.state(person => <li>{person.name}</li>)} */}
{console.log(this.state.persons)}
{/* { this.state.persons.map(person => <li>{person.name}</li>)} */}
      {/* </ul>  */}
      </Fragment>
      
    )
  }
}

