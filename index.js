const prompt = require("prompt-sync")();


let number_P = Number(prompt("enter number of bizza you have : "))
let number_B = Number(prompt("enter number of drinks you have : "))
let number_D = Number(prompt("enter number of dessert you have : "))

const p_pizza = 65
const p_drinks = 10
const p_dessert = 12
let P_total = number_P*p_pizza
let B_total = number_B*p_drinks
let D_total = number_D*p_dessert

let total = P_total + B_total + D_total

let discount = total * 0.1
let discont_2 = total - discount
let service = discont_2 * 0.05


let total_F = total - discount + service



console.log("total demand : ", total," DH ");
console.log("today is the first day , you have a 10% discount : +" ,discount," DH " );
console.log("the service fee you are required to pay is : ", service.toFixed(2)," DH ");


console.log("total : ", total_F.toFixed(2)," DH ");




let montant_paye = prompt("enter the amount received from the customer : ")
let montant_rendu =montant_paye - total_F 



console.log("================================================")
console.log("..................payment slip..................")
console.log("================================================")
console.log("serveur : mohamed")
console.log("produit    ;    Qte     ;     prix    ;    totale   ")
console.log("------------------------------------------------")
console.log("pizza...........",number_P ,"..........",p_pizza,"......",P_total )
console.log("drinks..........",number_B  ,"..........",p_drinks,"........" ,B_total )
console.log("dessert.........",number_D  ,"..........",p_dessert,".......",D_total )
console.log("------------------------------------------------")
console.log("sous_total:..............................",total        )
console.log("discount(10%):..........................",discount.toFixed(2)    )
console.log("service price:.........................", service .toFixed(2)   )
console.log("------------------------------------------------")
console.log("total: ....................................",total_F)
console.log("montant paye: .............................",montant_paye)
console.log("montant arendu: ..........................",montant_rendu.toFixed(2))













