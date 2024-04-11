

export default function slickCarousel () {
    $(document).ready(function() {
        $('.multiple-items').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3
          });
    })
}
console.log("slickCarousel working")