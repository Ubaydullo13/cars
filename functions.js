function isVlidUrl(string){
    try{
        new URL(string);
        return true;
    }catch(err){
}
}

function validate(data){
    if(!data.name.value || data.name.value.trim().length < 3){
       alert('Name is required');
       data.name.focus();
       return false;
    }
    if(!data.price.value){
       alert('Price is required');
       data.price.focus();
       return false;
    }
    if(!data.color.value){
       alert('Color is required');
       data.color.focus();
       return false;
    }
    if(!data.type.value){
       alert('Type is required');
       data.type.focus();
       return false;
    }
    if(!data.img.value || !isVlidUrl(data.img.value)){
        alert('Enter a valid image url');
        data.img.focus();
        return false;
    }
    
    return true;
}

function getData(){
    let data = [];
    
    if (localStorage.getItem('cars')) {
        data = JSON.parse(localStorage.getItem('cars'));
    }

    return data;
}

function createCard(car){
    return `
    <div class="border row p-2 mb-3">
        <div class="col-2">
            <img width = "200" height = "200" src="${car.img}" alt="">
        </div>
    <div class="col-10">
        <div class="wrapper d-flex justify-content-between">
            <h3 class="fs-4">${car.name}</h3>
            <button data-id = "data_${car.id}" class="btn btn-info text-white more">Batfsil</button>
        </div>
        <h4 class="fs-5">${car.type}</h4>
        <h4 class="fs-5">${car.color}</h4>
        <h4 class="fs-5">${car.year}</h4>
        <h4 class="fs-5">$${car.price}</h4>
        <p>${car.desc}</p>

    </div>
    </div>
    `
}

export {validate, getData, createCard };