// 1 დავალება

function processArray(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }
    return result;
  }
  

// 2 დავალება
function squareNumbers(numbers) {
    return numbers.map(num => num * num);
  }

  
//  3 დავალება
function uniqueElements(arr) {
    return [...new Set(arr)];
  }

  
//  4 დავალება
function calculateSum(a, b) {
    return a + b;
  }

  
//  5 დავალება
function gradeStudent(grades, callback) {
    return grades.map(callback);
  }

  function assignGrade(grade) {
    if (grade >= 90) {
      return 'A';
    } else if (grade >= 80) {
      return 'B';
    } else if (grade >= 70) {
      return 'C';
    } else if (grade >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }

  const grades = [85, 92, 78, 63, 50];
const studentGrades = gradeStudent(grades, assignGrade);
console.log(studentGrades);