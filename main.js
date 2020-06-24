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
    food.innerHTML += `<div>${dinner[0]}: ${dinner[1]}</div><hr>`
}
////////////////////////////////////////////////////////

//PRACTICE: CAR SALES///////////////////////////////////
const carSalesHTML = document.querySelector("#carSales")
const salesByWeek = [
    {
        "vehicle": {
            "year": 2013,
            "model": "Tanex",
            "make": "Tamp-dax",
            "color": "quartz"
        },
        "sales_id": "782a23fd-8b83-4497-b9a1-41fd9b15648e",
        "sales_agent": {
            "mobile": "1-584-162-7444",
            "last_name": "Larkin",
            "first_name": "Tiara",
            "email": "ready@gmail.com"
        },
        "purchase_date": "2017-06-07",
        "gross_profit": 210,
        "credit": {
            "credit_provider": "United Services Automobile Assoc.",
            "account": "491697193540559"
        }
    },
    {
        "vehicle": {
            "year": 2012,
            "model": "Volttanphase",
            "make": "Tinlotis",
            "color": "french fuchsia"
        },
        "sales_id": "c6775819-5d17-40db-94f4-00425db590ee",
        "sales_agent": {
            "mobile": "1-573-820-3780",
            "last_name": "Schulist",
            "first_name": "Vada",
            "email": "davin@outlook.com"
        },
        "purchase_date": "2017-08-06",
        "gross_profit": 1886.61,
        "credit": {
            "credit_provider": "TD Group US Holding",
            "account": "494781657570"
        }
    },
    {
        "vehicle": {
            "year": 2013,
            "model": "Lexi-ton",
            "make": "Ware-com",
            "color": "metallic brown"
        },
        "sales_id": "d10631e7-24ca-414b-ac0f-34b286a30f14",
        "sales_agent": {
            "mobile": "1-356-831-5782",
            "last_name": "Leannon",
            "first_name": "Geovanni",
            "email": "need@hotmail.com"
        },
        "purchase_date": "2017-12-27",
        "gross_profit": 154.91,
        "credit": {
            "credit_provider": "State Street Corporation",
            "account": "546417363501851"
        }
    },
    {
        "vehicle": {
            "year": 2011,
            "model": "Onto-zun",
            "make": "Strongzoom",
            "color": "medium slate blue"
        },
        "sales_id": "586bf9d9-67c2-46c7-a6d1-de8484f6c474",
        "sales_agent": {
            "mobile": "774.020.0247",
            "last_name": "Lang",
            "first_name": "Jovani",
            "email": "spell55@yahoo.com"
        },
        "purchase_date": "2017-03-05",
        "gross_profit": 814.49,
        "credit": {
            "credit_provider": "M&T Bank Corporation",
            "account": "34730046974022"
        }
    },
    {
        "vehicle": {
            "year": 2014,
            "model": "Blue-run",
            "make": "Kon-flex",
            "color": "lumber"
        },
        "sales_id": "a5358cb3-6d47-4adb-a232-d5c5d91e25ec",
        "sales_agent": {
            "mobile": "886.374.3898",
            "last_name": "Feil",
            "first_name": "Kory",
            "email": "ducimus@outlook.com"
        },
        "purchase_date": "2017-02-08",
        "gross_profit": 587.52,
        "credit": {
            "credit_provider": "Atlantic Bank",
            "account": "601149379893233"
        }
    }
]

salesByWeek.forEach(sale => {
    carSalesHTML.innerHTML += `<h1>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h1>` 

    for (const vehicle of Object.entries(sale.vehicle)) {
        carSalesHTML.innerHTML += `<div>${vehicle[0]}: ${vehicle[1]}</div>`
    }
    
    carSalesHTML.innerHTML += `<h3>Profit: $${sale.gross_profit}</h3>`
    carSalesHTML.innerHTML += "<hr/>"
});