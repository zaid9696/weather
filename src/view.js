

import iso from 'alpha2-countries';


function convert(number){

     const result = number - 273.15

     return Math.floor(result)
}

const content = document.querySelector(".content");

export const view = (item) =>{


    content.innerHTML = '';
    const contentResult = `

    <div class="content__wrap">
    <div class="content__header">
        <div class="content__location"><img src="./img/placeholder.svg" alt="Loction Icon">
            <h3>${item.name + ", " + iso.resolveName(item.sys.country)}</h3>
        </div>
        <div class="content__temp">
            <div class="content__celsius"><h4>${convert(item.main.temp)}</h4> <img src="./img/celsius-degrees-sign.svg" alt="celsius-degrees"></div>
            <img src="./img/${item.weather[0].icon}.svg" alt="weather icon" class="temp__icon">
        </div>
        <h2>${item.weather[0].main}</h2>
    </div>
        <div class="content__info">
            <div class="content__leftside">
                <div class="content__more"><img src="./img/temperature.svg" alt="temperature"><h2>Description</h2></div>
                <div class="content__more"><img src="./img/humidity.svg" alt="humidity"><h2>humidity</h2></div>
                <div class="content__more"><img src="./img/wind.svg" alt="temperature"><h2>Wind Speed</h2></div>
            </div>
            <div class="content__rightside">
                <div class="content__rightinfo"><h3>${item.weather[0].description}</h3></div>
                <div class="content__rightinfo"><h3>${item.main.humidity}%</h3></div>
                <div class="content__rightinfo"><h3>${item.wind.speed}M/S</h3></div>
            </div>
        </div>
 </div>
    `;

    content.insertAdjacentHTML("beforeend", contentResult)


}

export const loader = () => {

    content.innerHTML = '';
    const lod = `
    <div class="loader">
    <img src="./img/loader.svg" alt="Loader">
    </div>
    `;

    content.insertAdjacentHTML("beforeend", lod);

}

export const clearloader = () => {

   const loader = document.querySelector(".loader");

   if(loader) loader.parentElement.removeChild(loader)
}