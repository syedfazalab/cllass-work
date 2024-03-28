var x = 10;
var y = 10;
console.log(x*y);
function update(){
    console.log("event is fired");

}
// i want to  create function in js
function sum(a,b){
    return a+b;
}
console.log(sum(x,y));
var mysum = sum;
console.log(mysum);