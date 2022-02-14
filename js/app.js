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

    // Выводится сообщение если ничего не ввели и нажали добавить
    let heading = document.createElement('p');
    heading.textContent = 'Please enter something';
    heading.classList.add('enter');
    mainForm.appendChild(heading);

    // Оно удаляется через 2 секунды
    setTimeout(() => {
      heading.remove();
    }, 2000);
  } else {
    // Создаем новый элемент списка
    const newListElement = document.createElement('li');
    // Добавляем ему класс со стилями
    newListElement.classList.add('li-item');
    // Помещаемя в этот элемент то, что ввели в ипуте
    newListElement.appendChild(document.createTextNode(input));
    // Засовуем элемент в список
    orderList.appendChild(newListElement);

    // Создаем новую переменную инпута без .value , чтобы после сабмита формы инпут очищался
    let inputWithOutValue = document.querySelector('.input');
    inputWithOutValue.value = '';


    const clearButton = document.querySelector('.clear');

    // Кнопка для очищения списка
    clearButton.addEventListener('click', function () {
      newListElement.remove();
    });
  }
});
