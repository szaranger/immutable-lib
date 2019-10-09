export default function sort(array = [], compareFunction = () => {}) {
  return [...array].sort(compareFunction);
}
