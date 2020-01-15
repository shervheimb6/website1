
let element = document.querySelector("button");

function turnButtonRed (){
	element.style.backgroundColor = "red";
  element.style.color = "white";
  element.innerHTML = "This is your surprise, the button changed!"; 
  
}

element.onclick = turnButtonRed;
/*document.querySelector('button').innerHTML = 'Click me now!!! JK, dont!!!';*/

/*function myFunction() {
    var change = document.getElementById("toggle");
    if (change.innerHTML === "on")
    {
        change.innerHTML = "off";
    }
    else {
        change.innerHTML = "on";
    }
}*/


