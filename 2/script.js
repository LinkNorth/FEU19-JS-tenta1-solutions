/* Implement your solution here */

let container = document.querySelector('.container');
let select = document.querySelector('select');


select.addEventListener('change', e => {
  container.style.backgroundColor = select.value;
});
