var menuicon= document.getElementById("menu-icon");
var popupbox=document.querySelector(".popup-box");
menuicon.addEventListener("click",function(event){
    event.preventDefault();
     popupbox.style.display="block";
});
var cancelbutton=document.querySelector(".cancelbutton");
cancelbutton.addEventListener("click",function(event){
    event.preventDefault();
    popupbox.style.display="none";
});
var ee =document.getElementById("1");
var educationDetails=document.querySelector(".Educationdetails");
ee.addEventListener("click",function(event){
    event.preventDefault();
    popupbox.style.display="none";
    educationDetails.style.display="block";
});
var cancelbutton2=document.querySelector(".cancelbutton2");
var educationDetails=document.querySelector(".Educationdetails");
cancelbutton2.addEventListener("click",function(event){
    event.preventDefault();
    educationDetails.style.display="none";
    popupbox.style.display="block";
});
