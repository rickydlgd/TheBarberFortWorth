
document.addEventListener('DOMContentLoaded', nav)
function nav(){
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-wrapper');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('show')
    })
};

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

$("#contact-button").click(function() {
  $("html, body").animate({
    scrollTop: $("#contact").offset().top
  }, 1000);
});

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

$("#contact-button-footer").click(function() {
  $("html, body").animate({
    scrollTop: $("#contact").offset().top
  }, 1000);
});
