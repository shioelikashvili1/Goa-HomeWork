function calculateAverage(numbers) {
    // Check if the array is empty to avoid division by zero
    if (numbers.length === 0) {
      return 0;
    }
  
    // Sum all the numbers in the array
    const sum = numbers.reduce((acc, num) => acc + num, 0);
  
    // Calculate and return the average
    return sum / numbers.length;
  }
  
  // Example usage:
  const numbers = [10, 20, 30, 40, 50];
  console.log(calculateAverage(numbers));  // Output: 30
  