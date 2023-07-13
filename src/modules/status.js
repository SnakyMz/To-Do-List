export default class Status {
    // Storing checked activities
    changeAct = (array, index) => {
      array[index].completed = !array[index].completed;
      localStorage.setItem('activities', JSON.stringify(array));
    };

    // Removing completed activities
    clearList = (array) => {
      array = array.filter((object) => object.completed !== true);
      array.forEach((element, index) => {
        element.index = (index + 1);
      });
      localStorage.setItem('activities', JSON.stringify(array));
      document.location.reload();
    };
}