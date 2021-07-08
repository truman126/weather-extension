function scan(icons, iconArr){
    let result = "";
    let tempResult = "";

    for (i = 0; i < iconArr.length; i++){
        tempResult = icons[iconArr[i].toLowerCase()];

        if (tempResult !== undefined){
            result += tempResult;
            

        }
    }
    
    return result;
    

}

function getIcon(desc){
    var icons = {
        "clear" : "&#x1F324;",
        "sunny" : "&#x2600;",
        "partly cloudy" : "&#x26C5;",
        "cloudy" : "&#x2601;",
        "overcast" : "&#x2601;",
        "mist" : "&#x1F4A7;",
        "patchy rain possible" : "&#x1F327;",
        "patchy snow possible" : "&#x1F328;",
        "patchy sleet possible" : "&#x1F328;",
        "patchy freezing drizzle possible" : "&#x1F327;",
        "thundery outbreaks possible" : "&#x1F329;",
        "blowing snow" : "&#x2744;",
        "blizzard" : "&#x2744;",
        "fog" : "&#x1F32B;",
        "freezing fog" : "&#x1F32B;",
        "patchy light drizzle" : "&#x1F327;",
        "light drizzle" : "&#x1F327;",
        "lreezing drizzle" : "&#x1F327;",
        "heavy freezing drizzle" : "&#x1F327;",
        "patchy light rain" : "&#x1F327;",
        "light rain" : "&#x1F327;",
        "rain" : "&#x1F327;",
        "moderate rain at times" : "&#x1F327;",
        "moderate rain" : "&#x1F327;",
        "heavy rain at times" : "&#x1F327;",
        "heavy rain" : "&#x1F327;",
        "light freezing rain" : "&#x1F327;",
        "moderate or heavy freezing rain" : "&#x1F327;",
        "light sleet" : "&#x1F328;",
        "moderate or heavy sleet" : "&#x1F328;",
        "patchy light snow" : "&#x1F328;",
        "light snow" : "&#x1F328;",
        "patchy moderate snow" : "&#x1F328;",
        "moderate snow" : "&#x1F328;",
        "patchy heavy snow" : "&#x1F328;",
        "heavy snow" : "&#x2744;",
        "ice pellets" : "&#x2744;",
        "light rain shower" : "&#x1F327;",
        "moderate or heavy rain shower" : "&#x1F327;",
        "torrential rain shower" : "&#x1F327;",
        "light sleet showers" : "&#x1F328;",
        "moderate or heavy sleet showers" : "&#x1F328;",
        "light snow showers" : "&#x1F328;",
        "moderate or heavy snow showers" : "&#x1F328;",
        "patchy light rain with thunder" : "&#x26C8;",
        "moderate or heavy rain with thunder" : "&#x26C8;",
        "patchy light snow with thunder" : "&#x26C8;",
        "moderate or heavy snow with thunder" : "&#x26C8;",
        "snow" : "&#x1F328;",
        "sun" : "&#x2600;",
        "cloud" : "&#x2601;",
        "hail" : "&#x2744;"
    
    };
    let iconArray = desc.split(", ");
    desc = "snow";

    result = scan(icons, iconArray);
 
    if ((result  == 'undefined') || (result == "")){
        iconArray = desc.split(" ");
        result = scan(icons, iconArray);
    }


    return result;    
}