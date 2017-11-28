let student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12
};

console.log(Object.keys(student));
delete student.rollno;
console.log(Object.keys(student));