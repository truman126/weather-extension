function getIcon(desc){
    let icons = {
        "Clear" : "&#x1F324;",
        "Sunny" : "&#x2600;",
        "Partly cloudy" : "&#x26C5;",
        "Cloudy" : "&#x2601;",
        "Overcast" : "&#x2601;",
        "Mist" : "&#x1F4A7;",
        "Patchy rain possible" : "&#x1F327;",
        "Patchy snow possible" : "&#x1F328;",
        "Patchy sleet possible" : "&#x1F328;",
        "Patchy freezing drizzle possible" : "&#x1F327;",
        "Thundery outbreaks possible" : "&#x1F329;",
        "Blowing snow" : "&#x2744;",
        "Blizzard" : "&#x2744;",
        "Fog" : "&#x1F32B;",
        "Freezing fog" : "&#x1F32B;",
        "Patchy light drizzle" : "&#x1F327;",
        "Light drizzle" : "&#x1F327;",
        "Freezing drizzle" : "&#x1F327;",
        "Heavy freezing drizzle" : "&#x1F327;",
        "Patchy light rain" : "&#x1F327;",
        "Light rain" : "&#x1F327;",
        "Moderate rain at times" : "&#x1F327;",
        "Moderate rain" : "&#x1F327;",
        "Heavy rain at times" : "&#x1F327;",
        "Heavy rain" : "&#x1F327;",
        "Light freezing rain" : "&#x1F327;",
        "Moderate or heavy freezing rain" : "&#x1F327;",
        "Light sleet" : "&#x1F328;",
        "Moderate or heavy sleet" : "&#x1F328;",
        "Patchy light snow" : "&#x1F328;",
        "Light snow" : "&#x1F328;",
        "Patchy moderate snow" : "&#x1F328;",
        "Moderate snow" : "&#x1F328;",
        "Patchy heavy snow" : "&#x1F328;",
        "Heavy snow" : "&#x2744;",
        "Ice pellets" : "&#x2744;",
        "Light rain shower" : "&#x1F327;",
        "Moderate or heavy rain shower" : "&#x1F327;",
        "Torrential rain shower" : "&#x1F327;",
        "Light sleet showers" : "&#x1F328;",
        "Moderate or heavy sleet showers" : "&#x1F328;",
        "Light snow showers" : "&#x1F328;",
        "Moderate or heavy snow showers" : "&#x1F328;",
        "Patchy light rain with thunder" : "&#x26C8;",
        "Moderate or heavy rain with thunder" : "&#x26C8;",
        "Patchy light snow with thunder" : "&#x26C8;",
        "Moderate or heavy snow with thunder" : "&#x26C8;",



    
    };
    console.log('fetching icon');

    return icons[desc];    
}