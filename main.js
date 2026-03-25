let phones = document.querySelector('.img')
let gold = document.querySelector(".gold")
let blue = document.querySelector(".blue")
let black = document.querySelector(".black")
let mink = document.querySelector(".mink")
let red = document.querySelector(".red")
function phone (mob){
    phones.src = mob
}
gold.onclick = function (){
    document.body.style.backgroundColor = "#FFD700";
    phone(this.src)
}
blue.onclick = function (){
    document.body.style.backgroundColor = "#AFC3D6";
    phone(this.src)
}
black.onclick = function (){
    document.body.style.backgroundColor = "#0F0F12";
    phone(this.src)
}
mink.onclick = function (){
    document.body.style.backgroundColor = "#F3E4C7";
    phone(this.src)
}
red.onclick = function (){
    document.body.style.backgroundColor = "#E10600";
    phone(this.src)
}

