function calculateAverageAndGrade(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    
    let average = total / marks.length;
    let grade;
    
    if (average >= 90) {
        grade = 'A';
    } else if (average >= 80) {
        grade = 'B';
    } else if (average >= 70) {
        grade = 'C';
    } else if (average >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    
    console.log("Average marks: " + average);
    console.log("Grade: " + grade);
}

// Example usage:
let studentMarks = [85, 92, 78, 88, 90]; // Sample marks
calculateAverageAndGrade(studentMarks);
