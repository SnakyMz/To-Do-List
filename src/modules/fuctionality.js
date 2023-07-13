import Status from './status.js';

const status = new Status();

export default class ToDos {
  constructor() {
    this.listArray = JSON.parse(localStorage.getItem('activities')) || [];
  }

  // Method to display all activities
  displayList = () => {
    const list = document.querySelector('#list');
    list.innerHTML = '';
    this.listArray.forEach((object, index) => {
      const activity = document.createElement('li');
      activity.className = 'activity';

      const actDetail = document.createElement('div');
      actDetail.className = 'actDetail';

      const checkings = document.createElement('input');
      checkings.type = 'checkbox';
      checkings.ariaLabel = 'Checkbox';
      checkings.className = 'checkings';
      checkings.checked = object.completed;
      // To locally store checked activities status
      checkings.addEventListener('change', () => {
        status.changeAct(this.listArray, index);
      });
      actDetail.appendChild(checkings);

      const desc = document.createElement('input');
      desc.type = 'text';
      desc.ariaLabel = 'Description';
      desc.className = 'desc';
      desc.value = `${object.description}`;
      // To Update edited value initiated using enter key
      desc.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && desc.value) {
          this.updateAct(desc.value, (index));
        }
      });
      actDetail.appendChild(desc);
      activity.appendChild(actDetail);

      const removeBtn = document.createElement('img');
      removeBtn.src = '/images/delete.png';
      removeBtn.alt = 'Delete';
      removeBtn.className = 'icons removeBtn';
      // To remove an activity from list by delete button
      removeBtn.addEventListener('click', () => {
        this.removeAct(index + 1);
      });
      activity.appendChild(removeBtn);
      list.appendChild(activity);
    });
  }

  // Method to add activity
  addAct = (value) => {
    const arrayObject = {};
    arrayObject.description = value;
    arrayObject.completed = false;
    arrayObject.index = (this.listArray.length + 1);
    this.listArray.push(arrayObject);
    localStorage.setItem('activities', JSON.stringify(this.listArray));
    this.displayList();
  }

  // Method to update activity
  updateAct = (value, index) => {
    this.listArray[index].description = value;
    localStorage.setItem('activities', JSON.stringify(this.listArray));
    this.displayList();
  }

  // Method to remove activity
  removeAct = (value) => {
    this.listArray = this.listArray.filter((object) => object.index !== value);
    this.listArray.forEach((object, index) => {
      object.index = (index + 1);
    });
    localStorage.setItem('activities', JSON.stringify(this.listArray));
    this.displayList();
  }
}