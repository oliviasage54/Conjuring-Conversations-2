/*Script for the navigation link changing when you are on that page*/
/*Home page link*/
var homePageLink = document.getElementById("homeLink");
var homeDiv = document.getElementById("h");
/*Episodes page*/
var episodesPageLink = document.getElementById("episodesLink");
var episodesDiv = document.getElementById("e");
/*submissions page*/
var submissionsPageLink = document.getElementById("subLink");
var submissionsDiv = document.getElementById("su");
/*Meet the team page*/ 
var meetTeamPageLink = document.getElementById("teamLink");
var meetDiv = document.getElementById("m");
/*Shop page*/
var shopPageLink = document.getElementById("shopLink");
var shopDiv = document.getElementById("sh");


if(document.URL.includes("index.html")){
    homePageLink.style.textDecoration = "underline";
}
else if(document.URL.includes("episodes.html")){
    episodesPageLink.style.textDecoration = "underline";
}
else if(document.URL.includes("meetTheTeam.html")){
    meetTeamPageLink.style.textDecoration = "underline";
}
else if(document.URL.includes("shop.html")){
    shopPageLink.style.textDecoration = "underline";
}
else if(document.URL.includes("submissions.html")){
    submissionsPageLink.style.textDecoration ="underline";
}


/*Menu responsive code*/
const hamburger = document.getElementById('menuIcon');
const closeMenu = document.getElementById('closeNav');
const navUL = document.getElementById('navUL');

hamburger.addEventListener('click', () =>{
    navUL.classList.toggle('show');
});


closeMenu.addEventListener('click', () =>{
    navUL.classList.toggle('show');
});
