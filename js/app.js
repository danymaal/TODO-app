'use strict';

const orderList = document.querySelector('.oredereList');

// document.querySelector('.submit').addEventListener('click', function () {
//   let a = document.querySelector('.input').value;
//   console.log(a);
//   document.querySelector('li').textContent = a;
//   const newListElement = document.createElement('li');
//   newListElement.classList.add('li-item');
//   newListElement.appendChild(document.createTextNode(a));
//   orderList.appendChild(newListElement);
// });

const mainForm = document.querySelector('.main-form');

mainForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('Clicked in form');

  let input = document.querySelector('.input').value;

  console.log(input);

  if (input === '') {
    let heading = document.createElement('p');
    heading.textContent = 'Please enter something';
    heading.classList.add('enter');
    mainForm.appendChild(heading);

    setTimeout(() => {
      heading.remove();
    }, 2000);
  } else {
    document.querySelector('li').textContent = input;
    const newListElement = document.createElement('li');
    newListElement.classList.add('li-item');
    newListElement.appendChild(document.createTextNode(input));
    orderList.appendChild(newListElement);

    let inputWithOutValue = document.querySelector('.input');
    inputWithOutValue.value = '';

    const clearButton = document.querySelector('.clear');

    clearButton.addEventListener('click', function () {
      newListElement.remove();
    });
  }
});
