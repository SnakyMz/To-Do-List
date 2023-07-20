export default class ToDos {
  constructor() {
    this.listArray = [];
  }

  displayList = () => {
    const testList = document.querySelector('#testList');
    testList.innerHTML = '';
    this.listArray.forEach((object) => {
      const activity = document.createElement('li');
      activity.innerHTML = `${object.description}`;
      testList.appendChild(activity);
    });
  }

  addAct = (value) => {
    const arrayObject = {};
    arrayObject.description = value;
    arrayObject.completed = false;
    arrayObject.index = (this.listArray.length + 1);
    this.listArray.push(arrayObject);
    localStorage.setItem('activities', JSON.stringify(this.listArray));
    this.displayList();
  }

  removeAct = (value) => {
    this.listArray = this.listArray.filter((object) => object.index !== value);
    this.listArray.forEach((object, index) => {
      object.index = (index + 1);
    });
    localStorage.setItem('activities', JSON.stringify(this.listArray));
    this.displayList();
  }

  updateAct = (value, index) => {
    this.listArray[index].description = value;
    localStorage.setItem('activities', JSON.stringify(this.listArray));
    this.displayList();
  }
}
