//document.write("hello world");

// var x = function(){
//    return document.write("hello world");
// }
// x();

// let y = (name,age) => "hello world" + " " +name + "" + age;

// console.log(y("Arrow Function",25));

//Rest operator.....................

// let x = function(msg, ...colors){
//     console.log(msg);
// for(let i in colors){
// console.log(colors[i]);
// }
// }
// let msg = "list of colors";
// x(msg,"red");
// x(msg,"red","green");

//Spread Operator.......................

// let x = function(){
        
//      for(let i in colors){
//      console.log(colors[i]);
//      }
//      }
//      let msg = "list of colors";
//      let colors = ["red","green","blue"];
//      x(...colors);

// Destructuring Array

let myarr = ["sud", "mis", 28];

let [fname, lname, age] = myarr;
for(let i in myarr){
    console.log(myarr[i]);
}