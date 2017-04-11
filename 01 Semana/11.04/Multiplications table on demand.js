// Multiplications table on demand
// Write a function that writes in the console the multiplication table (in one column) of any number passed as paramet

function multiDemand(a){
var res = '\n'; 
for(var i =a ; i <= 10; i++) { 
  for(var j =a ; j <= 10; j++) { 
    res += i*j + '\t'; 
  } 
  res+= '\n';
}
console.log(res)
}
multiDemand(2)
