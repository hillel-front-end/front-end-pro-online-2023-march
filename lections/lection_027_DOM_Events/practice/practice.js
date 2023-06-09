window.onload = function () {
  console.log("---work ---");
  const boxes = [...document.querySelectorAll(".box")];

  //   for(let i = 0; i < boxes.length; i++) {
  //     dragAndDrop(boxes[i]);
  //   }
  const random = (min, max) => Math.round(Math.random() * (max - min) + min);

  const randomColor = (min, max) =>
    `rgb(${random(min, max)}, ${random(min, max)}, ${random(min, max)})`;

  boxes.forEach((box) => dragAndDrop(box));

  function dragAndDrop(box) {
    const state = {
      offsetX: 0,
      offsetY: 0,
    };

    box.addEventListener("mousedown", onMouseDownHandler);
    document.addEventListener("mouseup", onDropHandler);

    function onMouseDownHandler({ offsetX, offsetY }) {
      console.log("---mouse - down ---");
      state.offsetX = offsetX;
      state.offsetY = offsetY;

      document.addEventListener("mousemove", onMoveHandler);
    }

    function onMoveHandler({ clientX, clientY }) {
      console.log("---start - move ---");

      box.style.left = `${clientX - state.offsetX}px`;
      box.style.top = `${clientY - state.offsetY}px`;
      box.style.backgroundColor = randomColor(0, 255);
    }

    function onDropHandler() {
      console.log("--- drop -- mouseup ---");
      document.removeEventListener("mousemove", onMoveHandler);
    }
  }
};
