
//event listener stops 
//click correct button to go on 
//function adds one more
//reaches 3
//alert "you have won"

let emptyArray = [];

let red = document.querySelector(".red")
let blue = document.querySelector(".blue")
let yellow = document.querySelector(".yellow")
let green = document.querySelector(".green")


let square = document.querySelectorAll(".square");
let start = document.querySelector(".start");
let reset = document.querySelector(".reset");

//turn nodelist into array
let myArray = Array.from(square)

reset.addEventListener("click", function(e){
    e.preventDefault()
    location.reload()
})


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

//light up the squares
function lightUp (){
    for (i = 0; i <= emptyArray.length; i++) 
        if (emptyArray[i] == red) {
            red.style.backgroundColor = "rgb(253, 116, 116)";
        } else if (emptyArray[i] == blue) {
            blue.style.backgroundColor = "rgb(91, 91, 241)";
        } else if (emptyArray[i] == yellow) {
            yellow.style.backgroundColor = "rgb(224, 224, 8)";
        } else if (emptyArray[i] == green) {
            green.style.backgroundColor = "rgb(3, 187, 3)";
        }
        return emptyArray;
    }



function run(e) {
    e.preventDefault();
    shuffle();
    emptyArray.push(myArray[0]);
    lightUp();
    console.log(myArray);
    console.log(emptyArray);

    /*setInterval(() => {
        if (emptyArray[i] == red) {
            red.style.backgroundColor = "red"
        } else if (emptyArray[i] == blue) {
            blue.style.backgroundColor = "blue"
        } if (emptyArray[i] == yellow) {
            yellow.style.backgroundColor = "rgb(187, 187, 8)"
        } else if (emptyArray[i] == green) {
            green.style.backgroundColor = "green"
        }
    }, 2000);*/

    console.log(blue)
    console.log(red)
    console.log(green)
    console.log(yellow)

}

//want to set a timer for unshift so that each will light up seperately 
