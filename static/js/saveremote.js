"use strict"

class RemoteStorageSaver{

	constructor(model) {
		let myList = fetch("/getlist")
		.then(function(response) {
			return response.json()
		})
		.then(function(myList) {

			if (myList != "") {

				let loadedItems = JSON.parse(myList)

				for (let i of loadedItems) {
					let newItem = new Item(i._name, i._quantity, i._priority, i._store, i._category, i._price, i._timer)
					model.addItem(newItem)
				}
			}
		})
		model.subscribe(this.saveAll)
		
	}

	saveAll() {
		let config = {}
		config.body = JSON.stringify(list._items)
		config.method = 'POST'
		config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json' }
		
		fetch("/savelist", config)
	}
}