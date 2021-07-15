

const colors = ["green", "red", "rgba(145, 61, 136, 1)", "#f15025"];

var button = document.getElementById('button');
var colorName = document.getElementById('colorname')

button.addEventListener('click', ()=>{
    const random = getRandomNumber();
    document.querySelector('div').style.backgroundColor = colors[random]
    colorName.innerHTML = colors[random]
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}



