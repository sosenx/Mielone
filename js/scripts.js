/*
 ** FancyBox
 */
jQuery(document).ready(function ($) {
  //  $(".fancybox").fancybox();
});

/*
 ** Masonry
 
jQuery(document).ready(function ($) {

    var $container = $('.gallery');

    $container.imagesLoaded(function () {
        $container.masonry({
            itemSelector: 'dl.gallery-item'
        });
    });

});
*/
/*
 ** Responsive Menu
 */
jQuery(document).ready(function ($) {
    $('.openresponsivemenu').click(function () {
        $('.container-menu').toggleClass("responsivemenu");
    });
});
//przyciski
jQuery("#bt_kontakt").click(function () {
    jQuery('html,body').animate({
            scrollTop: jQuery("footer").offset().top
        },
        'slow');
});


$(document).ready(function () {
    $('#logos-car').slick({
        /*autoplay: true,
        adaptiveHeight: true,
        accessibility: false,
*/
    });
});
