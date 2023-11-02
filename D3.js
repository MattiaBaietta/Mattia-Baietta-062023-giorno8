const starWarsCharacters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 277,
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male"
  },
  {
    name: "C-3PO",
    height: 167,
    mass: 75,
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a"
  },
  {
    name: "R2-D2",
    height: 96,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a"
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male"
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female"
  },
  {
    name: "Owen Lars",
    height: 178,
    mass: 120,
    hair_color: "brown, grey",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "52BBY",
    gender: "male"
  },
  {
    name: "Beru Whitesun lars",
    height: 165,
    mass: 75,
    hair_color: "brown",
    skin_color: "light",
    eye_color: "blue",
    birth_year: "47BBY",
    gender: "female"
  },
  {
    name: "R5-D4",
    height: 97,
    mass: 32,
    hair_color: "n/a",
    skin_color: "white, red",
    eye_color: "red",
    birth_year: "unknown",
    gender: "n/a"
  },
  {
    name: "Biggs Darklighter",
    height: 183,
    mass: 84,
    hair_color: "black",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "24BBY",
    gender: "male"
  },
  {
    name: "Obi-Wan Kenobi",
    height: 182,
    mass: 77,
    hair_color: "auburn, white",
    skin_color: "fair",
    eye_color: "blue-gray",
    birth_year: "57BBY",
    gender: "male"
  }
];

/* ESERCIZIO 1
  Crea una variabile chiamata "characters" e assegnale un array vuoto
*/
let characters = []

/* ESERCIZIO 2
  Utilizzando un ciclo for, cicla l'array "starWarsCharacters".
  Dovrai accedere alla proprietà "name" di ogni oggetto in esso contenuto, e inserirla nell'array "characters" creato precedentemente.
  Come risultato dovresti ottenere qualcosa di simile: ["Luke Skywalker", "C-3PO", "R2-D2", etc..]
*/
for(let i=0;i<starWarsCharacters.length;i++){
  
  characters[i]=starWarsCharacters[i].name
  
}
console.log(characters)



/* ESERCIZIO 3
  Seguendo i passaggi precedenti crea un nuovo array chiamato "femaleCharacters" e inserisci al suo interno tutti gli oggetti femminili.
*/
let femaleCharacters = []
let i2=0
let contatore=0
while(i2<starWarsCharacters.length){
  if(starWarsCharacters[i2].gender==="female")
  {
    femaleCharacters[contatore] = starWarsCharacters[i2]
    i2++
    contatore++
  }
  else{
    i2++
  }
}
console.log(femaleCharacters)


/* ESERCIZIO 4
  Crea un oggetto "eyeColor" che abbia le seguenti proprietà: blue, yellow, brown, red, blue-gray.
  Ad ognuna di queste proprietà assegna come valore un array vuoto.
*/
let eyeColor = {
  blue:[],
  yellow:[],
  brown:[],
  red:[],
  "blue-gray":[]
};

/* ESERCIZIO 5
  Utilizza uno switch statement per inserire uno ad uno gli oggetti dei personaggi di "starWarsCharacters" negli array relativi al colore degli occhi precedentemente creati.
  Ogni personaggio dovrà finire nell'array corrispondente al suo colore degli occhi (al valore della sua proprietà "eye_color").
*/
let bluevar=0
let yellowvar=0
let brownvar=0
let redvar=0
let grayvar=0

for(let i3=0;i3<starWarsCharacters.length;i3++){
  switch(starWarsCharacters[i3].eye_color){
    case "blue":
      eyeColor.blue[bluevar]=starWarsCharacters[i3]
      bluevar++
      break
      case "yellow":
        eyeColor.yellow[yellowvar]=starWarsCharacters[i3]
        yellowvar++
        break
        case "brown":
          eyeColor.brown[brownvar]=starWarsCharacters[i3]
          brownvar++
          break
          case "red":
            eyeColor.red[redvar]=starWarsCharacters[i3]
            redvar++
            break
            case "blue-gray":
              eyeColor["blue-gray"][grayvar]=starWarsCharacters[i3]
              break

  }
  
}
console.log(eyeColor.blue)
console.log(eyeColor.yellow)
console.log(eyeColor.brown)
console.log(eyeColor.red)
console.log(eyeColor["blue-gray"])
/* ESERCIZIO 6
  Usa un while loop per calcolare la massa totale dell'equipaggio. Salvala in una variabile chiamata "crewMass".
*/
let i4=0
let massatot=0
while(i4<starWarsCharacters.length){
  massatot+=starWarsCharacters[i4].mass
  i4++
}
console.log(massatot)

/* ESERCIZIO 7
  Crea uno if/else statement per rivelare la tipologia di carico, utilizzando la massa totale, di un'ipotetica astronave contenente i personaggi dell'array "starWarsCharacters".

  Se la massa è inferiore a 500 stampa in console: "Ship is under loaded"
  Se la massa è superiore a 500 stampa in console: "Ship is half loaded"
  Se la massa è superiore a 700 stampa in console: "Warning: Load is over 700"
  Se la massa è superiore a 900 stampa in console: "Critical Load: Over 900"
  Se la massa è superiore a 1000 stampa in console: "DANGER! OVERLOAD ALERT: escape from ship now!"

  Una volta fatto, modifica la massa di qualche elemento dell'equipaggio e vedi se riesci ad ottenere un messaggio diverso.
*/

if(massatot<=500){
  console.log("Ship is under loaded")

}else if(massatot>500 && massatot<=700){
  console.log("Ship is half loaded")
}else if(massatot>700 && massatot<=900){
  console.log("Warning: Load is over 700")
}else if(massatot>900 && massatot<=1000){
  console.log("Critical Load: Over 900")
}else
{
  console.log("DANGER! OVERLOAD ALERT: escape from ship now!")
}

/* ESERCIZIO 8
  Usa un for loop per cambiare il valore della proprietà "gender" di alcuni personaggi dal valore "n/a" a "robot" (Tip: puoi effettuare la riassegnazione del valore corrispondente o creare un nuovo array)
*/

for(let i5=0;i5<starWarsCharacters.length;i5++){
  if(starWarsCharacters[i5].gender==="n/a")
  {
    starWarsCharacters[i5].gender="robot"
    console.log(starWarsCharacters[i5])
  }
  
}

/* --EXTRA-- ESERCIZIO 9
  Utilizzando gli elementi presenti nell'array "femaleCharacters" rimuovi dall'array "characters" le stringhe corrispondenti a personaggi con lo stesso nome.
  Una volta fatto crea un console.log per controllare la proprietà length di "characters" prima e dopo l'operazione.
*/


console.log(characters.length)
console.log(femaleCharacters.length)
for(let i6=0;i6<femaleCharacters.length;i6++){

  for(let i7=0;i7<characters.length;i7++){

    if(femaleCharacters[i6].name==characters[i7])
    {
      characters.splice(i7,1)
    }
    else{

    }
    
  }
  
}
console.log(characters.length)
console.log(characters)
/* --EXTRA-- ESERCIZIO 10
  Crea una funzionalità che selezioni un elemento casuale dall'array "starWarsCharacters" e ne stampi in console le proprietà in modo discorsivo (a tuo piacimento).
*/
let randomv
while(starWarsCharacters.length){
  randomv=Math.floor(Math.random() * starWarsCharacters.length)
  console.log(starWarsCharacters[randomv])
  starWarsCharacters.splice(randomv,1)
  
  
}
