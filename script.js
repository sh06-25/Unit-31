const imagebutton = document.getElementById("imagebutton");
const button = document.getElementById("button");
const utton = document.getElementById("utton");

let oPage = document.querySelector(".oPage");
let tPage = document.querySelector(".tPage");
let thPage = document.querySelector(".thPage");
let fPage = document.querySelector(".fPage");

const pa = document.getElementById("pa");
const pb = document.getElementById("pb");
  let PPage = document.querySelector(".PPage");
  let PPPage = document.querySelector(".PPPage");

const ba = document.getElementById("ba");
const bb = document.getElementById("bb");
  let BPage = document.querySelector(".BPage");
  let BBPage = document.querySelector(".BBPage");

const da = document.getElementById("da");
const db = document.getElementById("db");
  let DPage = document.querySelector(".DPage");
  let DDPage = document.querySelector(".DDPage");

const start = document.getElementById("start");


start.addEventListener('click', function(){
  oPage.style.display = "block";
  tPage.style.display = "none";
  thPage.style.display = "none";
  fPage.style.display = "none";
})

imagebutton.addEventListener('click', function(){
  oPage.style.display = "none";
  tPage.style.display = "block";
  thPage.style.display = "none";
  fPage.style.display = "none";
  start.style.display= "none";

})


button.addEventListener('click', function(){
  oPage.style.display = "none";
  tPage.style.display = "none";
  thPage.style.display = "block";
  fPage.style.display = "none";
  start.style.display= "none";
  
})

utton.addEventListener('click', function(){
  oPage.style.display = "none";
  tPage.style.display = "none";
  thPage.style.display = "none";
  fPage.style.display = "block";
  start.style.display= "none";

})

pa.addEventListener('click', function(){
  oPage.style.display = "none";
  tPage.style.display = "none";
  thPage.style.display = "none";
  fPage.style.display = "none";
  PPage.style.display = "block";
  PPPage.style.display = "none";
  BPage.style.display = "none";
  BBPage.style.display = "none";
  DPage.style.display = "none";
  DDPage.style.display = "none";
  start.style.display= "none";
  
})

pb.addEventListener('click', function(){
  oPage.style.display = "none";
  tPage.style.display = "none";
  thPage.style.display = "none";
  fPage.style.display = "none";
  PPage.style.display = "none";
  PPPage.style.display = "block";
  BPage.style.display = "none";
  BBPage.style.display = "none";
  DPage.style.display = "none";
  DDPage.style.display = "none";
  start.style.display= "none";

})

ba.addEventListener('click', function(){
  oPage.style.display = "none";
  tPage.style.display = "none";
  thPage.style.display = "none";
  fPage.style.display = "none";
  PPage.style.display = "none";
  PPPage.style.display = "none";
  BPage.style.display = "block";
  BBPage.style.display = "none";
  DPage.style.display = "none";
  DDPage.style.display = "none";
  start.style.display= "none";

})

bb.addEventListener('click', function(){
  oPage.style.display = "none";
  tPage.style.display = "none";
  thPage.style.display = "none";
  fPage.style.display = "none";
  PPage.style.display = "none";
  PPPage.style.display = "none";
  BPage.style.display = "none";
  BBPage.style.display = "block";
  DPage.style.display = "none";
  DDPage.style.display = "none";
  start.style.display= "none";

})

da.addEventListener('click', function(){
  oPage.style.display = "none";
  tPage.style.display = "none";
  thPage.style.display = "none";
  fPage.style.display = "none";
  PPage.style.display = "none";
  PPPage.style.display = "none";
  BPage.style.display = "none";
  BBPage.style.display = "none";
  DPage.style.display = "block";
  DDPage.style.display = "none";

})

db.addEventListener('click', function(){
  oPage.style.display = "none";
  tPage.style.display = "none";
  thPage.style.display = "none";
  fPage.style.display = "none";
  PPage.style.display = "none";
  PPPage.style.display = "none";
  BPage.style.display = "none";
  BBPage.style.display = "none";
  DPage.style.display = "none";
  DDPage.style.display = "block";
  start.style.display= "block";

})

