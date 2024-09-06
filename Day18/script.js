// const arr = [1, 2, 3, 4, 5];

// console.log(arr);

// // delete
// console.log(arr.splice(2, 1));
// console.log(arr);

// // insert
// console.log(arr.splice(2, 0, 3, 3.5));
// console.log(arr);

// // insert and delete
// console.log(arr.splice(2, 2, 4, 6, 8));
// console.log(arr);

// Accessing DOM Elements
const title = document.getElementById("title");
const description = document.getElementById("description");

const btn = document.querySelector('#changeButton')


const list = document.getElementById("list");
const inputField = document.getElementById("textInput");
const addButton = document.getElementById("add");
const imageElement = document.getElementById("imageElement");
// const listItems = document.getElementsByClassName("list-item");
// const listItems = document.getElementsByTagName('li')
const listItems = document.querySelectorAll('.list-item')
console.log(listItems);

function change() {
  title.textContent = "DOM is Manipulated";
  description.textContent = "Description is changed";

  title.style.color = "blue";
  description.classList.toggle("highlight");

  imageElement.setAttribute(
    "src",
    "https://media.istockphoto.com/id/1419410282/photo/silent-forest-in-spring-with-beautiful-bright-sun-rays.jpg?s=612x612&w=0&k=20&c=UHeb1pGOw6ozr6utsenXHhV19vW6oiPIxDqhKCS2Llk="
  );

  for (let i = 0; i < listItems.length; i++) {
    listItems[i].textContent = i
  }
}

function addItem() {
  const typedValue = inputField.value;

  const newItem = document.createElement("li");
  newItem.textContent = typedValue;

  list.appendChild(newItem);
}

btn.addEventListener("dblclick", change);
addButton.addEventListener("click", addItem);

const removeButton = document.getElementById("removeBtn");
const item = document.getElementById("item3");

function removeFunc() {
  // item.remove()
  list.removeChild(item);
}

removeButton.addEventListener("click", removeFunc);

function mouseOverFunc(){
    title.style.backgroundColor = "black"
    title.style.color = "white"
}

function mouseOutFunc(){
    title.style.backgroundColor = "white"
    title.style.color = "black"
}

title.addEventListener('mouseover', mouseOverFunc)
title.addEventListener('mouseout', mouseOutFunc)

const resultField = document.getElementById('result');

function changeFunc() {
    resultField.textContent = inputField.value
}

inputField.addEventListener('input', changeFunc)