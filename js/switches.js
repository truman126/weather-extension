//this var represents the switch that operates the night mode
const chk = document.getElementById("chk");

//this var represents the switch that operates the unit changer
const uchk = document.getElementById("uchk");

var darkMode = localStorage.getItem("darkModeSettings");

var unit = localStorage.getItem("unit");


chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");

  if (darkMode === 'true'){

    darkMode = 'false';
    localStorage.setItem("darkModeSettings", false);
    

  }
  else {
    darkMode = 'true';
    localStorage.setItem("darkModeSettings", true);

  }


  darkMode = localStorage.getItem("darkModeSettings");


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

  unit = localStorage.getItem("darkModeSettings");

});
