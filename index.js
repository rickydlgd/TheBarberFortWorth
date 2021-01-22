
// This function makes sure to toggle the burger style menu when clicked on and also makes sure that the entire nav bar is toggled when a button is clicked on.
document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-wrapper');
    const services = document.querySelector('#services-button')
    const about = document.querySelector('#about-button')
    const location = document.querySelector('#location-button')
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    });
    services.addEventListener('click', ()=>{
      nav.classList.toggle('show')
    });
    about.addEventListener('click', ()=>{
      nav.classList.toggle('show')
    });
    contact.addEventListener('click', ()=>{
      nav.classList.toggle('show')
    });
};

// These 3 animate the page when a button from the navigation bar is clicked on.
$("#services-button").click(function() {
  $("html, body").animate({
    scrollTop: $("#services").offset().top
  }, 1000);
});

$("#about-button").click(function() {
  $("html, body").animate({
    scrollTop: $("#about").offset().top
  }, 1000);
});

$("#location-button").click(function() {
  $("html, body").animate({
    scrollTop: $("#location").offset().top
  }, 1000);
});

// These 3 animate the page when a button from the footer-links are clicked on.
$("#services-button-footer").click(function() {
  $("html, body").animate({
    scrollTop: $("#services").offset().top
  }, 1000);
});

$("#about-button-footer").click(function() {
  $("html, body").animate({
    scrollTop: $("#about").offset().top
  }, 1000);
});

$("#location-button-footer").click(function() {
  $("html, body").animate({
    scrollTop: $("#location").offset().top
  }, 1000);
});

// Adds functionality for barber location within Contact Us page
function myNavFunc() {
  // If it's an iPhone..
  if ((navigator.platform.indexOf("iPhone") != -1) ||
    (navigator.platform.indexOf("iPod") != -1) ||
    (navigator.platform.indexOf("iPad") != -1))
    window.open("maps://goo.gl/maps/35d8PvpP3BkdD6FZ8");
  else
    window.open("https://goo.gl/maps/35d8PvpP3BkdD6FZ8");
}
