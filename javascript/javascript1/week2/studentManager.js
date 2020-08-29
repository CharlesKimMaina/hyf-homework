/*the function below checks various conditions.if you 
      add more than 6 students to the class,the names after 
      6, it shows you a message that you cannot add more 
      students. If you add an empty string on the class list, 
      the empty string won't be added.
      If you add same student name twice, 
      the repeated name is not added to the list.*/

const class07Students = [];
function addStudentToClass(studentName) {
  if (class07Students.length < 6) {
    if (studentName != "") {
      class07Students.push(studentName);
      console.log(studentName, "successfully added to class", class07Students);
    }
  } else if (class07Students.includes(studentName)) {
    console.log(
      "Student " + studentName + "is already in the class",
      class07Students
    );
  } else {
    console.log("Cannot add more students to class 07");
  }
}

addStudentToClass("Charles");
addStudentToClass("");
addStudentToClass("Peter");
addStudentToClass("Mary");
addStudentToClass("Tom");
addStudentToClass("Lilian");
addStudentToClass("Rita");
addStudentToClass("sarah");

/*The function getNumberOfStudents results into number 
of students or our current array length.*/

function getNumberOfStudents() {
  let numberOfStudents = class07Students.length;
  return "The number of students in class is " + numberOfStudents;
}
console.log(getNumberOfStudents());
