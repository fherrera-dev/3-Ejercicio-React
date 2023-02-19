import React,{Fragment, useState} from "react";
import { useForm } from "react-hook-form";

import axios from 'axios';

export default class Formulario extends React.Component {
  state = {
    name: '',
  }

  handleChange = event => {

    this.setState({name:event.target.value})
  }

  handleSubmit = event =>{

    const user ={

        name: this.state.name
    };


    axios.post(`https://jsonplaceholder.typicode.com/users`,{user})
    .then(res=>{

        console.log(res)
        console.log(res.data)

    })

  }

  render() {
    return (
     
        <div>
            <form onSubmit={this.handleSubmit}>

                    <label>Nombre de Persona :

                        <input type="text" placeholder="Nombre" name='name' onChange={this.handleChange}></input>
                    </label>
                <button type='submit'>add</button>
            </form>

        </div>

    )
  }
}
