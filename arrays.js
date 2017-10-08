var myArray = [ 'iced tea', 'pasta','momo', 'pizza','tacos']
//                    0              1              2        3
var resturaunts = ['85 degrees','olive garden??','aangan','dominoes','a taco truck']
//console.log (resturaunts)


/*console.log ('I will eat ' + myArray[0] + ' at ' + resturaunts [0])
console.log ('I will eat ' + myArray[1] + ' at ' + resturaunts [1])
console.log ('I will eat ' + myArray[2] + ' at ' + resturaunts [2])
console.log ('I will eat ' + myArray[3] + ' at ' + resturaunts [3])*/


//This is how you iterate through an array

for(var  l = 0; l < myArray.length; l = l + 1 ){
  console.log ('I will eat ' + myArray[l] + ' at ' + resturaunts [l])
}

console.log(myArray.length)

