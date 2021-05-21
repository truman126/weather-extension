setInterval(function() { 
  
  var date = new Date(); 

  if(date.getHours() == 0 && date.getMinutes() == 0){ 
     setInterval(calcFunction, 900000);
  }
}, 60000);

var calcFunction = function() { 
  var myValue = 0;
  

  if(date1.getHours() == 0 && date1.getMinutes() == 0) {// Check for midnight
      myValue = 0;        // resets value
  } else {
      myValue=myValue + Math.random();  
  }

  console("Value: " + myValue);
};
