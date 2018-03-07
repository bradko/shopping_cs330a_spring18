"use strict"

class ShoppingView {
	constructor(model){
		let self = this
		model.subscribe(function(a,b){
			self.redrawTable(a,b)
		})
	}

	redrawTable(shoppingList, msg){
		let vars = ["name", "quantity", "store", "category", "price"]
		let mytable = document.querySelector("#listtable")
		mytable.innerHTML = ""
		let items = shoppingList.getItems()
		let counter = 1

		for (let i of items){
			let color = this.getColor(i)
			let tr = document.createElement("tr")
			tr.className = color
			let id = "row" + counter
			tr.id = id 	

			let cb = document.createElement("input")
			cb.type = "checkbox"
			cb.id = counter
			var timer
			cb.onclick = function checkbox(){
				cbclick(cb.id, i)
				if(cb.checked){
					timer = setTimeout(function(){ shoppingList.removeItem(i); }, 2500);
				}
				else{
					clearTimeout(timer)
				}
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

	getColor(item){
		let color = "None"
			if (item.priority == "Low"){
				color = "success" 
			}
			if (item.priority == "Medium"){
				color = "warning"	
			}
			if (item.priority == "High"){
				color = "danger"
			}
		return color
	}

}
