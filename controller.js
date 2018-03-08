"use strict"

var list = new ShoppingList()
var view = new ShoppingView(list)

var myList = localStorage.getItem("brads_list")
let loadedItems = JSON.parse(myList)
for (let i of loadedItems) {
	let newItem = new Item(i._name, i._quantity, i._priority, i._store, i._category, i._price, i._timer)
	list.addItem(newItem)
}

function clickedon() {
	let name = document.querySelector("#name")
	let store = document.querySelector("#store")
	let quantity = document.querySelector("#quantity")
	let price = document.querySelector("#price")
	let priority = document.querySelector("#priority")
	let category = document.querySelector("#category")
	var timer = ""

	let newItem = new Item(name.value, quantity.value, priority.value, store.value, category.value, price.value, timer.value)
	list.addItem(newItem)
	
	let jlist = JSON.stringify(list._items)
	localStorage.setItem("brads_list", jlist)
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

function sortList(field){
	list.sortItems(field)
}
