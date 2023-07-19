/*
$(window).scroll(function() {

    if ($(this).scrollTop() > 450) {
       $('.container-nav').stop().fadeIn(800); 
   } else {$('.container-nav').stop().fadeOut(800);
    };
});   
*/

//Navbar - Scroll-fadeOut
$(window).on("scroll", function() {
  if ($(this).scrollTop() <= 425) {
    // Scrolling down, fade out the image
    $(".logo-img").stop().fadeIn();
  } else {
    // Scrolling up, fade in the image
    $(".logo-img").stop().fadeOut();
  }
});
