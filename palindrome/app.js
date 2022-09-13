const text = document.getElementById("text")
const button = document.getElementById("button")
const result = document.getElementById("result")



button.addEventListener("click",()=>{
    if(text.value == ""){
        prompt("enter a value")
    }else{
        const value = text.value;
        console.log(value);
        isPalindrome(value);
    }
    
})


function isPalindrome(val){
    const reverse = val.split("").reverse().join("");
    console.log(reverse);
    result.innerText = reverse
    
}


// console.log(`is ${value} palindrome ? `, isPalindrome(value));

// The split() method splits a string into an array of substrings.
// The reverse() method reverses the order of the elements in an array.
// The join() method returns an array as a string.