export function delete(array = [], index = 0) {
    return array.slice(0, index).concat(arr.slice(index +1 ));
    }
    
    export function copy(array = []) {
    return [...array];
    }