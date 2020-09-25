import React, { Component } from 'react';
import axios from 'axios';
import ItemList from '../ItemList/ItemList';

class Inventory extends Component{
  state = {
    items: []
  }

  componentDidMount(){
    console.log( 'Inventory did mount' );
    axios({
      method: 'GET',
      url: '/item'
    }).then( ( response )=>{
      console.log( 'back from GET:', response );
      this.setState({
        items: response.data
      })
    }).catch( ( err )=>{
      console.log( err );
      alert( 'nope' );
    })
  }

  render(){
    return (
      <div className="Inventory">
        <header className="Inventory-header">
          <h1>Inventory</h1>
          <div>
            <select>
              <option>tiny</option>
              <option>small</option>
              <option>medium</option>
              <option>large</option>
              <option>huge</option>
            </select>
            <select>
              <option>red</option>
              <option>orange</option>
              <option>yellow</option>
              <option>green</option>
              <option>glue</option>
              <option>purple</option>
            </select>
            <input type="text" placeholder="description"></input>
            <button>Add Item</button>
          </div>
          <ItemList items={ this.state.items } />
        </header>
      </div>
    ); //end return
  } // end render
} //end class

export default Inventory;
