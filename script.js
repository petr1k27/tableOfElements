'use strict'

let container = document.querySelector(".container");
console.log(container);

function foo() {
    for (let i = 0; i < 104; i++) {
        let element = document.createElement("div");
        element.textContent = `${i}`;
        element.className += 'element';
        container.appendChild(element);
    }
}

foo();
