function allKeys(obj) {
    let result = Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertyNames(Student.prototype));
    result.splice(result.indexOf('constructor'), 1);
    return result;
}
function Student(name) {
    this.name = name;
}
Student.prototype.rollno = true;
Student.prototype.lol = "kek";
console.log(allKeys(new Student("Sara")));