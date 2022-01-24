let numbers = [21, 64, 16, 32, 96, 80];
let sortedNumbers = []
let Speicher = []
let Speicher1 =[]
let index = 0
let indexspeicher = 0


for(let i = 0; i < numbers.length ; i++){

    if(numbers[index] > numbers[index + i]){
        Speicher1.push(numbers[i+1])
    }
    if(i = numbers.length){

       // Speicher.push(Speicher1)
        for(let i = 0; i <= Speicher1.length ; i++) {

            if (Speicher1[indexspeicher] > Speicher1[indexspeicher + i]) {
                Speicher1.push(Speicher1[indexspeicher + i])
            }
        }
    }
    index++
}
