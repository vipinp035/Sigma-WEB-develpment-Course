let a = [1, 93, 5, 6, 88]


// for (let index = 0; index < a.length; index++) { FOE LOOP IS USED TO GET VALUES OF AN ARRAY
//     const element = a[index];
//     console.log(element)
    
// }

// a.forEach((value, index, arr)=>{   FOR EACH USED ARROW FUNCTION TO GET VALUE INDEX AND ARRAY .
//     console.log(value, index, arr)
// })

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (const key in obj) {                           FOR IN USED FOR KEYS IN OBJECT
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key]; 
//         console.log(key, element)
//     }
// }

for (const value of a) {              //FOR OF USED MAINLY VALUES OF OBJECT 
    console.log(value)
}