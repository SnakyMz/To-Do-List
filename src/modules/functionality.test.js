jest.mock('./functionality.js');

import ToDos from "./functionality.js";
const act = new ToDos();

// Test addTask function
describe('addTask', () => {
    test('should add a task to the todoList array', () => {
        document.body.innerHTML = `
    <ul id = "testList">
    </ul>
    `;
        const ul = document.querySelector('#testList');
        act.addAct('Morning');
        expect(ul.childNodes).toHaveLength(1);
    });
});
