'use strict';


const orderList = document.querySelector('.oredereList')

document.querySelector('.submit').addEventListener('click', function () {
  let a = document.querySelector('.input').value;
  console.log(a);
  document.querySelector('li').textContent = a;

  
    const newListElement = document.createElement('li');
    newListElement.classList.add('li-item');
    newListElement.appendChild(document.createTextNode(a));
    orderList.appendChild(newListElement);

});

