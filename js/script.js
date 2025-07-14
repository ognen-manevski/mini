/////////////////
//COLOR PICKER
////////////////

let colors = [
    "var(--yellow)",
    "var(--orange)",
    "var(--red)",
    "var(--light-blue)",
    "var(--blue)",
    "var(--turquoise)",
    "var(--green)",
    "var(--siva0)",
    "var(--bela)"
];



let palette = document.querySelector(".palette");


let htmlToAdd;
palette.innerHTML = "";

colors.forEach(e => {

    htmlToAdd = `
        <div class="color-picker-color" style="background-color:${e};" data-color="${e}" >
            <span class="material-symbols-outlined">
                check
            </span>
        </div>
    `;

    palette.innerHTML += htmlToAdd;

});


let layerMask = document.querySelector(".layer-4");
let layerColor = document.querySelector(".layer-3");
let layerBase = document.querySelector(".layer-2");
let tadaLayer = document.querySelector(".tada");

let colorPickerColors = palette.querySelectorAll(".color-picker-color");
let allBtns = palette.querySelectorAll(".color-picker-color span");

colorPickerColors.forEach(e => {

    let button = e.querySelector("span");
    let buttonOuter = e;

    e.addEventListener("click", function (e) {

        allBtns.forEach(e => {
            e.classList.remove("active");
        });


        button.classList.add("active");

        let currentColor = buttonOuter.getAttribute("data-color");

        layerColor.style.backgroundColor = currentColor;
    })
});


let random = Math.floor(Math.random() * colorPickerColors.length);

let form = document.querySelector("form");

let submitBtn = document.querySelector(".submit-btn");


form.addEventListener("submit", function (e) {

    e.preventDefault();

    layerMask.classList.toggle("open");
    layerColor.classList.toggle("open");
    layerBase.classList.toggle("open");
    tadaLayer.classList.toggle("open");

});

