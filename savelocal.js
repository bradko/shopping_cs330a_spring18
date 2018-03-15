"use strict"

class LocalStorageSaver{

	constructor(model, jlist){
		let myList = localStorage.getItem(jlist)
		let loadedItems = JSON.parse(myList)
		for (let i of loadedItems) {
			let newItem = new Item(i._name, i._quantity, i._priority, i._store, i._category, i._price, i._timer)
			model.addItem(newItem)
		}
		model.subscribe(this.saveAll)
	}

	saveAll(){
		let jlist = JSON.stringify(list._items)
		localStorage.setItem("brads_list", jlist)
	}
}