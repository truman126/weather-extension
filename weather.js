// var city = "strawberry";
// var region = "land";
// var temp = 666;
// var desc = "cloudy with a chance of meatballs";
// var icon = 0;

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
  var lastUpdateTime = new Date(data.current[0].time);
  var currentTime = new Date();

  lastUpdateTime = new Date(lastUpdateTime.getTime() + 30 * 30000);

  console.log('lastUpdateTime', lastUpdateTime);
  console.log('currentTime', currentTime)
  if (lastUpdateTime < currentTime.getTime()) {
    //the time has exceeded, a weather update is needed
    console.log('report expired, fetching new data')
    updateReport();
  }
}

function updateReport() {
  console.log("updating the report");
  //fetch the weather from wttr.in
  fetch("https://wttr.in/?format=j1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let report = {
        current: [
          {
            time: new Date(),
            tempF: data.current_condition[0].temp_F,
            city: data.nearest_area[0].areaName[0].value,
            region: data.nearest_area[0].region[0].value,
            tempC: data.current_condition[0].temp_C,
            icon: getIcon(data.current_condition[0].weatherDesc[0].value),
            humidity: data.current_condition[0].humidity,
          },
        ],
        forecast: [
          [
            {
              tempC: data.weather[0].hourly[2].tempC,
              tempF: data.weather[0].hourly[2].tempF,
              desc: data.weather[0].hourly[2].weatherDesc[0].value,
              icon: getIcon(data.weather[0].hourly[2].weatherDesc[0].value),
              precip: data.weather[0].hourly[2].chanceofrain,
            },
            {
              tempC: data.weather[0].hourly[4].tempC,
              tempF: data.weather[0].hourly[4].tempF,
              desc: data.weather[0].hourly[4].weatherDesc[0].value,
              icon: getIcon(data.weather[0].hourly[4].weatherDesc[0].value),
              precip: data.weather[0].hourly[4].chanceofrain,
            },
            {
              tempC: data.weather[0].hourly[6].tempC,
              tempF: data.weather[0].hourly[6].tempF,
              desc: data.weather[0].hourly[6].weatherDesc[0].value,
              icon: getIcon(data.weather[0].hourly[6].weatherDesc[0].value),
              precip: data.weather[0].hourly[6].chanceofrain,
            },
            {
              tempC: data.weather[0].hourly[7].tempC,
              tempF: data.weather[0].hourly[7].tempF,
              desc: data.weather[0].hourly[7].weatherDesc[0].value,
              icon: getIcon(data.weather[0].hourly[7].weatherDesc[0].value),
              precip: data.weather[0].hourly[7].chanceofrain,
            },
          ],
          [
            {
              tempC: data.weather[1].hourly[2].tempC,
              tempF: data.weather[1].hourly[2].tempF,
              desc: data.weather[1].hourly[2].weatherDesc[0].value,
              icon: getIcon(data.weather[1].hourly[2].weatherDesc[0].value),
              precip: data.weather[1].hourly[2].chanceofrain,
            },
            {
              tempC: data.weather[1].hourly[4].tempC,
              tempF: data.weather[1].hourly[4].tempF,
              desc: data.weather[1].hourly[4].weatherDesc[0].value,
              icon: getIcon(data.weather[1].hourly[4].weatherDesc[0].value),
              precip: data.weather[1].hourly[4].chanceofrain,
            },
            {
              tempC: data.weather[1].hourly[6].tempC,
              tempF: data.weather[1].hourly[6].tempF,
              desc: data.weather[1].hourly[6].weatherDesc[0].value,
              icon: getIcon(data.weather[1].hourly[6].weatherDesc[0].value),
              precip: data.weather[1].hourly[6].chanceofrain,
            },
            {
              tempC: data.weather[1].hourly[7].tempC,
              tempF: data.weather[1].hourly[7].tempF,
              desc: data.weather[1].hourly[7].weatherDesc[0].value,
              icon: getIcon(data.weather[1].hourly[7].weatherDesc[0].value),
              precip: data.weather[1].hourly[7].chanceofrain,
            },
          ],
          [
            {
              tempC: data.weather[2].hourly[2].tempC,
              tempF: data.weather[2].hourly[2].tempF,
              desc: data.weather[2].hourly[2].weatherDesc[0].value,
              icon: getIcon(data.weather[2].hourly[2].weatherDesc[0].value),
              precip: data.weather[2].hourly[2].chanceofrain,
            },
            {
              tempC: data.weather[2].hourly[4].tempC,
              tempF: data.weather[2].hourly[4].tempF,
              desc: data.weather[2].hourly[4].weatherDesc[0].value,
              icon: getIcon(data.weather[2].hourly[4].weatherDesc[0].value),
              precip: data.weather[2].hourly[4].chanceofrain,
            },
            {
              tempC: data.weather[2].hourly[6].tempC,
              tempF: data.weather[2].hourly[6].tempF,
              desc: data.weather[2].hourly[6].weatherDesc[0].value,
              icon: getIcon(data.weather[2].hourly[6].weatherDesc[0].value),
              precip: data.weather[2].hourly[6].chanceofrain,
            },
            {
              tempC: data.weather[2].hourly[7].tempC,
              tempF: data.weather[2].hourly[7].tempF,
              desc: data.weather[2].hourly[7].weatherDesc[0].value,
              icon: getIcon(data.weather[2].hourly[7].weatherDesc[0].value),
              precip: data.weather[2].hourly[7].chanceofrain,
            },
          ],
        ],
      };

      console.log(report);
      //store report in local storage
      localStorage.setItem("weatherReport", JSON.stringify(report));
    });
}

