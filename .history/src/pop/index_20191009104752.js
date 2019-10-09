
export function pop(array = []) {
    return array.slice(0, -1);
}

export function shift(array = []) {
return arr.slice(1);
}

export function unshift(array = [], newEntry) {
return [newEntry, ...array];
}

export function sort(array = [], compareFunction = () => {}) {
return [...array].sort(compareFunction);
}

export function reverse(array = [], newEntry) {
return [...array].reverse();
}

export function splice(array = [], start = 0, deleteCount = 0, ...items = []) {
return [
    ...array.slice(0, start),
    ...items,
    ...arr.slice(start + deleteCount)
];
}

export function delete(array = [], index = 0) {
return array.slice(0, index).concat(arr.slice(index +1 ));
}

export function copy(array = []) {
return [...array];
}