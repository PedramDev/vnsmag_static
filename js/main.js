$(document).ready(function () {

  $('.owl-carousel .item .news-title p').fitText(0.8, { minFontSize: '10px', maxFontSize: '20px' });

    $.scrollUp();

    $('.marquee').marquee({
      duration: 10000,
      duplicate: true,
      direction: 'right'
    });

    var discount_owl = $("#owl-carousel-discount");
    discount_owl.owlCarousel({
      rtl: true,
      items: 3,
      nav: false,
      dots: false,
      autoplay: true,
      loop: true,
      margin: 5,
      responsiveClass: true,
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: false,
      responsive: {
        0: {
          items: 3
        },

        600: {
          items: 3
        },

        1024: {
          items: 5
        },

        1366: {
          items: 7
        }
      }
    });


    var topvisit_owl = $("#owl-carousel-topvisit");
    topvisit_owl.owlCarousel({
      rtl: true,
      items: 3,
      nav: false,
      dots: false,
      autoplay: true,
      loop: true,
      margin: 5,
      responsiveClass: true,
      autoHeight: true,
      autoplayTimeout: 7000,
      smartSpeed: 800,
      nav: false,
      responsive: {
        0: {
          items: 3
        },

        600: {
          items: 3
        },

        1024: {
          items: 5
        },

        1366: {
          items: 7
        }
      }
    });

    var getMax = function () {
      return $(document).height() - $(window).height();
    }

    var getValue = function () {
      return $(window).scrollTop();
    }

    var indicator = document.createElement('progress');
    if ('max' in indicator) {
      // Browser supports progress element
      var progressBar = $('#progressBar');
      // Set the Max attr for the first time
      progressBar.attr({
        max: getMax()
      });

      $(document).on('scroll', function () {
        // On scroll only Value attr needs to be calculated
        progressBar.attr({
          value: getValue()
        });
      });

      $(window).resize(function () {
        // On resize, both Max/Value attr needs to be calculated
        progressBar.attr({
          max: getMax(),
          value: getValue()
        });
      });
    } else {
      var progressBar = $('.page-progress-bar'),
        max = getMax(),
        value, width;

      var getWidth = function () {
        // Calculate width in percentage
        value = getValue();
        width = (value / max) * 100;
        width = width + '%';
        return width;
      }

      var setWidth = function () {
        progressBar.css({
          width: getWidth()
        });
      }

      $(document).on('scroll', setWidth);
      $(window).on('resize', function () {
        // Need to reset the Max attr
        max = getMax();
        setWidth();
      });
    }
    
    var pageIndicator = $('#pageProgressBar');
    $(pageIndicator).addClass('indicator-single');
  });