"use strict"

class Subject {
	constructor() {
		this.handlers = []
	}

	subscribe(fn) {
		this.handlers.push(fn)
	}

	unsubscribe(fn) {
		this.handlers = this.handlers.filter(
			function(item) {
				if (item !== fn) {
					return item;
				}
			}
		);
	}

	publish(msg, someobj) {
		var scope = someobj || window;
		for (let fn of this.handlers) {
			fn(scope, msg)
		}
	}

}

class Item {
	constructor(name, quantity, priority, store, category, price) {
		this._name = name
		this._quantity = quantity
		this._priority = priority
		this._store = store
		this._category = category
		this._price = price
		this._purchased = false
	}

	purchase() {
		this._purchased = true
	}

	unpurchase() {
		this._purchased = false
	}

	get name() { 
		return this._name 
	}

	get quantity() {
		return this._quantity
	}

	get priority() {
		return this._priority
	}

	get store() {
		return this._store
	}

	get category() {
		return this._category
	}

	get price() {
		return this._price
	}
	
	get purchased() {
		return this._purchased
	}

	set name(nv) {
		this._name = nv
	}

	set quantity(nv) {
		this._quantity = nv
	}

	set priority(nv) {
		this._priority = nv
	}

	set store(nv) {
		this._store = nv
	}

	set category(nv) {
		this._category = nv
	}

	set price(nv) {
		this._price = nv
	}

}

class ShoppingList extends Subject{

	constructor() {
		super()
		this._items = []
	}

	getItems() {
		return this._items
	}

	addItem(item) {
		this._items.push(item)
		this.publish("Added Item", this)
	}

	removeItem(item) {
		let index = this._items.indexOf(item)
		if (index > -1){
			this._items.splice(index,1)
		}
		this.publish("Removed Item", this)
	}

}