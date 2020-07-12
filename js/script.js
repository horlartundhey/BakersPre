window.sr=ScrollReveal();
sr.reveal('.navbar',{
    duration:3000,
    origin:'bottom'
});

sr.reveal('.adjust',{
    duration:3000,
    origin:'left',
    distance:'500px'
});

sr.reveal('.shri',{
    duration:3000,
    origin:'bottom'
});


$(function() {
      // Smooth Scrolling
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });