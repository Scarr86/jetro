

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
      $('.header__menu > ul').slideToggle('', function () {
         $('.burger-menu').toggleClass('header__menu-active');
      });
   });

   $(document).click(function (ev) {
      if (!$('.burger-menu').get(0).contains(ev.target)) {
         if ($('.burger-menu').hasClass('header__menu-active')){
            $('.burger-menu').removeClass('header__menu-active');
            $('.header__menu > ul').slideUp();
         }
      }
   })

});