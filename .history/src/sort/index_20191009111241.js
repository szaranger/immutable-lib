export function sort(array = [], compareFunction = () => {}) {
    return [...array].sort(compareFunction);
}