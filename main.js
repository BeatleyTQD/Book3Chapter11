//LIGHTNING EXERCISE PART ONE////////////////////////
const dateVisited = "visitDate"
const owed = "amountBilled"
const patient = "patientName"

const doctorBill = {
    officeName: "Dr. Bittenbender's Office",
    streetAddress:"4962 Winding Spring",
    doctorName: "Dr. Bittenbender",
    patientName: "Brandon Wheatley",
    visitDate: "01-01-2020",
    amountBilled: 150,
    dueDate: "02-01-2020"
}

console.log(doctorBill["visitDate"], doctorBill["amountBilled"], doctorBill["patientName"])

console.log(Object.values(doctorBill))
////////////////////////////////////////////////////////


//LIGHTNING EXERCISE PART TWO///////////////////////////

for (const key of Object.keys(doctorBill)) {
    console.log(key)
}


const HTML = document.querySelector("#lightningExercise")

HTML.innerHTML += "<h1>Keys</h1>"
for (const key of Object.keys(doctorBill)) {
    HTML.innerHTML += `<span>${key}</span>`
}

////////////////////////////////////////////////////////
//LIGHTNING EXERCISE PART THREE////////////////////////
const food = document.querySelector(".food")
const favoriteDinner = {
    name: "taco",
    size: "giant",
    weight: "5lb",
    ethnicity: "mexican",
    vegetarian: false
}

food.innerHTML += `<h2>Dinner</h2>`
for (const dinner of Object.entries(favoriteDinner)) {
    food.innerHTML += `<div>${dinner[0]}: ${dinner[1]}</div>`
}
////////////////////////////////////////////////////////

//PRACTICE: CAR SALES///////////////////////////////////