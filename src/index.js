document.addEventListener("DOMContentLoaded", () => {
  // your code here
//Got required forms, inputs and containers
let f = document.querySelector("form")
let c = document.querySelector("#tasks");
let val = document.querySelector("#new-task-description");

//Added an event listener for the form submit
f.addEventListener("submit", e=>{
  e.preventDefault();
  //checked if a description was entered and handled it
  if(val.value.length != 0) create(val.value);
  else {alert("Please enter a description"); return}
  f.reset();
})

//Function to delete the record
const deleteEl = (el)=>{
  el.remove();
}





});
