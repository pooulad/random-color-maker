const colors = ["green","red","blue","yellow","brown","black","gray","orange","aqua",""];
const btn = document.getElementById("btn");
const color = document.querySelector(".colorValue");
btn.addEventListener("click",function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    btn.style.backgroundColor = colors[randomNumber];
})
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length)
}