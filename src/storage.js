

export default class Storage{


    static getStorage(){


        const getItem =  JSON.parse(localStorage.getItem("search"));

        return localStorage.getItem("search") ? getItem : '';

    }

    static setStorage(value){

        localStorage.setItem("search", JSON.stringify(value))


    }


}