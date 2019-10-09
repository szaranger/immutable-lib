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
    return [ newEntry, ...arr ];
  }


