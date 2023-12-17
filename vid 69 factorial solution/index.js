//Factorial using reduce method
let arr=[1,2,3,4,5,6]

let x= ((a,b)=>{
return a*b

}

)
console.log("factorial using reduce method of number 6 is "  +  arr.reduce(x))

//factorial using for loop

let a=1

for (let i = 1; i<=5; i++) {
    
    a=a*i
   
}

console.log("factorial usingfor loop method of number 5 is " +  a)
