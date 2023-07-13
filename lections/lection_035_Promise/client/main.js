// window.onload = onInit;

// function onInit() {
//   function request({ url, method, body = null }) {
//     return new Promise((resolve, reject) => {
//       const xhr = new XMLHttpRequest();

//       xhr.onload = (info) => {
//         const response = xhr.responseText;

//         // console.log(xhr.status, "info");

//         if (xhr.status != 200) {
//           return reject(info);
//         }

//         if (response && typeof response === "string") {
//           resolve(JSON.parse(xhr.responseText));
//         }
//       };

//       xhr.onerror = reject;

//       xhr.open(method, url);

//       xhr.send(body);
//     });
//   }

//   request({
//     url: "http:localhost:9001",
//     method: "get",
//   })
//     .then((response) => {
//       console.log(response, "response"); // { message: '123'}
//       response.message += " lolo";

//       return response;
//     })
//     .then(null, (error) => {
//       error.messge = "Some message";
//       //   return Promise.reject(error);
//       // return request()
//     })
//     .then(
//       (v) => {
//         console.log(v, "v");
//       },
//       (error) => {
//         console.log(error, "error reject callback");
//       }
//     )
//     .catch((error) => {
//       console.log(error, "error -- from catch");
//     })
//     .finally(() => {
//       console.log("");
//     });

//   // -------------- Fetch IPI -------

//   const url = "https://dummyjson.com/products/categories";

//   const helper = (r) => r.json();

//   fetch(url)
//     .then(helper)
//     .then((categories) => {
//       const response = fetch(`http://localhost:9001/validation`, {
//         method: "POST",
//         body: JSON.stringify(categories),
//       });

//       return new Promise((res, rej) => {
//         response.then((config) => {
//           res({
//             config,
//             categories,
//           });
//         });
//       });
//     })
//     .then(({ config, categories }) => {
//       return new Promise((res, rej) => {
//         config.json().then(({ isValid }) => {
//           res({
//             isValid,
//             categories,
//           });
//         });
//       });
//     })
//     .then((payload) => {
//       //   console.log(payload, "payload");
//       if (payload.isValid) {
//         return payload.categories;
//       }

//       throw new Error("Catigories are not valid");
//     })
//     .then((categories) => {
//       const category = categories[1];

//       return fetch(`https://dummyjson.com/products/category/${category}`);
//     })
//     .then(helper)
//     .then((payload) => {
//       console.log(payload, "payload");
//     })
//     .catch((error) => alert(error.message));

//   //   console.log(response.body, "response fetch");

//   // -------------- async await ---------
// }

async function getCatigories() {
  const response = await fetch(`https://dummyjson.com/products/categories`);

  console.log(123123);

  const data = await response.json();

  console.log(data, "inside");

  return data;
}

// getCatigories().then((res) => console.log(res, "resp"));

// console.log(data, "outside");
async function toDo() {
  //   const promise4 = new Promise((res, reject) => {
  //     setTimeout(() => {
  //       reject();
  //     });
  //   });

  //   Promise.all([promise1, promise2, promise3, promise4]).then(
  //     (data) => {
  //       console.log(data, "data");
  //     },
  //     () => {
  //       console.log("reject");
  //     }
  //   );

  const sources = ["source-1", "source-2", "source-3"];

  const promises = sources.map((source) => {
    return fetch(`http://localhost:9001/${source}`);
  });

  console.log(promises, "promises");

  Promise.allSettled(promises).then(
    (data) => {
      console.log(data, "data");
    },
    () => {
      console.log("reject");
    }
  );

  //   console.log(response1, "response1");
  //   console.log(response2, "response2");
  //   console.log(response3, "response3");
}

toDo();
