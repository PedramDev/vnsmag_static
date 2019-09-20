$(document).ready(function () {

  $('.owl-carousel .item .news-title p').fitText(0.8, {
    minFontSize: '10px',
    maxFontSize: '20px'
  });

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


  var topvisit_owl = $("#owl-carousel-newarticles");
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

  $("#preloadStory").knob({
    'min': 0,
    'max': 100,
    'value': 0,
    'readOnly': true,
    'width': '100',
    'height': '100',
    'skin': 'tron',
    'thickness': .2,
    'displayPrevious': true,
    'font': 'bold 25px IranSans'
  });

  var preloadcounter = 0;
  var preloadStoryIntervalId = setInterval(function () {
    preloadcounter++;
    $("#preloadStory").val(preloadcounter).trigger('change');
    if (preloadcounter == 100) {
      clearInterval(preloadStoryIntervalId);
      FireStory();
    }
  }, 100);

  var storyUrl = 'https://instagram.fhel5-1.fna.fbcdn.net/v/t72.14836-16/27465464_600744657121807_1823185928213535596_n.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5zdG9yeSJ9&_nc_ht=instagram.fhel5-1.fna.fbcdn.net&_nc_cat=107&vs=18031125049208467_2239051856&_nc_vs=HBkcFQAYJEdQZ1dvd0VQY3VQRFh5SUNBR3licUNyeFFVMFpidlE1QUFBRhUAACgAGAAbAYgHdXNlX29pbAEwFQAAGAAWporIic7Nh0AVAhkFGAJDMywXQCQAAAAAAAAYEmRhc2hfYmFzZWxpbmVfMV92MREAdegHAA%3D%3D&oe=5D852549&oh=d3be18b12836c6658034499a60795057';

  function FireStory() {
    $('#counterHolder').remove();
    $("#storyurl").attr('href',storyUrl);
    $('#storyHolder .d-none').removeClass('d-none');
  }


  $(document).on('click','#to_certificate',function(e){
    e.preventDefault();
    $('html, body').animate({ scrollTop:  $('#certificate_info').offset().top - 50 }, 'slow');
  })
  $(document).on('click','#to_contactus',function(e){
    e.preventDefault();
    $('html, body').animate({ scrollTop:  $('#contactus_info').offset().top - 50 }, 'slow');
  })


});
