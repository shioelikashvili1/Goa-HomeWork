function sumBetween(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
}


console.log(sumBetween(1, 5));