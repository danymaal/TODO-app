'use strict';

const orderList = document.querySelector('.oredereList');
const clear = document.querySelector('.clear');

const listOfElements = document.querySelector('.orderedList222');

document.querySelector('.submit').addEventListener('click', function () {
  let a = document.querySelector('.input').value;
  console.log(a);
  document.querySelector('li').textContent = a;
  const newListElement = document.createElement('li');
  newListElement.classList.add('li-item');
  newListElement.appendChild(document.createTextNode(a));
  orderList.appendChild(newListElement);


});

const listItem = document.querySelector('li-item')


document.querySelector('.clear').addEventListener('click', function () {
    console.log('Clear all clicked');
    listItem.remove()
}); 




