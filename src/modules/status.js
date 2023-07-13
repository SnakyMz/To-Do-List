export default function changeAct(array, index) {
    array[index].completed = !array[index].completed;
    localStorage.setItem('activities', JSON.stringify(array));
}