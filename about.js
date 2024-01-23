import { getData } from "./functions.js";

const name = document.getElementById('name');
const price = document.getElementById('price');
const color = document.getElementById('color');
const type = document.getElementById('type');
const desc = document.getElementById('desc');
const year = document.getElementById('year');
const img = document.getElementById('img');

const del = document.getElementById('delete');
const edit = document.getElementById('edit');

let elId;
document.addEventListener('DOMContentLoaded', function(){
    let urlIndex = window.location.href.search('id=');
    if(urlIndex > 0){
        elId = window.location.href.substring(urlIndex + 3);
        
        if(elId) {
             let data = getData();
             let car = data.find(el => {
                return el.id == elId
             })

         name.innerHTML = car.name;
         price.innerHTML = car.price;
         color.innerHTML = car.color;
         type.innerHTML = car.type;
         desc.innerHTML = car.desc;
         year.innerHTML = car.year;
         img.setAttribute('src', car.img);

        }else{
            window.location.assign('http://127.0.0.1:5500/index.html');
    }
     }else{
        window.location.assign('http://127.0.0.1:5500/index.html');
    }
});

del && del.addEventListener('click', function(){
  let isDeleted = confirm('Are you sure you want to delete this car?');
  if(isDeleted) {
    let data = getData();
     data = data.filter(el => el.id!= elId);
     localStorage.setItem('cars', JSON.stringify(data));
     window.location.assign('http://127.0.0.1:5500/index.html');
  }
});

edit && edit.addEventListener('click', function(){
    if(elId) {
       let domain = window.location.href.substring(0, window.location.href.search('about'));
       window.location.assign(`${domain}update.html?id=${elId}`);
    }
});
