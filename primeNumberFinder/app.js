const input = document.getElementById("input");
const result = document.getElementById("result");
const button = document.getElementById("button");

button.addEventListener("click", () => {
  const number = input.value;

  for (let index = 2; index < number; index++) {
   
    if(number % index == 0){
        result.innerText = "this is not prime number"
        break
    }else{
        result.innerText = " prime number :) "
    }

  }

});
