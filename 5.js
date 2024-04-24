function flattenArray(arr, n) {
    if (n === 0) {
        return arr;
    }
    let flattenedArray = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            flattenedArray = flattenedArray.concat(flattenArray(item, n - 1));
        } else {
            flattenedArray.push(item);
        }
    });

    return flattenedArray;
}
let arr1 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n1 = 0;
console.log(flattenArray(arr1, n1)); 
let arr2 = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n2 = 1;
console.log(flattenArray(arr2, n2)); 
let arr3 = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n3 = 2;
console.log(flattenArray(arr3, n3)); 
