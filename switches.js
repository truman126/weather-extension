//this var represents the switch that operates the night mode
const chk = document.getElementById("chk");

//this var represents the switch that operates the unit changer
const uchk = document.getElementById("uchk");

var darkMode = localStorage.getItem("darkModeSettings");

var unit = localStorage.getItem("unit");


chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
  console.log('before eval: ', darkMode);
  if (darkMode === 'true'){
    console.log('changing to false')
    darkMode = 'false';
    localStorage.setItem("darkModeSettings", false);
    

  }
  else {
    console.log('changing to true')
    darkMode = 'true';
    localStorage.setItem("darkModeSettings", true);

  }

  
  
  console.log("after chamnge", darkMode);

  darkMode = localStorage.getItem("darkModeSettings");
  console.log("reloading", darkMode);




});

uchk.addEventListener("change", () => {
  let arrayOfElementsC=document.getElementsByClassName('cels');
  let arrayOfElementsF=document.getElementsByClassName('fahr');

  let lengthOfArray=arrayOfElementsC.length;

  
  if (uchk.checked == true){
    for (var i=0; i<lengthOfArray;i++){
      arrayOfElementsC[i].style.display='none';
      arrayOfElementsF[i].style.display='block';
      unit = 'true';
      localStorage.setItem("unit", true);
      

  }}
  else{
    for (var i=0; i<lengthOfArray;i++){
      arrayOfElementsC[i].style.display='block';
      arrayOfElementsF[i].style.display='none';
      unit = 'false';
      localStorage.setItem("unit", false);


  }
  }

  
  
  console.log("after chamnge", unit);

  unit = localStorage.getItem("darkModeSettings");
  console.log("reloading", unit);




});
