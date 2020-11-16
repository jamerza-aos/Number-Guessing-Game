const results = document.getElementById("result");
const rounds = document.getElementById("rounds");
let x4 = document.getElementById("vier");
let x5 = document.getElementById("fünf");
let x6 = document.getElementById("sechs");
let costum = document.getElementById("costum");
let num = document.getElementById("num");
let costum1 = document.getElementById("costum1")

var i = 0;
var num1 = (Math.random() * 100).toFixed(0)
//console.log(num1)
let versuch;


function costum2(){
    if(costum.checked){
        costum1.style.display = "block"
        costum1.style.marginBottom = "5%"
    }else{
        costum1.style.display = "none"
        costum1.style.marginBottom = "5%"
    }
}
costum2();

function guessIt() {
    
    if(x4.checked){
      versuch = 4;
      i++
        rounds.innerHTML =`<h1 style="font-size:30px;"> ${i} / 4</h1> `;
     
         if(num.value == num1){
            results.innerHTML +=`<h1 style="font-size:20px;">you got me in ${num.value}Guesses</h1> `+`<span style="font-size:15px ;  color :red ;">play agin </span>`
             //console.log("richtig")
         }
         else if(num.value < num1) {

             results.innerHTML +=`<h1 style="font-size:20px;"> you need to guess higher than ${num.value}guess..try again</h1> `
             //console.log("nein") 
         }
         else if(num.value > num1){
            results.innerHTML +=`<h1 style="font-size:20px;"> you need to guess lower than ${num.value}guess..try again</h1> `
         }
         
      }
      
      else if (x5.checked){
            versuch = 5;
            i++
              rounds.innerHTML =`<h1 style="font-size:20px;"> ${i} / 5</h1> `;
               if(num.value == num1){
                   
                  results.innerHTML +=`<h1 style="font-size:20px;">you got me in ${num.value}Guesses</h1> `+`<span style="font-size:15px;  color:red;" >play agin </span>`
                   //console.log("richtig")
               }
               else if(num.value < num1) {
      
                   results.innerHTML +=`<h1 style="font-size:20px;"> you need to guess higher than ${num.value}guess..try again</h1> `
                   //console.log("nein") 
               }
               else if(num.value > num1){
                  results.innerHTML +=`<h1 style="font-size:20px;"> you need to guess lower than ${num.value}guess..try again</h1> `
            }
              
       }
      
      
      else if (x6.checked){
            versuch = 6;
            i++
              rounds.innerHTML =`<h1 style="font-size:20px;"> ${i} / 6</h1> `;
               if(num.value == num1){
                   
                  results.innerHTML +=`<h1 style="font-size:20px;">you got me in ${num.value}Guesses</h1> `+`<span style="font-size:15px; color:red">play agin </span>`
                   //console.log("richtig")
               }
               else if(num.value < num1) {
      
                   results.innerHTML +=`<h1 style="font-size:20px;"> you need to guess higher than ${num.value}guess..try again</h1> `
                   //console.log("nein") 
               }
               else if(num.value > num1){
                  results.innerHTML +=`<h1 style="font-size:20px;"> you need to guess lower than ${num.value}guess..try again</h1> `
               } 
    }
    
    
    
    else if(costum.checked) {
        versuch = costum1.value ;
            i++
              rounds.innerHTML =`<h1 style="font-size:20px;"> ${i} / ${versuch}</h1> `;
               if(num.value == num1){
                  results.innerHTML +=`<h1 style="font-size:20px;">you got me in ${num.value}Guesses</h1> `+`<span style="font-size:15px; color:red">play agin </span>`
                   //console.log("richtig")
               }
               else if(num.value < num1) {
      
                   results.innerHTML +=`<h1 style="font-size:20px;"> you need to guess higher than ${num.value}guess..try again</h1> `
                   //console.log("nein") 
               }
               else if(num.value > num1){
                  results.innerHTML +=`<h1 style="font-size:20px;"> you need to guess lower than ${num.value}guess..try again</h1> `
               } 

    }
    if (versuch == i ){
        results.innerHTML +=`<h1 style="font-size:20px; color: red">  Try again </h1> `
        document.getElementById("play1").disabled = true;
    
    }else if (num.value == ""){
        results.innerHTML +=`<h1 style="font-size:20px; color: red"> chose a round und wright a number  </h1> `
        document.getElementById("play1").disabled = true;
    }
    
}   