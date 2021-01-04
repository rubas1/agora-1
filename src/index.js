import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Inventory from './store/Inventory'
import Item from './store/Item'


let item1 = new Item("Item 1")
let item2 = new Item("Item 2")
let item3 = new Item("Item 3")
let inventory = new Inventory() 
inventory.addItem(item1.name)
inventory.addItem(item2.name)
inventory.addItem(item3.name)

ReactDOM.render(
  <App market={inventory}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
