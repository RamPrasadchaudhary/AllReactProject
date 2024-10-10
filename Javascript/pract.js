function display() {
  let name = document.getElementById("demo");
  name.innerText = "Ram Prasad chaudhary";
 // name.style.background = "Red";
}
let name1="Ram lala Chaudhary"
const abc=`<h2> this is ${name1}</h2>`
document.getElementById("demo2").innerHTML=abc
function change(){
     document.getElementById("change").style.color="Red"
}
function increment() {
     let count = 0;
     const c = document.getElementById("incre");
    count = count + 1;
   // console.log("value :"+count)
    c.innerText=count
   }