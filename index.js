

const toggleBtn = document.querySelector(".toggle_btn");
const toggleBtnIcon = document.querySelector(".toggle_btn i");
const dropdown = document.querySelector(".dropdown_menu");


function myfunc(){
    
    document.querySelector(".dropdown_menu").classList.toggle("open");
    console.log(document.querySelector(".dropdown_menu").classList.contains("open"));
    if(document.querySelector(".dropdown_menu").classList.contains("open")){
        document.querySelector('.toggle_btn i').className = "fa-solid fa-xmark";
        console.log(document.querySelector('.toggle_btn i').className);
    }
    else{
        document.querySelector('.toggle_btn i').className = "fa-solid fa-bars";
        console.log(document.querySelector('.toggle_btn i').className);

    }
    
}
var count =0;
function slideShow(){
    console.log("hi");
    if(count == 3){
        count = 1;
    }
    else{
        count++;
    }

    var img = document.querySelector("#slideshow img");
    img.src = `Images/poster${count}.jpeg`;
     console.log("opacity");

}
document.addEventListener("DOMContentLoaded",function(){
    setInterval(slideShow,4000);
})