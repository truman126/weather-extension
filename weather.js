var city = "strawberry";
var region = "land";
var temp = 666;
var desc = "cloudy with a chance of meatballs";
var icon = 0;
function checkLastFetch() {
    var json = [];
  fetch("./data.json")
    .then((response) => response.json())
    result => cb(result
    console.log(json);
}

function getWeather() {
  $.getJSON("https://wttr.in/?format=j1", function (data) {
    updateWeather(data);
  });
}
function updateWeather(data) {
  //update the values to push to the html
  city = data.nearest_area[0].areaName[0].value;
  region = data.nearest_area[0].region[0].value;
  temp = data.current_condition[0].temp_C;
  desc = data.current_condition[0].weatherDesc[0].value;
  icon = matchDesc(desc);

  //update the html
  document.getElementById("loc").innerHTML = city + ", " + region;
  document.getElementById("weatherTemp").innerHTML = temp;
  document.getElementById("weatherIcon").innerHTML = icon;
}

function matchDesc(desc) {
  var icon = "sun";
  $.get("icons.txt", function (data) {
    var lines = data.split("\n");
    var text = [];

    for (i = 0; i < lines.length; i++) {
      text[i] = lines[i].split(",");
      if (text[i][0] == desc) {
        console.log("found!!!");
        icon = text[i][1];
        break;
      }
    }
  });
  return icon;
}
checkLastFetch();
getWeather();
