"use strict"

class ShoppingList {

	constructor() {
		this._items = []
	}

	addItem(item) {
		this._items.push(item)
	}

	removeItem(item) {
		let index = this._items.indexOf(item)
		if (index > -1){
			this._items.splice(index,1)
		}
	}

}