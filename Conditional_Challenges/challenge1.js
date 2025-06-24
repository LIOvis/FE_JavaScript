const user = {
  id: 1,
  name: "Lio",
};
console.log(user);

const contact = {
  address: "1234 fake ave",
  phone: "555-555-5555",
};
console.log(contact);

const userContact = {
  ...user,
  ...contact,
};
console.log(userContact);
