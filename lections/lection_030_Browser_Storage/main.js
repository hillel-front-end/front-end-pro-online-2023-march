window.onload = function () {
  //   let a = new URLSearchParams(location.search);
  //   a.get("price");
  //   for (let i of a) {
  //     console.log(i, "i");
  //   }

  // -----> cookie (4kb) or 20

  // www.rogatokopita
  //    www.rogatokopita.face
  // www.nogatokopita

  // --->  localstorage & sessionStorage (4mb)

  // write ---> name=value
  const date = new Date(2023, 6, 5);
  document.cookie = `login=valera;expires=${date}`;

  // read --> name=value;name2=value2;

  document.cookie = "token=aasdasd12d12d21d12";

  //   console.log(document.cookie.split(";"), "document.cookie");
  // -------------------------------

  //   console.log(localStorage, "localStorage");

  //   localStorage.foo = 12;

  //   localStorage.setItem("login", "Valera");
  //   localStorage.removeItem('login')

  const obj = {
    login: "aaaaa",
    password: "ddddd",
  };

  // --------- Serialase JSON -----------

  // JSON поддерживает следующие типы данных:
  //     Объекты { ... }
  //     Массивы [ ... ]
  //     Примитивы:
  //     строки,
  //     числа,
  //     логические значения true/false,
  //     null.

  //   const objAsString = JSON.stringify(obj);
  //   console.log(objAsString, "objAsString");

  //   localStorage.setItem("person", objAsString);

  // ---- read

  //   personJSON = localStorage.getItem("person");
  //   persedPerson = JSON.parse(personJSON);

  //   console.log(personJSON, "personJSON");
  //   console.log(persedPerson, "parsedPerson");

  /// -----------------------

  const form = document.querySelector("form");

  const syrialseForm = (form) => {
    const data = [...form].reduce((accum, item) => {
      if (item.tagName.toLowerCase() != "button") {
        return { ...accum, [item.name]: item.value };
      }

      return accum;
    }, {});

    console.log(data, "data");

    return data;
  };

  const appendToStorage = (key, data) => {
    localStorage.setItem(key, data);
  };

  const appendDataToFields = (key) => {
    const data = JSON.parse(localStorage.getItem(key));

    [...form].forEach((formItem) => {
      if (data[formItem.name]) {
        formItem.value = data[formItem.name];
      }
    });
  };

  document.querySelector("button").addEventListener("click", function (event) {
    event.preventDefault();

    const payload = syrialseForm(form);
    appendToStorage("person", JSON.stringify(payload));
  });

  appendDataToFields("person");
  //   syrialseForm(form);
};
