// Solution 1
function myEach(collection, callback) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  } else {
    for (var key in collection) {
      callback(collection[key]);
    }
  }
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
function myReduce(collection, callback, acc) {
  if (Array.isArray(collection)) {
    if (acc === undefined) {
      acc = collection[0];
      for (var i = 1; i < collection.length; i++) {
        acc = callback(acc, collection[i]);
      }
    } else {
      for (var i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i]);
      }
    }
  } else {
    if (acc === undefined) {
      acc = collection[Object.keys(collection)[0]];
      for (var key in collection) {
        acc = callback(acc, collection[key]);
      }
    } else {
      for (var key in collection) {
        acc = callback(acc, collection[key]);
      }
    }
  }
  return acc;
}

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
function myFilter(collection, callback) {
  var newArray = [];
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      if (callback(collection[i])) {
        newArray.push(collection[i]);
      }
    }
  } else {
    for (var key in collection) {
      if (callback(collection[key])) {
        newArray.push(collection[key]);
      }
    }
  }
  return newArray;
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