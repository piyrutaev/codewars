function asd(param) {
    // let a = {
    // "jabroni":	"Patron Tequila",
    // "school Counselor":	"Anything with Alcohol",
    // "programmer":	"Hipster Craft Beer",
    // "bike Gang Member":	"Moonshine",
    // "politician":	"Your tax dollars",
    // "rapper":	"Cristal",
    // "else":	"Beer"
    // }

    // return a[param.toLowerCase()] ? a[param.toLowerCase()] : a['else'];

    let a = {
        "jabroni":	"Patron Tequila",
        "school counselor":	"Anything with Alcohol",
        "programmer":	"Hipster Craft Beer",
        "bike gang member":	"Moonshine",
        "politician":	"Your tax dollars",
        "rapper":	"Cristal",
        }

        return a[param.toLowerCase()] || 'Beer'
}

function qwe() {
    console.log(asd("School Counselo")); 
}

qwe();
