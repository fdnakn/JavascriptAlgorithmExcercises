

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]

let x = 0;

let arrLength = arr.length -1;
//arrLength = 17

const binarySearch = (number) =>{
    while(x <= arrLength){
        const y = Math.floor(x + (arrLength - x ) / 2) //17/2 artık bizim ortanca değerimiz
        if(arr[y] === number){
            return y
        }
        if(arr[y] < number){
            //artık sol tarafı aramana gerek yok sağa kay 
            x = y+1;
        }else{
            arrLength = y - 1
        }
    }
    return -1
}


console.log(binarySearch(10))