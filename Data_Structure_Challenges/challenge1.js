users = {
  1: "Hatter",
  2: "Alice",
  3: {
    id: 3,
    name: "Cheshire",
    age: "???",
    dob: "N/A",
    gradesCompleted: [90, 98, 87, 92, 93, 89],
    deleteMe: "nice try :)",
  },
};

gradesString = users["3"]["gradesCompleted"].join(", ");

console.log(
  `${users["3"]["name"]} has a user id of ${users["3"]["id"]}. ${users["3"]["name"]} is ${users["3"]["age"]} years old and was born on ${users["3"]["dob"]}. ${users["3"]["name"]}'s completed grades are ${gradesString}.`
);

console.log(users);

delete users["3"]["deleteMe"];

console.log(users);
