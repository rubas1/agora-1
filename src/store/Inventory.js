import { observable, action, makeObservable } from 'mobx'
import  Item  from './Item'


export default class Inventory{
    constructor() {
        this.items = []
        makeObservable(this, {
            items: observable,
            addItem: action,
            buyItem: action,
            editPrice: action
        })

    }
    addItem = (name) => {
        let item = this.items.find(i => {
            if(i.name === name){
                i.quantity++
            }
        })
        if(item === undefined){
            item = new Item(name, 0, 1)
            this.items.push(item)
        }
    }
    
    buyItem = (name) => {
        this.items.forEach(i => {
            if(i.name === name){
                i.quantity--
                if(i.quantity === 0){
                    this.items.remove(i)
                }
            }
        })
    }

    editPrice = (name, price) => {
        this.items.forEach(i => {
            if(i.name === name){
                i.price = price
            }
        })
    }
}

