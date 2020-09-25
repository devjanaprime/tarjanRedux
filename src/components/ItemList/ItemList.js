import React, { Component } from 'react';
import Item from '../Item/Item';

class ItemList extends Component{
  state = {
    test: null
  }

  componentDidMount(){
    console.log( 'ItemList did mount' );
  }

  render(){
    return (
      <div>
        <h3>ItemsList</h3>
       <ul>
         { this.props.items.map( ( item, key )=> <Item item={ item } key={ key }/> ) }
       </ul>
      </div>
    ); //end return
  } // end render
} //end class

export default ItemList;
