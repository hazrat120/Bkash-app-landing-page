// banner Script Satrt =======

$(".banner-wrapper").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  autoplaySpeed: 2000,
  asNavFor: ".banner-text",
  arrows: false,
  pauseOnHover: true,
  pauseOnFocus: true,
});

$(".banner-text").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  arrows: false,
  autoplaySpeed: 2000,
  asNavFor: ".banner-wrapper",
});

// Button script =========

window.setTimeout(function () {
  document.getElementById("butn").style.visibility = "visible";
}, 500);
