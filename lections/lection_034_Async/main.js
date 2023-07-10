/*
    **.** V8: call stack, heap
    **.** Task queue
    **.** Web Api
    **.** Callback Hell
    **.** XmlHttpRequest with promise, fetch, axios
    ?? **.** memoLoad
 */

// function first() {
//   console.log("---2 - first---");
// }

// function second() {
//   console.log("---3 - second---");
// }

// first();

// toDo()

// 3 * 2 * 1

// function factorial(n) {
//   if (n < 2) {
//     return 1;
//   }

//   return factorial(n - 1) * n;
// }

// factorial(9999);

// function preapre() {
//   for (let i = 0, sum = 0; i < 1e12; i++) {
//     sum += i;
//   }

//   console.log("end");
// }

// function timer() {}
// function timer2() {}

// setTimeout(timer, 10000);

// setTimeout(timer2, 5000);

// first();

// // second();

// // preapre();

// // set
// function handler() {}
// btn.addEventListener(handler);

/// --------- callback hell -----------

function request({ url, method, body = null, successCb, errorCb }) {
  const xhr = new XMLHttpRequest();

  xhr.onload = (info) => {
    successCb.apply(xhr, [JSON.parse(xhr.responseText), info]);
  };

  xhr.onerror = (error) => errorCb.apply(xhr, [error]);

  xhr.open(method, url);

  xhr.send(body);
}

// const params = {
//   method: "POST",
//   url: "",
//   body: JSON.stringify(),
//   successCb: function (response) {
//     console.log(response, "response");
//     //prepare(response)
//   },
//   errorCb: function (error) {
//     console.log(error, "error");
//   },
// };

// request({
//   method: "GET",
//   url: "http://localhost:3000/sign-in",
//   successCb: function (id) {
//     request({
//       method: "GET",
//       url: "http://localhost:3000/facebook",
//       successCb: function (id) {
//         id + "token";
//         request({
//           method: "GET",
//           url: "http://localhost:3000/movies/" + id,
//           successCb: function (movies) {
//             request({
//               method: "POST",
//               url: "http://localhost:3000/google/",
//               body: movies,
//               successCb: function (movies) {
//                 request({
//                   method: "POST",
//                   url: "http://localhost:3000/google/",
//                   body: movies,
//                   successCb: function (movies) {},
//                 });
//               },
//             });
//           },
//         });
//       },
//     });
//   },
// });

// function a(cb) {
//   cb();
// }

// function b(cb) {
//   cb();
// }

// function c(cb) {
//   cb();
// }

// a(function () {
//   b(function () {
//     c();
//   });
// });

// },

// ---- promise -------

// setTimeout(() => {
//     const flag = true;

//     if (flag) {
//       resolve("hello from resolve");
//     } else {
//       reject("hello from reject");
//     }
//   });

/*
    1) throw new Error()
    2) Promise.reject()
    3) new Promise(function(res, reject) {
        reject();
    });

*/

const promise = new Promise(function (resolve, reject) {
  const bool = false;
    console.log(0)
  if (bool) {
    resolve(["hello from resolve"]); // "fulfilled"
  } else {
    reject("hello from reject"); // rejected
  }
});

console.log(promise, "promise");

const promise2 = promise.then(
  function (value) {
    console.log(value, "PromiseResult");
    console.log("then 1 - resolve cb");

    // if (bool) {
    //     return Promise.resolve()
    // } else {
    //     Promise.reject();
    // }

    // throw new Error("errorrrr");
    //  asfasfa
    // return { foo: "aaa" };
    return Promise.reject();
  },
  function (value) {
    //value = [[PromiseResult]]
    console.log(value, "PromiseResult");
    console.log("then 1 - reject cb");
    // return new Promise((res, rej) => {
    //   rej();
    // });
    return Promise.reject();
  }
);

const promise3 = promise2.then(
  function () {
    console.log("then 2 - resolve cb");
  },
  function (error) {
    console.log("then 2 - reject cb", error);
  }
);

// promise3.then()


