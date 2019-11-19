

 $(function(){

   $('.slider-list').slick({
      slidesToShow: 1,
      fade: true,
      arrow:true,
      asNavFor: '.slider-nav'
    });
   
   
    $('.slider-nav').slick({
      slidesToShow: 6,
      asNavFor: '.slider-list',
      dots: false,
      focusOnSelect: true,
      variableWidth: true,
    });
 });