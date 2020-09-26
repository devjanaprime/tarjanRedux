import React, { Component } from 'react';
import axios from 'axios';
import ItemList from '../ItemList/ItemList';
import { connect } from 'react-redux';

class Inventory extends Component{
  state = {
    currentItem: {
      color: 'red',
      size: 'tiny',
      description: null
    },
    items: []
  }

  addItem = () =>{
    console.log( 'in addItem' );
    axios({
      method: 'POST',
      url: '/item',
      data: this.state.currentItem
    }).then( ( response )=>{
      console.log( 'back from POST with:', response );
      this.getItems();
    }).catch( ( err )=>{
      console.log( err );
      alert( 'problem...' );
    }) 
  } //end function

  componentDidMount(){
    console.log( 'Inventory did mount' );
    this.getItems();
  }

  getItems = () =>{
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
  } // end function

  handleChangeFor = ( event, property ) =>{
    console.log( 'in handleChangeFor:', property, event.target.value );
    this.setState({
      currentItem: {...this.state.currentItem ,
        [ property ]: event.target.value }
    })
  }

  render(){
    return (
      <div className="Inventory">
        <header className="Inventory-header">
          <h1>Inventory</h1>
          <div>
            Today's Sales: { this.props.reduxState }
          </div>
          <div>
            <select onChange={ ( event ) => this.handleChangeFor( event, "size" ) }>
              <option>tiny</option>
              <option>small</option>
              <option>medium</option>
              <option>large</option>
              <option>huge</option>
            </select>
            <select onChange={ ( event ) => this.handleChangeFor( event, "color" ) }>
              <option>red</option>
              <option>orange</option>
              <option>yellow</option>
              <option>green</option>
              <option>glue</option>
              <option>purple</option>
            </select>
            <input type="text" placeholder="description" onChange={ ( event ) => this.handleChangeFor( event, "description" ) }></input>
            <button onClick={ this.addItem }>Add Item</button>
          </div>
          <ItemList items={ this.state.items } />
        </header>
      </div>
    ); //end return
  } // end render
} //end class

const putStateOnProps = ( reduxState ) => ({
  reduxState
});

export default connect(putStateOnProps)(Inventory);
