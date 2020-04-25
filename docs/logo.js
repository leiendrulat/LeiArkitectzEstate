var URL = "index.htm";
var  logo = document.querySelectorAll("#logo path");
var t = 0.3;
logo.forEach(function(i){
  console.log(i);
  i.style.strokeDasharray = i.getTotalLength()+"px";
  i.style.strokeDashoffset = i.getTotalLength()+"px";
  i.style.animation = `line-anim 2s ease forwards ${1}s`;
  setTimeout(function(){ window.location.href = "file:///C:/Users/leiar/OneDrive/Documents/CIS131/Assignment/hw/WK11/LAB11/index.htm"; }, 5000);
  ;
});






