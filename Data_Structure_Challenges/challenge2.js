const user = {
  firstName: "Lio",
  lastName: "Roy",
  city: "Provo",
  semesters: {
    semesterOne: "incomplete",
    semesterTwo: "incomplete",
    semesterThree: "incomplete",
    semesterFour: "incomplete",
  },
};

user["semesters"]["semesterOne"] = "complete";
user["semesters"]["semesterTwo"] = "in progress";

delete user["semesters"]["semesterFour"];

user["favoriteLanguage"] = "SCSS";

console.log(user);
