export default function unshift(array = [], newEntry) {
  return [newEntry, ...array];
}
