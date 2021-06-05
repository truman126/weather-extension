var city = "strawberry";
var region = "land";
var temp = 666;
var desc = "cloudy with a chance of meatballs";
var icon = 0;

function check() {
  var data = localStorage.getItem("weatherReport");
  data = null;
  if (data == null) {
    //there was no previous fetch for data, fetch and store
    updateReport();
  } else {
    console.log("old is good");
  }
  data = JSON.parse(localStorage.getItem("weatherReport"));
  var lastUpdateTime = new Date(data.time);
  var currentTime = new Date();

  lastUpdateTime = new Date(lastUpdateTime.getTime() + 30 * 60000);
  if (lastUpdateTime < currentTime) {
    //the time has exceeded, a weather update is needed
    updateReport();
  }
}

function updateReport() {
  console.log("updating the report");
  //fetch the weather from wttr.in
  fetch("https://wttr.in/?format=j1")
    .then(response => response.json())
    .then((data) => {
      //create the JSON of the weather report
      let desc=  data.current_condition[0].weatherDesc[0].value;
      let icon = getIcon(desc);

      let report = {
        "time": new Date(),
        "temp_C": data.current_condition[0].temp_C,
        "temp_F": data.current_condition[0].temp_F,
        "city": data.nearest_area[0].areaName[0].value,
        "region": data.nearest_area[0].region[0].value,
        "icon": icon,
      };

      //store report in an instance
      localStorage.setItem("weatherReport", JSON.stringify(report));
    });
}

function updateHTML() {
  let data = JSON.parse(localStorage.getItem("weatherReport"));
  console.log(data);

  document.getElementById("weatherIcon").innerHTML = data.icon;
  document.getElementById("weatherTemp").innerHTML = data.temp_C + " &#x00B0;C";
  document.getElementById("location").innerHTML = "&#x1F4CC; " + data.city + ", " + data.region;

}
document.addEventListener("DOMContentLoaded", function() {
  check();
  updateHTML();
});
