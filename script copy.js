$(window).scroll(function() {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 150);
});

$(window).scroll(function() {
    $('.nav-link').toggleClass('scroll', $(this).scrollTop() > 150);
});

$(window).scroll(function() {
    $('.navbar-brand').toggleClass('sc', $(this).scrollTop() > 150);
});