import { observable, makeObservable } from 'mobx'

export default class Item{

    constructor(name) {
        this.name = name
        this.price = 0
        this.quantity = 1

        makeObservable(this, {
            name: observable,
            price: observable,
            quantity: observable
        })
    }
}