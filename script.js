const colors = ["red", "green", "rgba(133, 122, 200)", "#f15025", "blue", "yellow"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
// get random number for array colors length
    const randomNUmber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNUmber];
    color.textContent = colors[randomNUmber];
});