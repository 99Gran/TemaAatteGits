/////////////////////////////// OPPGAVE 1

// Gammel kode
/*
function fortellEnVits() {
    console.log("Ka sa den ene tørrfesken te den andre?");
    console.log("long time no sea"); 
  }*/

// Ny kode

const fortellEnVits = () => {}
console.log("Ka sa den ene tørrfesken te den andre?");
console.log("Long time no sea");
// NINI, YOU MADE IT


/////////////////////////////// OPPGAVE 2

// Gammel kode
/*
function addMeToTheSong(name) {
  console.log("Ground Control to Major " + name);
} */

// Ny kode

const addMeToTheSong = (name) =>
'Ground control to Major ' + name
console.log(addMeToTheSong('Tom'))
// NINI, YOU MADE IT


/////////////////////////////// OPPGAVE 3

const tallene = [12, 82, 45, 56, 67, 4, 34, 32, 95, 89]

/*const underAatti = (tallene) => {
    age >= 20;
}*/


/////////////////////////////// OPPGAVE 4

const musikere = [
  {navn: "Annifrid", rating: 6},
  {navn: "Agnethe", rating: 3},
  {navn: "Benny", rating: 5},
  {navn: "Bjørn", rating: 2}
]

const merEnnFire = musikere.filter(element => element.rating > 4);

console.log(merEnnFire)
// NINI, YOU MADE IT


/////////////////////////////// OPPGAVE 5

const skurker = [
  {navn: "Billy the Kid", egenskap: "Rask på avtrekkeren"},
  {navn: "Jesse James", egenskap: "Iskald"},
  {navn: "Brødrene Dalton", egenskap: "Jobber godt sammen"}
]

const godPaa = skurker.filter(element => element.egenskap < 'Jessie James')

console.log(godPaa)
//HALVVEIS FERDIG (Får frem navn og egenskap, må ta vekk navn)


/////////////////////////////// OPPGAVE 6

const ulMatretter = document.querySelector("#ulMatretter")

const matretter = ["Kapteinens favoritt", "Kjøtt utklemt i panne", "Biff Stroganof"]

const meny = (matretter) => {
  let ul = document.createElement('ul')
  let li = document.createElement('li')
  ul.innerHTML = matretter
  ul.appendChild(li)
  matretter.appendChild(li)
  newArray.map (Element = matretter(Element))
}

console.log(matretter)
// NINI, YOU MADE IT


/////////////////////////////// OPPGAVE 7

const words1 = ["The", "way", "you"]
const words2 = ["make", "me", "feel"]

const theTitle = [].concat(words1, words2);

console.log(theTitle)
// NINI, YOU MADE IT


/////////////////////////////// OPPGAVE 8

let sitat = ["har", "gull", "i"]
sitat = (sitat + ' munn')

console.log(sitat)
//HALVVEIS FERDIG