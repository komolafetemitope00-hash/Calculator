

function appendToResult(char){
if (result.innerHTML == 0) {
    result.innerHTML = 1
} 
else {  
   result.innerHTML += char 
}  

}
 function calculate(){
            let res = eval(result.innerHTML)
            // textScreen2.innerHTML = textScreen.innerHTML
            result.innerHTML = res
        }

        function clearAll(){
            result.innerHTML = 0
            result.innerHTML = ' '
        }

function deletechar(){
    if (result.innerHTML.length == 1) {
        result.innerHTML = 0
        clearAll()
    } 
    else {
          result.innerHTML = result.innerHTML.slice(0, -1)
    }
  
}


// function appendToResult(value) {
//   const display = document.getElementById("result");
//   let current = display.innerHTML;

//   if (value === "AC") {
//     display.innerHTML = "0";
//   } else if (value === "delete") {
//     display.innerHTML = "0";
//   } else if (value === "=") {
//     display.innerHTML = eval(current);
//   } else if (current === "0") {
//     display.innerHTML = value;
//   } else {
//     display.innerHTML += value;
//   }
// }