function updateHTML() {
  //fetch the report
  let data = JSON.parse(localStorage.getItem("weatherReport"));

  //update the dates
  let today = new Date();
  let date_temp = new Date();

  date_temp.setDate(today.getDate() + 1);
  document.getElementById("date-1").innerHTML = date_temp.toDateString();

  date_temp.setDate(today.getDate() + 2);
  document.getElementById("date-2").innerHTML = date_temp.toDateString();

  document.getElementById("weatherIcon").innerHTML = data.current[0].icon;
  document.getElementById("weatherTempC").innerHTML =
    data.current[0].tempC + " &#x00B0;C";

  document.getElementById("weatherTempF").innerHTML =
    data.current[0].tempF + " &#x00B0;F";

    document.getElementById("location").innerHTML =
    "&#x1F4CC; " + data.current[0].city + ", " + data.current[0].region;

  //create the current time to show last time updated
  let currentTime = 0;
  if (today.getMinutes < 10){
    currentTime = today.getHours() + ":0" , today.getMinutes();
  }
  else{
    currentTime = today.getHours() + ":" + today.getMinutes();

  }

  document.getElementById("update-time").innerHTML ="Last Update: " + currentTime;
  
  document.getElementById("humidity").innerHTML =
    "Humidity: " + data.current[0].humidity + "%";

  //update the future forecast

  for (i = 1; i < 4; i++) {
    for (j = 1; j < 5; j++) {
      let tempCName = "tempC-" + i + "-" + j;
      let tempFName = "tempF-" + i + "-" + j;

      let iconName = "icon-" + i + "-" + j;
      let precipName = "precip-" + i + "-" + j;

      document.getElementById(tempCName).innerHTML =
        data.forecast[i - 1][j - 1].tempC;
        document.getElementById(tempFName).innerHTML =
        data.forecast[i - 1][j - 1].tempF;
      document.getElementById(iconName).innerHTML =
        data.forecast[i - 1][j - 1].icon;
      if (data.forecast[i - 1][j - 1].precip > 5) {
        document.getElementById(precipName).innerHTML =
          "&#128167;" + data.forecast[i - 1][j - 1].precip + "%";
        document.getElementById(precipName).style.display = "inline";
      }
    }
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const chk = document.getElementById("chk");

  //remove this at launch
  check();
  updateHTML();
});
