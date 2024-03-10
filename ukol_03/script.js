const nejvyssiCislo = (cislo1, cislo2, cislo3) => {
    if ((cislo1 >= cislo2) && (cislo1 >= cislo3)) {
        return (cislo1)
    } 
    if ((cislo2 >= cislo1) && (cislo2 >= cislo3)) {
        return (cislo2)
    } 
    if ((cislo3 >= cislo1) && (cislo3 >= cislo2)) {
        return (cislo3)
    }
   }

const cislo = nejvyssiCislo (1,2,3)

console.log (cislo)
