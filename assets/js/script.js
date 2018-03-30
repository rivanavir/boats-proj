$(document).ready(function(){
  
  $('#recentCarousel').owlCarousel({
    center: true,
    items:4,
    loop: true,
    margin:26,
    nav: true,
    // navText: 'asdf',
    navText : ["",""],
    rewindNav : true
  });
  
  // $("#featureCarouselWrap").cascadeSlider({
      
  // });
  $("#featureCarouselWrap").carousel({
    num: 7,
    maxWidth: 1500,
    maxHeight: 545,
    distance: 50,
    scale: 0.6,
    animationTime: 1000,
    showTime: 4000
  });

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
    // thumbItem:9,
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
    }
  });
  
  // range slider
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

});
