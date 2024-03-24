const justFood = pocetLidi => {
    const cena1 = pocetLidi * 500
    return ("catering od Just Food pro " + pocetLidi + " lidi za " + cena1 + " Kc")
}


const yourMama = pocetLidi => {
    const cena1 = pocetLidi * 1000
    return ("catering od Your Mama pro " + pocetLidi + " lidi za " + cena1 + " Kc")
}


const flavourHaven = pocetLidi => {
    const cena1 = pocetLidi * 2000
    return ("catering od Flavour Haven pro " + pocetLidi + " lidi za " + cena1 + " Kc")
}



const createEvent = (nazevUdalosti, pocetLidi, catering) => {
    return ("Udalost " + nazevUdalosti + " s " + catering(pocetLidi))
}


console.log(createEvent("Inaugurace prezidenta", 50, flavourHaven))