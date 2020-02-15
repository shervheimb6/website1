
let element = document.querySelector("button");

function turnButtonRed (){
  element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "This is your surprise, the button changed!"; 
  
}

element.onclick = turnButtonRed;



