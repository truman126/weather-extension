function getWeather(){
    $.getJSON("https://wttr.in/?format=j1", function( data ) {
        updateWeather(data);
    });
    
};
function updateWeather(data){
    console.log(data)

    //update the html
    var city = data.nearest_area[0].areaName[0].value;
    var region = data.nearest_area[0].region[0].value;

    document.getElementById('loc').innerHTML = city + ", " + region;
};
getWeather();