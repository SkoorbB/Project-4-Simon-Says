//press start - function
//random square will light up
           // v
//uses queryselector (".square") - grabs array
        // v
//.random light up

//function "light up"
//if (a certain square)
//.square:hover lighter background 

//event listener stops 
//click correct button to go on 
//function adds one more
//reaches 3
//alert "you have won"

let emptyArray = [];

let square = document.querySelectorAll(".square");
let start = document.querySelector(".start");        

//turn nodelist into array
let myArray = Array.from(square)

start.addEventListener("click", run);

//fisher yates shuffle array
//https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle() {
    let counter = myArray.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = myArray[counter];
        myArray[counter] = myArray[index];
        myArray[index] = temp;
    }

    return myArray;
}

function run() {
    shuffle();
    emptyArray.push(myArray[0]);
    console.log(myArray)
    console.log(emptyArray)
    
    }
