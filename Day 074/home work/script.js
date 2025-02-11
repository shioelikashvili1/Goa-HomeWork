function performOperations() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);

    console.log(`Sum: ${num1 + num2}`);
    console.log(`Difference: ${num1 - num2}`);
    console.log(`Product: ${num1 * num2}`);
    console.log(`Quotient: ${num1 / num2}`);
}