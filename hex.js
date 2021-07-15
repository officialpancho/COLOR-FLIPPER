const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

const button = document.getElementById('button')

const colorName= document.getElementById('colorname')

button.addEventListener('click', ()=>{
    let colorInHex = '#'
    for(let i = 0; i < 6; i++){
        colorInHex += hex[getRandomNumber()] 
    }

    colorName.innerHTML = colorInHex;
    document.querySelector('div').style.backgroundColor = colorInHex
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}