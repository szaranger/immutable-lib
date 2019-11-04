export default function splice(
  array = [],
  start = 0,
  deleteCount = 0,
  ...items
) {
  return [
    ...array.slice(0, start),
    ...items,
    ...arr.slice(start + deleteCount)
  ];
}
