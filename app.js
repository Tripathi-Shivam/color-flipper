const colors = ["red", "green", "blue","yellow", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    // get random number between 0 - 5
    const randonNumber = getRandomNumber();
    //console.log(randonNumber);
    document.body.style.backgroundColor = colors[randonNumber];
    //color.innerHTML = colors[randonNumber];
    color.textContent = colors[randonNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}