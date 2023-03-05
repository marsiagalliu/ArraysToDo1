// PUSH FRONT
function pushFront(arr, nr) {

    const new_arr = [nr];
    new_arr.push(...arr);
    return new_arr;
}

// POP FRONT
function popFront(arr) {
 const first = arr.shift();
 console.log(arr);
 return first;
}

// INSERT AT
function insertAt(array, index, ...elementsArray) {
    array.splice(index, 0, ...elementsArray);
    return array;
}

// REMOVE AT
function removeAt(array, index) {
    const removed = array[index];
    array.splice(index, 1);
    console.log(array);
    return removed;
}
