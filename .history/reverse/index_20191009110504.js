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