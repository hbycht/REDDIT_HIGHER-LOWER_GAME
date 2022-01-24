let prenames = ["Simon", "Fabian", "Horst", "Werner"];
let lastnames = ["Faedrich", "Faedrich", "Winkler", "Müller"]
let fullNames = []

for(let i = 0 ; i < lastnames.length; i++){

    let composedName = prenames[i] + " " + lastnames[i];
    fullNames.push(composedName);

}

console.log(fullNames);

//Result: Array mit Vor und nachnamen in einem String! Es soll ein Array mit 4 Ganz namen raus kommen (fullNames) kleiner Tipp dazu wird push() verwandt