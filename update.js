import { getData } from "./functions.js";

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('id');

    
    if (!carId) {
        
        window.location.assign('http://127.0.0.1:5500/index.html');
        return;
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
    const car = cars.find(el => el.id == carId);


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

    
        window.location.assign('http://127.0.0.1:5500/index.html');
    });
});
