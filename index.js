import { validate, getData, createCard } from "./functions.js";

const button = document.getElementById('button');
const name = document.getElementById('name');
const price = document.getElementById('price');
const year = document.getElementById('year');
const color = document.getElementById('color');
const type = document.getElementById('type');
const desc = document.getElementById('desc');
const img = document.getElementById('img');

const form = document.getElementById('form');
const dataWrapper = document.getElementById('data-wrapper');



button && button.addEventListener('click', function(e){
    e.preventDefault();
if(validate({name, price, year, color, type, desc, img})) {
 let car = {
    name: name.value,
    price: price.value,
    year: year.value,
    color: color.value,
    type: type.value,
    desc: desc.value,
    img: img.value,
    id: Date.now()
 }

let data = getData();
data.push(car);
localStorage.setItem('cars', JSON.stringify(data));

let card = createCard(car);

dataWrapper.innerHTML += card;

form.reset();
}
});

document.addEventListener('DOMContentLoaded', function(e){
    let cars = getData();
    if(cars.length){
        cars.forEach(car => {
        let card = createCard(car);
        dataWrapper.innerHTML += card;
        })
    }

    let moreButtons = document.querySelectorAll('.more');
    moreButtons.forEach(button => {
button && button.addEventListener('click', function(){
     let id = button.getAttribute('data-id').substring(5);
     if(id) {

        let domain = window.location.href.substring(0, window.location.href.search('index'));
        window.location.assign(`${domain}about.html?id=${id}`)
     }
    })
});
});