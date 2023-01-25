function Student(student) {
  this.student = student;
}
function Teacher(teacher) {
  this.teacher = teacher;

  Teacher.prototype.addStudent = (name) => {
    return new Student(name);
  };

  this.addTeacher = () => {
    console.log("teacher added");
  };
}

function Principal(principal, teacher, student) {
  Student.call(this, student);
  Teacher.call(this, teacher);
  this.principal = principal;
}
Principal.prototype = Teacher.prototype;
let principal = new Principal("preethy", "prijith");
console.log(principal.addStudent("njan"));
console.log(principal);
