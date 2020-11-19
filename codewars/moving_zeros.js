function moveZeros(arr) {
    zeros = arr.filter(x => x === 0);
    newArray = arr.filter(x => x !== 0);
    mergedArray = [].concat.apply(newArray, zeros);
    // return mergedArray;
    return [].concat.apply(arr.filter(x => x !== 0), arr.filter(x => x === 0));
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));