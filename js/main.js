const firstName = prompt("Per favore, inserisci il tuo nome:");
const lastName = prompt("Ora il tuo cognome:");
const favColor = prompt("Il tuo colore preferito?");
const age = parseInt(prompt("Inserisci ora la tua età:"));
const bonus =  age + 21;

console.log(
    `
    Il suo nome è ${firstName} , il suo cognome è ${lastName} ,il suo colore preferito è ${favColor} e la sua età è ${age}
    `
)

const password = firstName + lastName + favColor + bonus;

document.getElementById("first-name").innerHTML = `${firstName}`;
document.getElementById("last-name").innerHTML = `${lastName}`;
document.getElementById("fav-color").innerHTML = `${favColor}`;
document.getElementById("age").innerHTML = `${age}`;

document.getElementById("password").innerHTML = `${password}`;