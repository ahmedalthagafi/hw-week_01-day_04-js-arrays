

// sum of the numbers between 1 and n and return the answer
const arr = [];
const add = function (n1,n2){
    return n1 + n2;
}

const summation = function(n){
    let total = 0 ;
    for(i = 0 ; i <= n; i++){
       arr.push(i);
       total = add(total,i);
      
       
    }
return total;
}
summation(5);


//the average of a group of numbers
const avg = function(group){
    group = group.length;
      
       return group;
   }
avg([1,2,3,4]);



// Add dash function
const addDash = function(arr){
    arr = arr.join("-")
    return arr;
}
addDash(["test1","test2","test3"]);




