// Your code here

function mapToNegativize(array) {
  for(let i = 0; i < array.length; i++) {
    array[i] = array[i] * -1;
  }
  return array;
}

function mapToNoChange(array) {
  return array;
}

function mapToDouble(array) {
  for(let i = 0; i < array.length; i++) {
    array[i] = array[i] * 2;
  }
  return array;
}

function mapToSquare(array) {
  for(let i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i];
  }
  return array;
}

function reduceToTotal(array, startingPoint=0) {
  for(let i = 0; i < array.length; i++) {
    startingPoint += array[i];
  }
  return startingPoint;
}

function reduceToAllTrue(array) {
  let result;
  for(let i = 0; i < array.length; i++) {
    if (array[i] !== false) {
      result = true;
    } else {
      result = false;
      break;
    }
  }
  return result;
}

function reduceToAnyTrue(array) {
  let result;
  for(let i = 0; i < array.length; i++) {
    if (array[i] === true) {
      result = true;
      break;
    } else {
      result = false;
    }
  }
  return result;
}