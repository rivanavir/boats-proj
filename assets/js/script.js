$(document).ready(function(){
  // custom scroll
  let getSroll = function(){
    if($(window).outerWidth() > 991){
      $('.search-res-wrapper').mCustomScrollbar();
    } else{
      $('.search-res-wrapper').mCustomScrollbar('destroy');
    }
  };
  getSroll();
  $(window).resize(function(){
    getSroll();
  });

  $('#recentCarousel').owlCarousel({
    center: true,
    loop: true,
    margin:26,
    nav: true,
    navText : ["",""],
    rewindNav : true,
    responsive:{
      0:{
        items:1,
        margin:0  
      },
      768:{
        items:2,
        margin: 15 
      },
      992:{
        items:4
      }
    }
  });

  // $("#featureCarouselWrap").AnimatedSlider( { 
  //   prevButton: "#btn_prev2", 
  //   nextButton: "#btn_next2",
  //   visibleItems: 5,
  //   infiniteScroll: true,
  // });

  var featureFlat = $("#featureCarouselWrap").flipster({
    style: 'flat',
    spacing: -0.4,
    buttons:   true,
    loop: true,
    buttons: false,
    onItemSwitch: function(el){
      // console.log(featureFlat);
      // featureFlat.flipster('index');
    }
  });
  $('.flipster__button').on("click", function(e){
    console.log(featureFlat);
    e.preventDefault();
    if($(this).hasClass('button--prev')){
      featureFlat.flipster('prev');
    }
    if($(this).hasClass('button--next')){
      featureFlat.flipster('next');
    }
  })



  $('#btn_prev').on('click', function (e) {
    e.preventDefault();
    carousel.prev();
    return false
  });

  $('#btn_next').on('click', function (e) {
    e.preventDefault();
    carousel.next();
    return false;
  });

  $('#boatDetailGallery').lightSlider({
    gallery:true,
    item:1,
    // height: 730,
    height: '100vh',
    thumbContHeight: 183,
    thumbWidth: 235,
    thumbHeight: 160,
    thumbMargin: 0,
    controls: false,
    // pager: true,
    thumbItem:9,
    responsive : [
      {
        breakpoint:1330,
        settings: {
          thumbItem:6
        }
      },
      {
        breakpoint:991,
        settings: {
          thumbItem:4
        }
      }
    ],
    addClass: 'detail-boat-wrap',
    slideMargin:0,
    enableDrag: false,
    currentPagerPosition:'left',
    onSliderLoad: function(el) {
      let controlHtml = `<div class="circle-arrow left"><i class="boat-arrow-left-icon"></i></div>
                          <div class="circle-arrow right"><i class="boat-arrow-right-icon"></i></div>`;
      let counterHtml = `<div class="counter"><span class="current"></span><span class="total"></span></div>`;
      el.lightGallery({
        selector: '#boatDetailGallery .lslide'
      });

      $('.detail-boat-wrap').append(controlHtml, counterHtml);
      $('.detail-boat-wrap .circle-arrow').on('click', function(e){
        e.preventDefault();
        if($(this).hasClass('left')){
          el.goToPrevSlide();
        }
        if($(this).hasClass('right')){
          el.goToNextSlide();
        }
      });

      let sliderCounter = $(el).parents('.detail-gallery-block');
      $(sliderCounter).find('span.total').text(el.getTotalSlideCount());
      $(sliderCounter).find('span.current').text(el.getCurrentSlideCount());
    },
    onBeforeSlide: function (el) {
      let sliderCounter = $(el).parents('.detail-gallery-block');
      $(sliderCounter).find('span.current').text(el.getCurrentSlideCount());
    }
  });
  // range slider
  if($('#priceRangeSlider')){
    var priceSlider = document.getElementById('priceRangeSlider');
    noUiSlider.create(priceSlider, {
      start: [ 299, 2299 ],
      connect: true,
      step: 1,
      range: {
        'min': 0,
        'max': 3000
      }
    });
    var paddingMin = document.getElementById('sliderValueMin'),
    paddingMax = document.getElementById('sliderValueMax');
    priceSlider.noUiSlider.on('update', function ( values, handle ) {
      if ( handle ) {
        paddingMax.value = values[handle];
      } else {
        paddingMin.value = values[handle];
      }
    });
  }
  $('.search-res-carousel').lightSlider({
    item:4,
    slideMargin:0,
    pager: false,
    responsive : [
      {
        breakpoint:2560,
        settings: {
          item:3
        }
      },{
        breakpoint:2100,
        settings: {
          item:2
        }
      },{
        breakpoint:1440,
        settings: {
          item:1
        }
      }
    ],
    prevHtml:'<i class="boat-arrow-left-icon"></i>',
    nextHtml:'<i class="boat-arrow-right-icon"></i>',
    onSliderLoad: function (el) {
      let sliderCounter = $(el).parents('.carousel-wrap');
      $(sliderCounter).find('span.total').text(el.getTotalSlideCount());
      $(sliderCounter).find('span.current').text(el.getCurrentSlideCount());
    },
    onBeforeSlide: function (el) {
      let sliderCounter = $(el).parents('.carousel-wrap');
      $(sliderCounter).find('span.current').text(el.getCurrentSlideCount());
    }
  });
  $('#searchSideToggler, #closeLink').on('click',function(e){
    e.preventDefault();
    $('#searchSidebar').toggleClass('side-open');
  });
  $('#bs-navbar-collapse-1').on('show.bs.collapse',function(){
    $('#searchSidebar').removeClass('side-open');
  });

});
