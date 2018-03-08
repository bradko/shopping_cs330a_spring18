"use strict"

class Item {
	constructor(name, quantity, priority, store, category, price) {
		this._name = name
		this._quantity = quantity
		this._priority = priority
		this._store = store
		this._category = category
		this._price = price
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