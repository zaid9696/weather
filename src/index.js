import search from './search';
import Storage from './storage';
import {view , loader, clearloader} from './view';



const searchForm = document.querySelector(".search__form");
const searchInput = document.querySelector(".search__field");


// Search Control
const searchControl = async (item) =>{

    
   try{
       

        loader()

     await search(item).then(data =>{

        
        searchInput.value = '';
        if(data.cod === "404"){
            alert(data.message)
            clearloader()
            return
        }
        clearloader()
        Storage.setStorage(item);
        view(data)
        

    })
   }
   catch(err){
       alert(err)
   }

}

// AddEventlistener for SearchControl
searchForm.addEventListener("submit", (e) => {

    e.preventDefault();

    let searchInputValue = searchInput.value;
    if(searchInputValue === ''){
        alert("Please Fill The Field")
        return
    }

    searchControl(searchInputValue)

});

// Dom Load

document.addEventListener("DOMContentLoaded", () =>{

    const itemStorage =  Storage.getStorage();

    if(itemStorage === '') return
    
    searchControl(itemStorage)
   
})


