// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix) {
    return matrix.reduce((array, current, index) => {
      current.sort((a, b) => (index % 2 === 0) ? a - b : b - a).map(elem => array.push(elem));
      return array;
    }, []);
  }
  return [];
}
