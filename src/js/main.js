import "../scss/style.scss";
import $ from "jquery";
import "slick-carousel";




$('.multiple-items').slick({

  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow:".gallery-btn--prev",
 nextArrow:".gallery-btn--next ",
 

  
});

// $(".multiple-items").slick({
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     mobileFirst: true,
//   variableWidth: true,
//     arrows:true,
//     centerMode: false,
//     infinite: true,
  
// });


const menuBar = document.querySelector(".menu-bar");
const toggleNav = document.querySelector(".c-head-menu-lists");
menuBar.addEventListener("click", () => {
  toggleNav.classList.toggle("menu-toggler");
});


window.addEventListener("scroll", (arg) => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

