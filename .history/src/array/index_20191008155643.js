export function push(array = [], newEntry) {
  return [...array, newEnrty];
}

export function pop(array = []) {
  return array.slice(0, -1);
}
