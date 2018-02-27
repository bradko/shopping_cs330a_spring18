"use strict"

function clickedon() {
	let name = document.querySelector("#name")
	let store = document.querySelector("#store")
	let quantity = document.querySelector("#quantity")
	let price = document.querySelector("#price")
	let priority = document.querySelector("#priority")
	let category = document.querySelector("#category")

	let mytable = document.querySelector("#listtable")

	let color = "None"
	if (priority.value == "Low"){
		color = "success"
	}
	if (priority.value == "Medium"){
		color = "warning"	}
	if (priority.value == "High"){
		color = "danger"
	}

	let tr = document.createElement("tr")
	tr.className = color 	

	let cb = document.createElement("input")
	cb.type = "checkbox"
	tr.appendChild(cb)

	let td1 = document.createElement("td")
	td1.align = "center"
	td1.innerHTML = name.value
	tr.appendChild(td1)

	let td2 = document.createElement("td")
	td2.innerHTML = quantity.value
	tr.appendChild(td2)

	let td3 = document.createElement("td")
	td3.innerHTML = store.value
	tr.appendChild(td3)

	let td4 = document.createElement("td")
	td4.innerHTML = category.value
	tr.appendChild(td4)

	let td5 = document.createElement("td")
	td5.innerHTML = price.value
	tr.appendChild(td5)

	mytable.appendChild(tr)

}
