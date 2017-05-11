// Multiplications table
// Write a function that writes in the console the multiplication table (from 1 to 1

function multi(){
var res = '\n'; 
for(var i =1 ; i <= 10; i++) { 
  for(var j =1 ; j <= 10; j++) { 
    res += i*j + '\t'; 
  } 
  res+= '\n';
}
console.log(res)
}
multi();

