window.onload = function () {
  const input = document.querySelector("input");

  //   console.log(input.type);
  //   console.log(input.foo);

  //   console.log(input.getAttribute("custom-attr"));
  //   console.log(input.setAttribute("custom-attr", "another-value"));
  //   console.log(input.removeAttribute("custom-attr"));
  // -- setAttribute, getAttribute, removeAttribute

  //data-[attr] --> node.dataset.attr

  console.log(input.dataset.lastValue);

  // ---- manipulation ------

  const list = document.querySelector(".list");

  const newLi = document.createElement("li");
  const newLi2 = document.createElement("li");
  newLi2.innerText = "3";
  newLi.innerText = "2";

  // list.innerHTML += newLi;

  //   setTimeout(() => {
  // list.append(newLi, newLi2);
  // list.prepend(newLi);
  // list.before(newLi)
  // list.after(newLi)

  // setTimeout(() => {
  //  list.append(newLi); // cut + move
  // }, 2000)
  //   }, 3000);

  console.dir(newLi, "newLi");
  console.dir(list.children[0], "list");

  // ----- innerHTMl vs createElement -----

  const li = list.querySelector("li");

  //   console.log(li, "li");
  //   console.log(li.innerText);

  //   li.addEventListener("click", () => {
  //     console.log("open page");
  //   });

  //   setTimeout(() => {
  //       list.append(newLi);
  //   }, 3000)

  // setTimeout(() => {
  //   list.innerHTML += "<li> 2 </li>";
  // }, 3000);

  //---- classList.add() vs style ----
  // perfomance opt:
  // # 1 first --> set ||  second --> read
  //   li.style.marginTop = 10 + "px";
  //   li.style.left = 10 + "px";
  //   li.style.right = 10 + "px";
  //   li.style.right = 10 + "px";

  //style  -- bad practice  --
  //   li.style.background = 'red';
  //   li.style.background = 'green';
  //   li.style.display = 'block';
  //   li.style.fontSize = 20 + "px";
  //

  //   console.log(li.clientWidth);

  //   li.classList.add('foo')

  //---- #2 ------

  const li2 = document.createElement("li");
  li2.innerText = "2";
  // -- bad practice --

  //  list.append(li2); // bad

  li2.style.right = 10 + "px";
  li2.style.left = 10;
  li2.style.background = "green";

  // good
  list.append(li2);

  // ----- #3 ---------

  console.log(li, "li");

  li.classList.add("hidden");
  li.style.right = 10 + "px";
  li.style.left = 10;
  li.style.background = "green";
  li.classList.remove("hidden");

  // ----- #4 -------

  const fragment = document.createDocumentFragment();
  //   const div = document.createElement("div");

  console.dir(fragment, "fragment");

  const data = [3, 4, 5];

  data.forEach((item) => {
    const li = document.createElement("li");
    li.innerText = item;
    // div.append(li);
    fragment.append(li);
  });

  list.append(fragment);
  //   list.append(div);
};
