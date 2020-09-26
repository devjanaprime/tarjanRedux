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
        <button onClick={ this.sellMe }>Sell</button>
      </li>
    ); //end return
  } // end render

  sellMe = () => {
    console.log( 'in sellMe:', this.props.item.id );
  }
} //end class

export default Item;
