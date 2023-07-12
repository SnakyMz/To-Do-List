import './style.css';
import './assets/updateRotation.png';
import './assets/downLeft.png';
import './assets/threeDots.png';

const listArray = [
  {
    description: 'Morning Meeting',
    completed: true,
    index: 0,
  },
  {
    description: 'List project',
    completed: false,
    index: 1,
  },
];

const list = document.querySelector('#list');

function displayList() {
  listArray.forEach((object) => {
    const activity = document.createElement('li');
    activity.className = 'activity';
    activity.innerHTML = `
        <div class="actDetail">
                    <input type="checkbox" id="${object.index}" class="checkings">
                    <label for="${object.index}">${object.description}</label>
                </div>
                <img src="./images/threeDots.png" alt="Option" class="icons optionBtn">
        `;
    list.appendChild(activity);
  });
}

window.onload = () => {
  displayList();
};