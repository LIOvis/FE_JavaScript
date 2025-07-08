requestObject = {
  response: {
    results: [
      {
        uid: "1",
        name: "Zim",
        email: "greatestinvader@invader.com",
        password: "IAMZIM!!!",
      },
      {
        uid: "2",
        name: "Dib",
        email: "agentmothman@swolleneyeballs.com",
        password: "D-D-D-D-D-DIB!!!",
      },
      {
        uid: "3",
        name: "Gir",
        email: "gir@sirunits.com",
        password: "ilovethelittletacos",
      },
    ],
  },
};

function greetUser(index) {
  let user = requestObject.response.results[index];
  return (
    "\nHello, " + user["name"] + ", your email is " + user["email"] + ".\n"
  );
}

console.log(greetUser(0));
