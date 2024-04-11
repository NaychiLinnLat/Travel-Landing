import "../scss/style.scss";
import $ from "jquery";
import "slick-carousel";

window.addEventListener("scroll", (arg) => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

$('.multiple-items').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 5,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    }
  ]
});
// $(".multiple-items").slick({
//     slidesToShow: 5,
//     slidesToScroll: 2,
//     mobileFirst: true,
//   variableWidth: true,

//     centerMode: false,
//     infinite: true,
  
// });


const menuBar = document.querySelector(".menu-bar");
const toggleNav = document.querySelector(".nav-wrap-menu-lists");
menuBar.addEventListener("click", () => {
  toggleNav.classList.toggle("menu-toggler");
});
