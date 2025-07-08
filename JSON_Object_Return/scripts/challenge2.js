// const requestObject = new XMLHttpRequest();

// requestObject.open("GET", "https://www.swapi.tech/api/planets");
// requestObject.responseType = "json";
// requestObject.send();
// requestObject.onload = () => {
//   console.log(requestObject);
//   console.log(requestObject.response);
//   console.log(requestObject.response.results);
//   console.log(requestObject.response.results[0]);
// };

const makeRequest = function (method, url) {
  return new Promise(function (resolve, reject) {
    const requestObject = new XMLHttpRequest();

    requestObject.open(method, url);

    requestObject.onload = function () {
      if (requestObject.status >= 200 && requestObject.status < 300) {
        resolve(requestObject.responseText);
      } else {
        reject(
          new Error(
            "Request failed with status " +
              requestObject.status +
              ": " +
              requestObject.statusText
          )
        );
      }
    };

    requestObject.onerror = function () {
      reject(new Error("Network error or request aborted."));
    };

    requestObject.send();
  });
};

makeRequest("GET", "https://www.swapi.tech/api/planets", "json")
  .then((data) => {
    let json = JSON.parse(data);
    console.log(json);
    return json;
  })
  .then((data) => {
    while (true) {
      let userPrompt = prompt(
        "Please enter the uid of the planet you would like to view: "
      );
      index = Number(userPrompt) - 1;
      if (index !== NaN && index > -1 && index < 10) {
        let userConfirm = confirm(
          "Are you sure " +
            (index + 1) +
            " is the uid of the planet you wish to view?"
        );
        if (userConfirm === true) {
          console.log(data.results[index]);
        }
      } else if (userPrompt === null) {
        break;
      } else {
        alert("Invalid input.");
      }
      let userContinue = confirm("Would you like to enter a new uid?");
      if (userContinue === false) {
        break;
      }
    }
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// to throw an error, add /1 to the end of the url and try to input a uid greater than 0
// to get the promise to a reject, change the url to invalid-url
