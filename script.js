const btn = document.getElementById('btn');
const color = document.querySelector(".color");

const title = document.title;

btn.addEventListener("click", function () {
// get random number for array colors length
    if (title === 'Color Flipper || Hex') {
        hex();
    } else {
        simple();
    }
   
});

function simple() {
    const colors = ["red", "green", "rgba(133, 122, 200)", "#f15025", "blue", "yellow"];
    const randomNUmber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNUmber];
    color.textContent = colors[randomNUmber];
};

function hex() {
    const letters = '0123456789ABCDEF';
    var hexColor = '#';
    for(var i=0; i < 6; i++) {
        hexColor += letters[Math.floor(Math.random() * 16)];
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
};