import './style.css';
import './assets/updateRotation.png';
import './assets/downLeft.png';
import './assets/delete.png';
import ToDos from './modules/fuctionality.js';

const actList = new ToDos();

const updateBtn = document.querySelector('.updateBtn');
const addBtn = document.querySelector('.addBtn');
const addText = document.querySelector('.addText');

// Reload List
updateBtn.onclick = () => {
  document.location.reload();
};

// Activity adding function using button click
addBtn.onclick = () => {
  actList.addAct(addText.value);
  addText.value = '';
};

// Activity adding fuction using enter key
addText.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && addText.value) {
    actList.addAct(addText.value);
    addText.value = '';
  }
});

// Initiating DOM on load
window.onload = () => {
  actList.displayList();
};