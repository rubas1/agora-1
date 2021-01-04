import React, { Component } from 'react';
import { observer } from 'mobx-react'
import Item from './Item';
import '../style/Market.css';

class Market extends Component {
  constructor() {
    super()
    this.state = {
      newItem:{
        name: "",
        price: 0,
        quantity: 0
      }
    }
  }
  handleInput = (e) =>{
    let item = {...this.state.newItem}
    item.name = e.target.value
    this.setState({
      newItem: item
    })
  }

  addItem = () =>{
    this.props.market.addItem(this.state.newItem.name)
    this.setState({newItem: {name: "", price: 0, quantity: 0}})
  }

  render() {
    return (
      <div className="market-container"> <h3>Add new item:</h3>
        <input className="item-name" onChange={this.handleInput} value={this.state.newItem.name} placeholder="enter item name..."/>
        <button onClick={this.addItem}>Add</button>
        <div className="items-container">
        <h3>Items in market:</h3>
          {this.props.market.items.map((i,ind) => <Item item={i} key={ind} market={this.props.market}/>)}
        </div>
      </div>
    );
  }
}

export default observer(Market);
