import { getData } from "./functions.js";

document.addEventListener('DOMContentLoaded', function () {
    let elId;  // Declare elId outside the if block

    let urlIndex = window.location.href.search('id=');
    if(urlIndex > 0) {
        elId = window.location.href.substring(urlIndex + 3);
    }

    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const imgInput = document.getElementById('img');
    const priceInput = document.getElementById('price');
    const typeSelect = document.getElementById('type');
    const descTextarea = document.getElementById('desc');
    const colorSelect = document.getElementById('color');
    const yearInput = document.getElementById('year');
    const button = document.getElementById('button');

    const cars = getData();
    const car = cars.find(el => el.id == elId);

    nameInput.value = car.name;
    imgInput.value = car.img;
    priceInput.value = car.price;
    typeSelect.value = car.type;
    descTextarea.value = car.desc;
    colorSelect.value = car.color;
    yearInput.value = car.year;

    button && button.addEventListener('click', function (e) {
        e.preventDefault();

        car.name = nameInput.value;
        car.img = imgInput.value;
        car.price = priceInput.value;
        car.type = typeSelect.value;
        car.desc = descTextarea.value;
        car.color = colorSelect.value;
        car.year = yearInput.value;

        const updatedCars = cars.map(el => (el.id === car.id ? car : el));
        localStorage.setItem('cars', JSON.stringify(updatedCars));

        let domain = window.location.href.substring(0, window.location.href.search('update'));
        window.location.assign(`${domain}about.html?id=${elId}`);
    });
});

