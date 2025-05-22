var studentGrades = [90, 80, 70, 60, 50, 40, 30, 20, 10, 19];
var sum = 0;
for (let i = 0; i < studentGrades.length; i++) {
    sum += studentGrades[i];
}
var average = sum / studentGrades.length;
console.log(`The average is ${average}`);
