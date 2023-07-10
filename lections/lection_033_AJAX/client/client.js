// const a = prompt("asdasd");

// document.body.innerText += a;

// axios, fetch api, XMLHttpRequest --> AJAX

// const xhr = new XMLHttpRequest();

/// ---- get request ----
// const formDataGet = { maxPrice: 1200, title: "Harry Potter" };
// const urlParams = new URLSearchParams(formDataGet);
// const query = urlParams.toString();
// const path = "test";
// const url = `http://localhost:9001/${path}?${query}`;

// ---- post request ---
const formDataPost = { login: "Valera", password: "123qwerty" };

const path = "test";
const url = `http://localhost:9001/${path}`;

// xhr.onload = function (info) {
//   console.log(info, "info");
//   console.log(this.responseText, "response");
//   console.log(xhr.getAllResponseHeaders());

//   const payload = JSON.parse(this.responseText);
//   console.log(payload, "payload");
// };

// xhr.onerror = function (error) {
//   console.log(error, "error");
// };

// xhr.open("GET", url); // (1)
// xhr.open("POST", url); // (1)

// xhr.open("PUT", url);

// xhr.setRequestHeader("Content-type", "application/json"); //(2)
// xhr.setRequestHeader("allo", "valera"); //(2)

// xhr.send(JSON.stringify(formDataPost)); // (3)

// fetch(url + "/test", {
//   method: "GET",
//   credentials: "include",
// });

function request({ url, method, body = null, successCb, errorCb }) {
  const xhr = new XMLHttpRequest();

  xhr.onload = (info) => {
    successCb.apply(xhr, [JSON.parse(xhr.responseText), info]);
  };

  xhr.onerror = (error) => errorCb.apply(xhr, [error]);

  xhr.open(method, url);

  xhr.send(body);
}

const params = {
  method: "POST",
  url,
  body: JSON.stringify(formDataPost),
  successCb: function (response) {
    console.log(response, "response");
    //prepare(response)
  },
  errorCb: function (error) {
    console.log(error, "error");
  },
};

request(params);
