"use strict";

// console.log("POL");

const book = {
  Title: "1984",
  Type: "Novel",
  Auther: "George Orwell",
  Published: 1949,
};

function printBookInfo(book) {
  const details = `The book ${book.Title} is a ${book.Type} written by ${book.Auther} published in ${book.Published}`;
  const info =
    'Title: "1984", Type: "Novel", Auther: "George Orwell", Published: 1949';
  console.log(details);
  console.log(info);
  //   return details;
}

printBookInfo(book);
let age = 35;

const studentProfile = {
  Name: "Umar",
  Age: 35,
  courses: ["HTML", "CSS", "JavaScript"],

  addCourse: function (newCourse) {
    this.courses.push(newCourse);
  },
  updateAge: function (newAge) {
    this.Age = newAge;
  },
};

studentProfile.addCourse("React");
console.log(studentProfile);

studentProfile.updateAge(40);
console.log(studentProfile);
