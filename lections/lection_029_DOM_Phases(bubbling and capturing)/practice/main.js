window.onload = function () {
  const lies = [...document.querySelectorAll("li")];

  // -----  good -----

  // lies.forEach((li) => {
  //   if (li.dataset.action === "close") {
  //     li.addEventListener("click", close);
  //   } else if (li.dataset.action === "edit") {
  //     li.addEventListener("click", edit);
  //   } else if (li.dataset.action === "open") {
  //     li.addEventListener("click", open);
  //   }
  //   // ....
  // });

  const actions = {
    open() {
      console.log(" -- open ----");
    },

    close() {
      console.log("--- close ---");
    },

    edit() {
      console.log("--- edit ---");
    },
    remove() {
      console.log("--- remove ---");
    },
  };

  // ---> The best !
  function onClickHandler(event) {
    // визначаємо цільовий елемент
    const { action } = event.target.dataset;

    // if (action === "edit") {
    //   actions.edit();
    // } else if (action === 'close') { .. }

    /// action = 'open'

    //  ---- > strategy --> обрати що повинно відбутися в момент виконання коду
    if (action && typeof actions[action] === "function") {
      actions[action]();
    }
  }

  const parent = document.querySelector("ul.parent");

  // --->  heavy operations <-----

  // lies.forEach((li) => (li.onclick = onClickHandler));
  // lies.forEach((li) => (li.onclick = function() {
  //   //todo
  // }));

  /* 
          delagation event --- кліки на дочерні елементи обробляються за рахунок івенту
          визначеного над батьківським елементом
        */
  parent.addEventListener("click", onClickHandler);
  // ....

  // динамічно додаємо новий елемент
  setTimeout(() => {
    const data = { title: "remove item", handler: "remove" };

    const newLi = document.createElement("li");

    newLi.innerText = data.title;

    // Додати поведінку Li яказнаходиться в ul.parent
    // newLi.dataset.action = data.handler;

    document.querySelector("ul.parent").append(newLi);
  }, 3000);
};
