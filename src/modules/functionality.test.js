import ToDos from './functionality.js';

jest.mock('./functionality.js');
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
    act.addAct('afternoon');
    expect(ul.childNodes).toHaveLength(2);
  });
});

// Test removeTask function
describe('removeTask', () => {
  test('should remove a task from the todoList array', () => {
    const ul = document.querySelector('#testList');
    act.removeAct(1);
    expect(ul.childNodes).toHaveLength(1);
  });
});

describe('updateTask', () => {
  test('should change given task description', () => {
    const ul = document.querySelector('#testList');
    act.updateAct('evening', 0);
    expect(ul.firstChild.textContent).toBe('evening');
  });
});
