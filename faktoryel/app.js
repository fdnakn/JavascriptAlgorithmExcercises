const input = document.getElementById("input");
const button = document.getElementById("button");
const resultEl = document.getElementById("result");



button.addEventListener("click",()=>{
    if(input == ""){
        prompt("enter a number")
    }else{
        const number = input.value;
        console.log(number);
        let result = 1;
        for (let index = 1; index <= number; index++) {

            result *= index ;
            resultEl.innerText = result;
        }
    }
   
})






