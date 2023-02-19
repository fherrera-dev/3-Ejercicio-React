import React,{Fragment, useState} from "react";
import { useForm } from "react-hook-form";

import axios from 'axios';

// export default class Formulario extends React.Component {
//   state = {
//     name: '',
//   }

//   handleChange = event => {

//     this.setState({name:event.target.value})
//   }

//   handleSubmit = event =>{

//     const user ={

//         name: this.state.name
//     };


//     axios.post(`https://jsonplaceholder.typicode.com/users`,{user})
//     .then(res=>{

//         console.log(res)
//         console.log(res.data)

//     })

//   }

const Formulario = () => {

  const{register, formState:{errors},handleSubmit}=useForm();

  const [Entradas, setentradas]=useState([]);

  const onSubmit=(data,e)=>{
      console.log(data);
      alert(data);
      setentradas([
          ...Entradas,data
      ])

      alert(JSON.stringify(Entradas));
      e.target.reset()
  }

  // render() {
    return (
     
        // <div>
        //     <form onSubmit={this.handleSubmit}>

        //             <label>Nombre de Persona :

        //                 <input type="text" placeholder="Nombre" name='name' onChange={this.handleChange}></input>
        //             </label>
        //         <button type='submit'>add</button>
        //     </form>

        // </div>

          <Fragment>
<div className='margenNav'></div>
          <div className="container"> 
          <h2>Formulario con Hooks</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-row">
            <div className="col-md-4 col-sm-12 mb-3">
                    <label >Cedula:</label>
                        <input 
                            name="cedula"
                            className="form-control form-control-sm" type="text"  
                            placeholder="Ingresa su cédula..."
                            //validacion --registro nombre
                            {...register("cedula",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:9,message:"La cédula tiene que ser de minimo 9 digitos"}
                            })}
                        />
                        {
                            errors.cedula &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.cedula.message}
                            </div>
                        }
                </div>
                <div className="col-md-4 col-sm-12 mb-3">
                    <label >Nombre:</label>
                        <input 
                            name="nombre"
                            className="form-control form-control-sm" type="text"  
                            placeholder="Ingresa su nombre..."
                            //validacion --registro nombre
                            {...register("nombre",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:3,message:"El nombre tiene que ser mínimo 3 letras..."}
                            })}
                        />
                        {
                            errors.nombre &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.nombre.message}
                            </div>
                        }
                </div>

                <div className="col-md-4 mb-3">
                    <label >Apellido 1:</label>
                        <input 
                            name="apellido1"
                            className="form-control form-control-sm" type="text"  
                            placeholder="Ingresa su apellido1..."
                            //validacion --registro nombre
                            {...register("apellido1",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:2,message:"El nombre tiene que ser más grande..."}
                            })}
                        />
                        {
                            errors.apellido1 &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.apellido1.message}
                            </div>
                        }
                </div>
            </div>   

                <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label >Apellido2:</label>
                        <input 
                            name="apellido2"
                            className="form-control form-control-sm" type="text"  
                            placeholder="Ingresa su apellido2..."
                            //validacion --registro nombre
                            {...register("apellido2",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:2,message:"El nombre tiene que ser más grande..."}
                            })}
                        />
                        {
                            errors.apellido2 &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.apellido2.message}
                            </div>
                        }
                </div>

                <div className="col-md-4 mb-3">
                    <label >Teléfono:</label>
                        <input 
                            name="telefono"
                            className="form-control form-control-sm" type="text"  
                            placeholder="Ingresa su telefono..."
                            //validacion --registro nombre
                            {...register("telefono",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:2,message:"El nombre tiene que ser más grande..."}
                            })}
                        />
                        {
                            errors.telefono &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.telefono.message}
                            </div>
                        }
                </div>

                <div className="col-md-4 mb-3">
                    <label >Celular:</label>
                        <input 
                            name="celular"
                            className="form-control form-control-sm" type="text"  
                            placeholder="Ingresa su celular..."
                            //validacion --registro nombre
                            {...register("celular",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:2,message:"El nombre tiene que ser más grande..."}
                            })}
                        />
                        {
                            errors.celular &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.celular.message}
                            </div>
                        }
                </div>        


                </div>   

                <div className="form-row">
                <div className="col-md-4 mb-3">
                    <label >Email:</label>
                        <input 
                            name="email"
                            className="form-control form-control-sm" type="email"  
                            placeholder="Ingresa su email..."
                            //validacion --registro nombre
                            {...register("email",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:2,message:"El nombre tiene que ser más grande..."}
                            })}
                        />
                        {
                            errors.email &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.email.message}
                            </div>
                        }
                </div>

                <div className="col-md-4 mb-3">
                    <label >Usuario:</label>
                        <input 
                            name="usuario"
                            className="form-control form-control-sm" type="text"  
                            placeholder="Ingresa su usuario..."
                            //validacion --registro nombre
                            {...register("usuario",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:2,message:"El nombre tiene que ser más grande..."}
                            })}
                        />
                        {
                            errors.usuario &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.usuario.message}
                            </div>
                        }
                </div>

                <div className="col-md-4 mb-3">
                    <label >Ciudad:</label>
                        <input 
                            name="ciudad"
                            className="form-control form-control-sm" type="text"  
                            placeholder="Ingresa su ciudad..."
                            //validacion --registro nombre
                            {...register("ciudad",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:2,message:"El nombre tiene que ser más grande..."}
                            })}
                        />
                        {
                            errors.ciudad &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.ciudad.message}
                            </div>
                        }
                </div>        


                </div>  

                <div className="form-row">
                <div className="col-12 mb-3">
                    <label >Comentarios:</label>
                        <input 
                            name="comentarios"
                            className="form-control form-control-sm" type="text"  
                            placeholder="Ingresa su comentarios..."
                            //validacion --registro nombre
                            {...register("comentarios",{
                                required:{value:true,message:"Este campo es requerido."},
                                minLength:{value:2,message:"El nombre tiene que ser más grande..."}
                            })}
                        />
                        {
                            errors.comentarios &&
                            <div className="alert alert-danger mt-1p-1">
                                {errors.comentarios.message}
                            </div>
                        }
                </div> 

                </div>     
                <button className="btn btn-primary" type="submit">Agregar</button>       

            </form>
            <br/>  
            <div className="alert alert-success" >

              <ul>

              {Entradas.map(item=>
                
                <li><strong>{item.nombre} {item.apellido1} {item.apellido2} {item.cedula} {item.usuario}</strong></li>
                
                )}
             </ul>
          </div>
{/* 
          <ul>
              {
                  Entradas.map(item=>
                      <li>{item.nombre} </li>  
                      
                  
                        
                  )
              }    
          </ul>         */}

          </div> 
          {/* fin contenedor */}


</Fragment>

    )
  // }
}

export default Formulario;
