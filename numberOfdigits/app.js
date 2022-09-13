const input = document.getElementById("input");
const button = document.getElementById("button");
const result = document.getElementById("result");


button.addEventListener("click",()=>{
    const sayi = input.value;
    findDigits(sayi);
})

function findDigits(val){
    const digitsNumber = val.toString().split("");
    result.innerText = digitsNumber.length;
}

