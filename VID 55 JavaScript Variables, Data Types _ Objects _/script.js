console.log("Hey this is tutorial 55");
//two types of data types is primitive data types and object 

var a = 5;//used as global scope which when write in block do not output block variable  value but gives value of globally scoped variable 
// a = a + 1
let b = 6;
let c = "Harry";
let _a = "Shubham";
// var 55a = "Rohan"; // Not Allowed

// console.log(a +  b + 8);
// console.log(typeof a, typeof b, typeof c);
{
    // let a = 66;
    console.log(a)
}
console.log(a)
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant and we cant change const value

//these are primitive data types
let x = "Harry bhai";
let y = 22;
let z = 3.55;
const p = true;
let q = undefined;
let r = null;//null is a type of object which will output object and not null in output

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)

//this is object data types where we can write keys with their values in object and in values we can write primitive data types, objects and even functions.
let o = {
    "name": "Harry",
    "job code": 5600,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";//we can add update the object with new keys nad values
console.log(o);
o.salary = "500crores";// we can change the values of object
console.log(o);