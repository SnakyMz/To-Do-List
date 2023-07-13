import './style.css';
import './assets/updateRotation.png';
import './assets/downLeft.png';
import './assets/delete.png';
import ToDos from './modules/fuctionality.js';
import Status from './modules/status.js';

const actList = new ToDos();
const status = new Status();

const updateBtn = document.querySelector('.updateBtn');
const addBtn = document.querySelector('.addBtn');
const addText = document.querySelector('.addText');
const clearBtn = document.querySelector('#clearBtn');

// Reload List
updateBtn.onclick = () => {
  document.location.reload();
};

// Activity adding function call using button click
addBtn.onclick = () => {
  actList.addAct(addText.value);
  addText.value = '';
};

// Activity adding fuction call using enter key
addText.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && addText.value) {
    actList.addAct(addText.value);
    addText.value = '';
  }
});

// Completed activities remocing function call
clearBtn.onclick = () => {
  status.clearList(actList.listArray);
};

// Initiating DOM on load
window.onload = () => {
  actList.displayList();
};