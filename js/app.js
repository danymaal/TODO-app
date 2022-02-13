'use strict';

const orderList = document.querySelector('.oredereList');
const clear = document.querySelector('.clear');

const listOfElements = document.querySelector('.orderedList222');

// document.querySelector('.submit').addEventListener('click', function () {
//   let a = document.querySelector('.input').value;
//   console.log(a);
//   document.querySelector('li').textContent = a;
//   const newListElement = document.createElement('li');
//   newListElement.classList.add('li-item');
//   newListElement.appendChild(document.createTextNode(a));
//   orderList.appendChild(newListElement);
// });

const listItem = document.querySelector('li-item');

document.querySelector('.clear').addEventListener('click', function () {
  console.log('Clear all clicked');
});

const mainForm = document.querySelector('.main-form');

mainForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('Clicked in form');

  let input = document.querySelector('.input').value;
  console.log(input);

  document.querySelector('li').textContent = input;
  const newListElement = document.createElement('li');
  newListElement.classList.add('li-item');
  newListElement.appendChild(document.createTextNode(input));
  orderList.appendChild(newListElement);


  
  const clearButton  =document.querySelector('.clear')

    clearButton.addEventListener('click', function () {
        newListElement.remove()
    })

});
