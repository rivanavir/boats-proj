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
});
