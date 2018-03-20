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
	constructor(name, quantity, priority, store, category, price, timer) {
		this._name = name
		this._quantity = quantity
		this._priority = priority
		this._store = store
		this._category = category
		this._price = price
		this._timer = timer
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

	setTimer(sl, i) {
		this._timer = setTimeout(function(){ sl.removeItem(i); }, 2500);
	}

	clearTimer() {
		clearTimeout(this._timer)
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

	sortItems(field) {
		let numSwaps = 0	
		let swapped = true

		while (swapped) {
			swapped = false
			for (let i=0; i < this._items.length-1; i++) {
				let current = this._items[i][field]
				let next = this._items[i+1][field]
				let swapem = false

				if (!isNaN(current) && !isNaN(next)) {
					current = Number(current)
					next = Number(next)
				}

				if (isNaN(current) && isNaN(next)) {
					swapem = current.toUpperCase() > next.toUpperCase()
				}

				else {
					swapem = current > next
				}

				if (swapem) {
					swap(this._items, i, i+1)
					numSwaps++
					swapped = true
				}

				current.toString()
				next.toString()
				swapem = false
			}
		}

		if (numSwaps == 0) {
			this._items.reverse()
		}

		function swap(items, firstIndex, secondIndex){
    		var temp = items[firstIndex];
    		items[firstIndex] = items[secondIndex];
    		items[secondIndex] = temp;
		}

		this.publish("Sorted Items", this)
	}

}