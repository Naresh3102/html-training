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
const title = document.getElementById('title')
const description = document.getElementById('description')
const btn = document.getElementById('changeButton')
const list = document.getElementById('list')
const inputField = document.getElementById('textInput')
const addButton = document.getElementById('add')


function change() {
    title.textContent = "DOM is Manipulated";
    description.textContent = "Description is changed"

    title.style.color = "blue";
    description.style.color = "red"
}

function addItem() {
    const typedValue = inputField.value

    const newItem = document.createElement('li')
    newItem.textContent = typedValue

    list.appendChild(newItem)
}

btn.addEventListener('click',change);
addButton.addEventListener('click', addItem);