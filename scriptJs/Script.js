// banner Script Satrt =======

// $(".banner-wrapper").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   infinite: true,
//   autoplaySpeed: 2000,
//   asNavFor: ".banner-text",
//   arrows: false,
//   pauseOnHover: true,
//   pauseOnFocus: true,
// });

// $(".banner-text").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   infinite: true,
//   arrows: false,
//   autoplaySpeed: 2000,
//   asNavFor: ".banner-wrapper",
// });

// Button script =========

// window.setTimeout(function () {
//   document.getElementById("butn").style.visibility = "visible";
// }, 500);

// $(function () {
//   lightbox.option({
//     resizeDuration: 200,
//     wrapAround: true,
//   });
// });

// For Video play

new VenoBox({
  selector: ".my-video-links",
});

// For counter up
$(".count-up").each(function () {
  var $this = $(this),
    countTo = $this.attr("data-count");

  $({ countNum: $this.text() }).animate(
    {
      countNum: countTo,
    },

    {
      duration: 8000,
      easing: "linear",
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      },
    }
  );
});

// Auto play user review
$(".autoplay").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  infinite: true,
  speed: 500,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: true,
});
