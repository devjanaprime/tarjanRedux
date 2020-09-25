import React, { Component } from 'react';

class Item extends Component{
  state = {
    test: null
  }

  componentDidMount(){
    console.log( 'Item did mount' );
  }

  render(){
    return (
      <li>
        { this.props.item.size } { this.props.item.color }: { this.props.item.description }
      </li>
    ); //end return
  } // end render
} //end class

export default Item;
