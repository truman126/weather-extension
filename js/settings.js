document.addEventListener("DOMContentLoaded", function () {
    var darkMode = localStorage.getItem("darkModeSettings");
    var unit = localStorage.getItem("unit");

    if (darkMode == 'true'){

        document.body.classList.add("dark")
        document.getElementById('chk').checked = true;
    }
    else {

    }
    console.log('unit: ', unit);
    if (unit == 'true'){
        let arrayOfElementsF=document.getElementsByClassName('fahr');
        let lengthOfArray=arrayOfElementsF.length;
        let arrayOfElementsC=document.getElementsByClassName('cels');


        for (var i=0; i<lengthOfArray;i++){
            arrayOfElementsC[i].style.display='none';
            arrayOfElementsF[i].style.display='block';
      
        }

    }

});
