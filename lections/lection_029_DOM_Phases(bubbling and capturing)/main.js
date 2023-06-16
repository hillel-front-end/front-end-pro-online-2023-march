// --------

// В модели DOM Level 2 события распространяются по следующему принципу:
// На этапе ПЕРЕХВАТА событие распространяется от Document вниз до целевого элемента управления.
// Второй этап - СОБЫТИЕ В ЦЕЛЕВОМ УЗЛЕ.
// На третьем этапе событие ВСПЛЫВАЕТ от целевого элемента обратно вверх до корневого элемента.

// последний параметр в методе addEventListener -
// true - обработать событие на этапе ПЕРЕХВАТА
// false - обработать событие на этапе ВСПЛЫВАНИЕ
// event.stopPropagation();
var isTunnel = true;

window.onload = function () {
  var e1 = document.getElementById("first");
  var e2 = document.getElementById("second");
  var e3 = document.getElementById("third");

  //   document.body.addEventListener('click', function() {
  //     console.log('---- body ----');
  //   });

  e1.addEventListener(
    "click",
    function (event) {
      const target = event.target; // this != target

      //   console.log(target, "el1 --- target");
      //   console.log(this, "el1 -- this");

      // event.stopPropagation();
      console.log(target, "target");
      console.log(this.id, "-- id ---");
      this.style.background = "green";
    },
    isTunnel
  );

  e2.addEventListener(
    "click",
    function (event) {
      // event.stopPropagation();
      //   console.log(event.target, "el2 --- target");
      //   console.log(this, "el2 -- this");

      console.log(this.id, "-- id ---");
      this.style.background = "red";
    },
    isTunnel
  );

  // e3.addEventListener(
  //   "click",
  //   function (event) {
  //     // event.stopPropagation();

  //     this.style.background = "yellow";
  //     console.log(this.id, "-- id ---");
  //   },
  //   isTunnel
  // );

  //   addEventListener(
  //     'event',
  //     'handler',
  //     'isTunnel'
  //   )
};
