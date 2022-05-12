$(function(){

  $('.header-bottom__catalog-btn').on('click', function(){
    $('.header-bottom__catalog-list').toggleClass('header-bottom__catalog-list--active');
    $('.header-bottom__catalog-btn').toggleClass('header-bottom__catalog-btn--active');
  });

  $('.hero__slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});

});