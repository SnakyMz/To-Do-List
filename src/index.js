import './style.css';
import './assets/updateRotation.png';
import './assets/downLeft.png';
import './assets/delete.png';
import ToDos from './modules/fuctionality.js';

const actList = new ToDos();

const addBtn = document.querySelector('.addBtn');
const addText = document.querySelector('.addText');

addBtn.onclick = () => {
  actList.addAct(addText.value);
  addText.value = '';
};

addText.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && addText.value) {
    actList.addAct(addText.value);
    addText.value = '';
  }
})

window.onload = () => {
  actList.displayList();
};