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
}
