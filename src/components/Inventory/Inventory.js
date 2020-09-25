import React, { Component } from 'react';
import axios from 'axios';

class Inventory extends Component{
  state = {
    test: null
  }

  componentDidMount(){
    console.log( 'Inventory did mount' );
    axios({
      method: 'GET',
      url: '/item'
    }).then( ( response )=>{
      console.log( 'back from GET:', response );
    }).catch( ( err )=>{
      console.log( err );
      alert( 'nope' )
    }) //end axios
  } //end componentDidMount

  render(){
    return (
      <div className="Inventory">
        <header className="Inventory-header">
          <h1>Inventory</h1>
        </header>
      </div>
    ); //end return
  } // end render
} //end class

export default Inventory;
