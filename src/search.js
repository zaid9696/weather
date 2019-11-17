
export default  async function search(city){


    try{

        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=aa4fe7564b7077c6bd0e29b4f61e05d4`);

        const data = result.json();

        return data;

    }
    catch(err){

        alert(err);
    }




}