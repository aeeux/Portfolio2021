

tl = new TimelineMax({ paused: true });
    
tl.to(".menu-left", 1, {
  left: 0,
  ease: Expo.easeInOut,
});

tl.to(
  ".menu-right",
  1,
  {
    right: 0,
    ease: Expo.easeInOut,
  },
  "-=1"
);

tl.staggerFrom(
  ".menu-links > div",
  0.8,
  {
    y: 100,
    opacity: 0,
    ease: Expo.easeOut,
  },
  "0.1",
  "-=0.4"
);

tl.staggerFrom(
  ".mail > div, .socials > div",
  0.8,
  {
    y: 100,
    opacity: 0,
    ease: Expo.easeOut,
  },
  "0.1",
  "-=1"
);

tl.from(
  ".menu-close",
  1,
  {
    scale: 0,
    opacity: 1,
    ease: Expo.easeInOut,
  },
  "-=1"
);

tl.to(
  ".hr",
  0.4,
  {
    scaleY: 1,
    transformOrigin: "0% 50%",
    ease: Power2.ease,
  },
  "-=2"
);

// menu

tl.reverse();
$(document).on("click", ".menu-open", function () {
  tl.reversed(!tl.reversed());

  let closed = $('body').css('overflow') === 'hidden';

  if (closed) {

    $('.hero-inner').css('visibility', 'visible');
    $('body').css('overflow', 'scroll') ;

  } 
  
  else {

    $('.hero-inner').css('visibility', 'hidden');
    $('body').css('overflow', 'hidden');

  }

});

$(document).on("click", ".menu-close", function () {
  tl.reversed(!tl.reversed());
  $('body').css('overflow', 'scroll');
});

$(document).on("click", ".menu-link", function () {
  tl.reversed(!tl.reversed());
  setTimeout(function(){  $('.hero-inner, .menu-open, .menu-close').css('visibility', 'visible');  }, 900);
  $('body').css('overflow', 'scroll');
});
