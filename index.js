// Solution 1
function myEach(collection, callback) {
  Object.values(collection).forEach(test => {
    callback(test);
  });
  return collection;
}

// Solution 2
function myMap(collection, callback) {
  var newArray = [];
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      newArray.push(callback(collection[i]));
    }
  } else {
    for (var key in collection) {
      newArray.push(callback(collection[key]));
    }
  }
  return newArray;
}

// Solution 3
const myReduce = function (testArr, callback, acc) {
  let objValues = Object.values(testArr);

  if (!acc) {
    acc = objValues[0];
    objValues = objValues.slice(1);
  }

  const newArr = objValues.length;

  for (let i = 0; i < newArr; i++) {
    acc = callback(acc, objValues[i], objValues);
  }
  return acc;
};

// Solution 4
function myFind(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      if (callback(collection[i])) {
        return collection[i];
      }
    }
  } else {
    for (var key in collection) {
      if (callback(collection[key])) {
        return collection[key];
      }
    }
  }
}

// Solution 5
function myFilter(testArr, excluder) {
  let objValues = Object.values(testArr)
  return objValues.filter(num => num > 10)
}


// Solution 6
function mySize(collection) {
  if (Array.isArray(collection)) {
    return collection.length;
  } else {
    return Object.keys(collection).length;
  }
}

// Solution 7
function myFirst(collection, n) {
  if (Array.isArray(collection)) {
    if (n === undefined) {
      return collection[0];
    } else {
      return collection.slice(0, n);
    }
  } else {
    if (n === undefined) {
      return collection[Object.keys(collection)[0]];
    } else {
      var newArray = [];
      for (var i = 0; i < n; i++) {
        newArray.push(collection[Object.keys(collection)[i]]);
      }
      return newArray;
    }
  }
}

// Solution 8
function myLast(collection, n) {
    if (Array.isArray(collection)) {
        if (n === undefined) {
        return collection[collection.length - 1];
        } else {
        return collection.slice(collection.length - n);
        }
    } else {
        if (n === undefined) {
        return collection[Object.keys(collection)[Object.keys(collection).length - 1]];
        } else {
        var newArray = [];
        for (var i = Object.keys(collection).length - n; i < Object.keys(collection).length; i++) {
            newArray.push(collection[Object.keys(collection)[i]]);
        }
        return newArray;
        }
    }
}

// Solution 9
function myKeys(collection) {
  var newArray = [];
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      newArray.push(i);
    }
  } else {
    for (var key in collection) {
      newArray.push(key);
    }
  }
  return newArray;
}

// Solution 10
function myValues(collection) {
  var newArray = [];
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      newArray.push(collection[i]);
    }
  } else {
    for (var key in collection) {
      newArray.push(collection[key]);
    }
  }
  return newArray;
}