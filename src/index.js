
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
  if (!Array.isArray(matrix)) return array;
  let columInd;
  for (let index = 0; index < matrix.length; index++) {
    for (let j = 0; j < matrix[index].length; j++) {
      columInd = index % 2 === 0 ? j : (matrix[index].length - j - 1);
      array.push(matrix[index][columInd]);
    };    
  };
  console.log(array);
  return array;
}
