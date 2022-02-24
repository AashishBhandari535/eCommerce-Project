function loading()
{
  document.getElementById("loader").style.display="none"
}

$(document).ready(function () {
// sticky navbar and scroll to top
    var stickyNavTop = $('.hbottom').offset().top;
    $(window).scroll(function()
    {
        if($(this).scrollTop()>stickyNavTop)
        {
            $('.hbottom').addClass("stickyy")
            $('.goTop').css("opacity","1")
        }
        else
        {
            $('.hbottom').removeClass("stickyy")
            $('.goTop').css("opacity","0")
        }
    })
    // carousel part
      $(".owl-one").owlCarousel({
        nav: true,
        dots: false,
        margin: 10,
        items: 6,
        responsive: {
          0: {
            items: 2,
            nav: true
          },
          480: {
            items: 3,
            nav: true
          },
          768: {
            items: 4,
            nav: true
          },
          992: {
            items: 5,
            nav: true
          },
          1200: {
            items: 6,
            nav: true,
            loop: false
          }
        }
      });
      $(".owl-two").owlCarousel({
        nav: true,
        dots: false,
        margin: 20,
        responsive: {
          0: {
            items: 1,
          },
          576:
          {
            items: 2,
          },
          768:
          {
            items: 3,
          }
        }
      });
      $(".owl-three").owlCarousel({
        nav: true,
        dots: false,
        margin: 20,
        items: 1,
      });
      $(".owl-four").owlCarousel({
        nav: true,
        dots: false,
        margin: 20,
        items: 2,
        responsive: {
          0: {
            items: 2,
            nav: true
          },
        }
      });
      $(".owl-five").owlCarousel({
        nav: true,
        dots: false,
        margin: 10,
        items:1,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          768:
          {
            items: 1,
            nav: true
          },
          992:
          {
            items: 1,
            nav: true
          },
          1200:
          {
            items: 1,
            nav: true
          }
        }
      });
      $(".owl-six").owlCarousel({
        nav: true,
        dots: false,
        items:2,
      });
  });
