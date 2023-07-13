export default class ToDos {
    constructor() {
        this.listArray = JSON.parse(localStorage.getItem('activities')) || [];
    }

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
            checkings.className = 'checkings';
            actDetail.appendChild(checkings);
            const desc = document.createElement('label');
            desc.innerHTML = `${object.description}`;
            actDetail.appendChild(desc);
            activity.appendChild(actDetail);
            const removeBtn = document.createElement('img');
            removeBtn.src = '/images/delete.png';
            removeBtn.alt = 'Delete';
            removeBtn.className = 'icons removeBtn';
            removeBtn.addEventListener('click', () => {
                this.removeAct(index + 1);
            });
            activity.appendChild(removeBtn);
            list.appendChild(activity);
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
}