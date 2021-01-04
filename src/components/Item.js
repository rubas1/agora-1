import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
    constructor(){
        super()
        this.state ={
            newPrice: ""
        }
    }
    buyItem = () => {
      this.props.market.buyItem(this.props.item.name)
    }

    updatePriceState = (e) => {
        this.setState({newPrice: e.target.value})
    }

    updatePrice = () => {
        this.props.market.editPrice(this.props.item.name, this.state.newPrice)
        this.setState({newPrice: ""})
    }

    render() {
      let item = this.props.item
      return (
          <div className="item-div">
              <p className="item-name">{item.name} for {item.price}$ - available at store: {item.quantity}
                <button className="buy" onClick={this.buyItem}>buy</button> </p>
              <input className="new-price" placeholder="New price..." value={this.state.newPrice} onChange={this.updatePriceState}></input>
              <button className="update-price" onClick={this.updatePrice}>update</button>
          </div>
        )
    }
  }
  
  export default observer(Item);