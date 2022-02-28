var elInput = document.querySelector(".site__input");
var elForm = document.querySelector(".site__form");
var elBtn = document.querySelector(".site__button");
var elSpan = document.querySelector(".site__subspan");
var elFood = document.querySelector(".site__onfood");
var elBycicle = document.querySelector(".site__bycicle");
var elCar = document.querySelector(".site__car");
var elPlane = document.querySelector(".site__plane");

var elFoodTime = 3.6;
var elBycicleTime = 20.1;
var elCarTime = 70;
var elPlaneTime = 800;

function onFood(){
  var distance = Number(elInput.value);
  var onFoodTimes = distance/elFoodTime;
  if (distance>0){
    elFood.textContent=(`${Math.round(onFoodTimes)} soat`);
    return;
  }
  if (distance <=0){
    elFood.textContent=`0 yoki manfiy son kiritilgan`;
    return;
  }
  if (distance = " "){
    elFood.textContent= `Qiymat kiritilmagan`;
    return;
  }
  if (distance = isNaN){
    elFood.textContent= `Son kiriting`;
    return;
  }
  else{
    elFood.textContent= `Qiymat topilmadi`;
    return;
  }
}

function bycicle(){
  var distance = Number(elInput.value);
  var bycicleTimes = distance/elBycicleTime;
  
  if (distance>0){
    elBycicle.textContent=(`${Math.round(bycicleTimes)} soat`);
    return;
  }
  if (distance <=0){
    elBycicle.textContent=`0 yoki manfiy son kiritilgan`;
    return;
  }
  if (distance = " "){
    elBycicle.textContent= `Qiymat kiritilmagan`;
    return;
  }
  if (distance = isNaN){
    elBycicle.textContent= `Son kiriting`;
    return;
  }
  else{
    elBycicle.textContent= `Qiymat topilmadi`;
    return;
  }
}

function car(){
  var distance = Number(elInput.value);
  var carTimes = distance/elCarTime;
  if (distance>0){
    elCar.textContent=(`${Math.round(carTimes)} soat`);
    return;
  }
  if (distance <=0){
    elCar.textContent=`0 yoki manfiy son kiritilgan`;
    return;
  }
  if (distance = " "){
    elCar.textContent= `Qiymat kiritilmagan`;
    return;
  }
  if (distance = isNaN){
    elCar.textContent= `Son kiriting`;
    return;
  }
  else{
    elCar.textContent= `Qiymat topilmadi`;
    return;
  }
}

function plane(){
  var distance = Number(elInput.value);
  var planeTimes = distance/elPlaneTime;
  if (distance>0){
    elPlane.textContent=(`${Math.round(planeTimes)} soat`);
    return;
  }
  if (distance <=0){
    elPlane.textContent=`0 yoki manfiy son kiritilgan`;
    return;
  }
  if (distance = " "){
    elPlane.textContent= `Qiymat kiritilmagan`;
    return;
  }
  if (distance = isNaN){
    elPlane.textContent= `Son kiriting`;
    return;
  }
  else{
    elPlane.textContent= `Qiymat topilmadi`;
    return;
  }
}

elForm.addEventListener("submit" , function(ref){
  ref.preventDefault();

  onFood();
  bycicle();
  car();
  plane();
})