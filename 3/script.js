/* Implement your solution here */

let form = document.querySelector('form');
let input = document.querySelector('input');
let ul = document.querySelector('ul');


form.addEventListener('submit', e => {
  e.preventDefault();
  let value = input.value;
  input.value = "";


  if (value) {
    let li = document.createElement('li');
    li.textContent = value;

    let button = document.createElement('button');
    button.textContent = 'Delete me';
    li.appendChild(button);

    button.addEventListener('click', () => {
      ul.removeChild(li);
    });

    ul.appendChild(li);
  }
});



