export fefunction sort(array = [], compareFunction = () => {}) {
  return [...array].sort(compareFunction);
}
