// + Глобальные обьекты Window
//

//================== Document Object Model(DOM) ======================

/*
+ Глобальные обьект Document
+ DOM иерархия https://prnt.sc/E3pIDbCjocUe
+ JS обращение в html, closest, match, contain
+ Node prop: classList, className, innerHTML, innerText
+ Style
*/

// --- - window ------

/*
 window = {
    // DOM - Document object model:
    document: {},

    /// BOM - Browser object model:
    screen: {},
    history: {}
    navigator: {}
    location: {}
 }

*/

// ================ Browser object model(BOM) =======================

//+ setTimeout,  setInterval, alert, confirm

console.log(window.innerWidth, "clientWidth");
console.log(window.innerHeight, "clientHeight");

// screen
console.log(screen.availHeight, "screen");
console.log(screen.height, "screen");

// navigator
console.log(navigator.language, "navigator");
console.log(navigator.userAgent, "navigator");

// console.log(
//   navigator.getBattery().then((l) => console.log(l, "l")),
//   "navigator"
// );

///-- geoposition 

const success = (position) => {
    const { coords } = position;
    
    console.log(coords, 'coords');
}

const error = (e) => {
    console.log(e, 'e');
}
// navigator.geolocation.getCurrentPosition(success, error)


// 

const isMobile = navigator.userAgent.toLocaleLowerCase().indexOf('mobile') >= 0;
console.log(navigator.userAgentData, 'data');
console.log( navigator.userAgent, ' navigator.userAgent');


// ---- history -----

// history.post

// -------- location ----------


console.log(location, 'location');
// location.protocol,
// location.domain,
// location.pathname

// var searchParams = new URLSearchParams(location.search);

// https://www.google.com.ua/maps/@50.4977298,30.4665554,14z?hl=ru&entry=ttu



//================== Document Object Model(DOM) ======================



/*
 HTML

 <html>
   <head></head>
   <body>
      <div class="container mobile" foo="123">some text</div>
   </body
 </html>


*/




/*
 {
    tagName: 'html',
    children: [
        {
            tagNme: 'head'
        },
        {
            tagName: 'body',
            children: [
                {
                    tagName: 'div
                    className: 'container mobile xl-5'
                }
            ]
        }
    ]
 }
x

*/



// -------------- DOM  -----------

console.log(document.documentElement    )
console.dir(document.children[0], 'doc');


const spans = document.getElementsByTagName('span')

const main = document.getElementById('main'); // #main

console.dir(main, 'spans');

main.getElementsByTagName('span'); /// #main span {}


const classes = [ ...document.getElementsByClassName('container') ];
// [].slice.call(classes)

// console.log(classes.className, 'classes'); //mistake

console.log(classes, 'classes');

for(let element of classes) {
    console.log(element);

    if (element.tagName === 'DIV') {
        console.log('present');
        console.dir(element, 'element');

        setTimeout(() => {
            element.className += ' foo';
        }, 3000)
    }
}

classes.className = 'fooo';

// querySelector, querySelectorAll

const spanElement = document.querySelector('#main span');
// const spanElements = document.querySelectorAll('#main span');
const spanElements = document.querySelectorAll('#main > span');


console.log(spanElement, 'spanElement');
console.log(spanElements, 'spanElements');


//spanElements.className = 'some-class'


//  ----- style --------


const box = document.querySelector('.box');



// setTimeout(() => {
//     box.style.color = 'red';
//     box.style.fontSize = '25px';
// }, 3000)
// console.dir(box, 'box');


// innerHTML innerText


console.log(typeof box.innerHTML, 'innerHTML'); // read

// console.log(box.innerText, 'innerText'); // read



setTimeout(() => {
    box.innerHTML += '<section> 123 </section>'

    // box.innerText = '<section> 123 </section>'
    
}, 3000)


//= new DOMParser(); 
