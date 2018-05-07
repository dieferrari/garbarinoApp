import React from 'react';

export default class App extends React.Component {

//con componentDidMount voy a pedir por AXIOS todos  los productos a '/api/products' y lo paso al estado con setState (armar el estado primero). En el estado inicializarlo con un arreglo vacio de products para poder renderear la pagina igual aun sin prooductos.

//CONVERTIR A APP EN CONTAINER

  render(){
    return (
      <div>
        <h1>GARBARINO APP</h1>
      </div>
    )
  }
}