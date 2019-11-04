export default function del(array = [], index = 0) {
  return array.slice(0, index).concat(array.slice(index + 1));
}
