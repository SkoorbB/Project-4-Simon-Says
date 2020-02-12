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

let square = document.querySelectorAll(".square")
let start = document.querySelector(".start")

start.addEventListener("click", run)

function run() {
    console.log(square)
    //for (i = 0; i > square.length; i++) {
       // square[i].random
    //}
}