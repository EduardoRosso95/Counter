
let counter = 0;
const labeltext = document.getElementById("label-counter").textContent; 
console.log("ciao");

function increment(){


   
   counter ++;

   labeltext.textContent = counter;
   

}

function decrement(){

    counter --;


}