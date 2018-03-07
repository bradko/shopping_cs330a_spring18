"use strict"

var list = new ShoppingList()
var view = new ShoppingView(list)

function clickedon() {
	let name = document.querySelector("#name")
	let store = document.querySelector("#store")
	let quantity = document.querySelector("#quantity")
	let price = document.querySelector("#price")
	let priority = document.querySelector("#priority")
	let category = document.querySelector("#category")

	let newItem = new Item(name.value, quantity.value, priority.value, store.value, category.value, price.value)
	list.addItem(newItem)
}

function cbclick(row, item) {
	let current = "row" + row
	let str = row.toString()
	let rw = document.querySelector("#" + current)
	let check = document.getElementById(str)
	if (check.checked) {
		rw.style.textDecorationLine = "line-through"	
		item.purchase()
		rw.className = "Default"
	}
	else {
		rw.style.textDecorationLine = "none"
		item.unpurchase()
		rw.className = view.getColor(item)
	}
} 
