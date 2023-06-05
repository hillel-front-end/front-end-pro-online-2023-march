const random = (min, max) => Math.round(Math.random() * (max  - min) + min);

const randomColor = (min, max) => `rgb(${random(min, max)}, ${random(min, max)}, ${random(min, max)})`
const boxes = [...document.querySelectorAll('.box')];


boxes.forEach(box => moveBox(box));


function moveBox(box) {
    setInterval(() => {
        const shiftX = window.innerWidth - box.clientWidth;
        const shiftY = window.innerHeight - box.clientHeight;
        box.style.left = `${random(0, shiftX)}px`;
        box.style.top =`${random(0, shiftY)}px`;
    
        box.style.backgroundColor = randomColor(0, 255);
    }, 1000)
}