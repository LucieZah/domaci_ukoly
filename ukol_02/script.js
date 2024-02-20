// Vstup
const zadaneJmeno = prompt ("Zadejte vase krestni jmeno (bez diakritiky)", "Lenka")
const zadanePrijmeni = prompt ("Zadejte vase prijmeni (bez diakritiky)", "Laskoradova")

// Zpracovani
const jmeno = zadaneJmeno.trim()
const prijmeni = zadanePrijmeni.trim()
const zkraceneJmeno = prijmeni.slice(0,5)+jmeno.slice(0,3)
const uzivatelskeJmeno = zkraceneJmeno.toLowerCase()
const domena = "@fit.cvut.cz"

// Vystup
document.body.innerHTML += `${uzivatelskeJmeno}${domena}`