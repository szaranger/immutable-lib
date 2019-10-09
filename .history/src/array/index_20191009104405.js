export function push(array = [], newEntry) {
  return [...array, newEnrty];
}

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

export function splice(array = [], start, deleteCount, ...items) {
  return [
    ...array.slice(0, start),
    ...items,
    ...arr.slice(start + deleteCount)
  ];
}
