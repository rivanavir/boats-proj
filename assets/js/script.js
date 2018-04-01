$(document).ready(function(){
  
  $('#recentCarousel').owlCarousel({
    center: true,
    // items:1,
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
  
  // $("#featureCarouselWrap").cascadeSlider({
      
  // });
  // $("#featureCarouselWrap").

  $("#featureCarouselWrap").AnimatedSlider( { 
    prevButton: "#btn_prev2", 
    nextButton: "#btn_next2",
    visibleItems: 7,
    infiniteScroll: true,
    // willChangeCallback: function(obj, item) {
    //   $("#statusText").text("Will change to " + item);
    // },
    // changedCallback: function(obj, item) {
    //   $("#statusText").text("Changed to " + item);
    // }
  });
  
  // $("#featureCarouselWrap").carousel({
  //   num: 7,
  //   maxWidth: 545,
  //   maxHeight: 545,
  //   distance: 200,
  //   scale: 0.6,
  //   animationTime: 1000,
  //   showTime: 4000
  // });

  $('#boatDetailGallery').lightSlider({
    gallery:true,
    item:1,
    // verticalHeight: 440,
    height: 730,
    thumbContHeight: 183,
    thumbWidth: 235,
    thumbHeight: 160,
    thumbMargin: 0,
    controls: false,
    // loop:true,
    thumbItem:9,
    responsive : [
      {
        breakpoint:991,
        settings: {
          thumbItem:6
        }
      },
      {
        breakpoint:575,
        settings: {
          thumbItem:4
        }
      }
    ],
    // prevHtml:'<div class="circle-arrow left"><i class="boat-arrow-left-icon"></i></div>',
    // nextHtml:'<div class="circle-arrow right"><i class="boat-arrow-right-icon"></i></div>',
    addClass: 'boat-detail-wrap',
    slideMargin:0,
    enableDrag: false,
    currentPagerPosition:'left',
    onSliderLoad: function(el) {
      let controlHtml = `<div class="circle-arrow left"><i class="boat-arrow-left-icon"></i></div>
                          <div class="circle-arrow right"><i class="boat-arrow-right-icon"></i></div>`;
      el.lightGallery({
        selector: '#boatDetailGallery .lslide'
      });

      $('.boat-detail-wrap').append(controlHtml);
      $('.boat-detail-wrap .circle-arrow').on('click', function(e){
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

    // var priceSlider = document.getElementById('priceRangeSlider');
    
    // noUiSlider.create(priceSlider, {
    //   start: [ 299, 2299 ],
    //   connect: true,
    //   step: 1,
    //   range: {
    //     'min': 0,
    //     'max': 3000
    //   }
    // });
    
    // var paddingMin = document.getElementById('sliderValueMin'),
    // paddingMax = document.getElementById('sliderValueMax');
    
    // priceSlider.noUiSlider.on('update', function ( values, handle ) {
    //   if ( handle ) {
    //     paddingMax.value = values[handle];
    //   } else {
    //     paddingMin.value = values[handle];
    //   }
    // });
  }

  $('.search-res-carousel').lightSlider({
    item:1,
    slideMargin:0,
    pager: false,
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

});
