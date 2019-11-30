

$(function () {

   $('.slider-list').slick({
      slidesToShow: 1,
      fade: true,
      arrows: true,
      asNavFor: '.slider-nav'
   });


   $('.slider-nav').slick({
      slidesToShow: 6,
      asNavFor: '.slider-list',
      dots: false,
      focusOnSelect: true,
      // arrows: false,
      // variableWidth: true,
      responsive: [
         {
            breakpoint: 961,
            settings: {
               slidesToShow: 5,
            }
         },
         {
            breakpoint: 740,
            settings: {
               slidesToShow: 4,
            }
         },
         {
            breakpoint: 601,
            settings: {
               slidesToShow: 3,
            }
         },
         {
            breakpoint: 441,
            settings: {
               slidesToShow: 2,
            }
         },
      ]
   });


   $('.burger-menu').on('click', function () {
      $('.header__menu > ul').slideToggle();
      $(this).toggleClass('header__menu-active');
   });
});