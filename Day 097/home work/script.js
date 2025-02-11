function filterWithFunction(gela, ...arr) {
    return arr.filter(gela);
}

const isEven = num => num < 10 === 0;

const result = filterWithFunction(isEven, 1, 2, 3, 4, 5, 6);
console.log(result);