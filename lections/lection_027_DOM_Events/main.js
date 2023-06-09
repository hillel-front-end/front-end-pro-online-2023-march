// ----- events ------

//
// onEvent

function onLoadHandler() {
  console.log("-- loaded ---");

  const boxes = document.querySelectorAll(".box, .span");

  console.log(boxes, "boxes");

  const box = document.querySelector(".box");

  const boxSpan = document.querySelector(".box-span");

//   console.log(box, "box");
//   console.log(boxSpan, "boxSpan");

  // --- onclick ----

  //   :checked ~ .active

  console.dir(box, "box");

  box.onclick = function () {
    console.log("-- click ---");
  };

//   box.onmousedown = function () {
//     console.log("--- mousedown ----");
//     console.dir(this.classList, "this");
//     this.classList.toggle("active");
//     // this.className += ' '
//     // this.classList.add('active') // add, remove, toggle, contain
//   };

//   box.onmouseup = function () {
//     console.log(this, "this");
//     console.log("--- mouseup ----");
//     this.classList.toggle("active");
//     // this.classList.remove('active')
//   };

  // ---------- mousemove ---------------

  function onMouseMoveHandler() {
    console.log("mousemove");
  }

  // box.onmouseenter = function() {
  //     console.log('--- onmouseenter --');
  //     this.classList.add('active');
  //     this.onmousemove = onMouseMoveHandler;
  // }

//   box.onmouseleave = function () {
//     console.log("--- onmouseleave --");
//     this.classList.remove("active");
//     this.onmousemove = null;
//   };

//   box.oncontextmenu = function () {
//     console.log("--oncontextmenu---");
//   };

  // ----------------------

  //   function onOpenModalHandler() {
  //     console.log("----open Modal ----");
  //   }

  //   function onOpenGallery() {
  //     console.log("----open onOpenGallery ----");
  //   }

  //   const button = document.querySelector("button");

  //   button.onclick = onOpenModalHandler;
  //   button.onclick = onOpenGallery;

  //   button.onclick = function () {
  //     onOpenModalHandler();
  //     onOpenGallery();
  //   };

  // ------
  // const moduleA = (function () {
  //     const button = document.querySelector("button");

  //     function onOpenModalHandler() {
  //       console.log("----open Modal ----");
  //     }

  //     button.addEventListener('click', onOpenModalHandler);

  //     button.addEventListener('mouseleave', function() {
  //         this.removeEventListener('click', onOpenModalHandler)
  //     }) // event, handler
  //   })();

  //   const moduleB = (function () {
  //     const button = document.querySelector("button");

  //     function onOpenGallery() {
  //       console.log("----open onOpenGallery ----");
  //     }

  //     // button.onclick = onOpenGallery;
  //     // button.onmousemove = onOpenGallery;

  //     //addEventListener
  //     button.addEventListener('click', onOpenGallery); // event, handler
  //   })();

  function handler(event) {
    console.log(event.target, 'event.target');
    console.log(event.type, 'type');
    // console.log(event, 'event');
    const {
        clientX, clientY,
        pageX, pageY,
        offsetX, offsetY
    } = event

    console.log(event, 'event');


    this.innerHTML = `
        clientX = ${clientX}, <br />
        clientY = ${clientY}  <br />
        pageX = ${pageX},  <br />
        pageY = ${pageY} <br />
        offsetX = ${offsetX} <br />
        offsetY = ${offsetY} <br />

        scrollTop = ${document.documentElement.scrollTop}
    
    `

  }

  box.addEventListener("click", handler);
//   box.addEventListener("mousemove", handler);
}

window.onload = onLoadHandler;
