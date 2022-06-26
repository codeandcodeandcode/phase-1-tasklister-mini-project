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

//Function to handle task click
const  handleClick = (t, el)=>{
  if(t.target.classList.contains("delete")) deleteEl(el)
}

//Added a function to create the task and append it's content to the dom
const create = (data)=> {
  let a = document.createElement("div");
  a.innerHTML = `<p>${data}</p><div><button class="delete">Delete</button></div>`;
  a.style.display="flex";
  a.style.justifyContent="space-between";
  a.style.alignItems = "center";
  a.addEventListener("click", e=>{
    handleClick(e, a);
    })
    c.prepend(a)
  }

});
