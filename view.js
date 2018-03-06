"use strict"

class View {
	constructor(model){
		this.model = model
		model.subscribe(this.redrawTable.bind(this))
	}

	redrawTable(shoppingList, msg){
		let vars = ["name", "quantity", "store", "category", "price"]
		let mytable = document.querySelector("#listtable")
		mytable.innerHTML = ""
		let items = shoppingList.getItems()
		let counter = 1

		for (let i of items){
			let color = "None"
			if (i.priority == "Low"){
				color = "success" 
			}
			if (i.priority == "Medium"){
				color = "warning"	
			}
			if (i.priority == "High"){
				color = "danger"
			}

			let tr = document.createElement("tr")
			tr.className = color
			let id = "row" + counter
			tr.id = id 	

			let cb = document.createElement("input")
			cb.type = "checkbox"
			cb.id = counter
			cb.onclick = function checkbox(){
				cbclick(cb.id, i)
			}
			tr.appendChild(cb)

			for (let v of vars) {
				let td = document.createElement("td")
				td.align = "center"
				td.innerHTML = i[v]
				tr.appendChild(td)
			}

			mytable.appendChild(tr)
			
			if (i.purchased) {
				cb.checked = true
				cbclick(cb.id, i)
			}

			counter++
		}
	}

}
