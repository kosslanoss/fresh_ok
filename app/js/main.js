$(function(){

  $('.header-bottom__catalog-btn').on('click', function(){
    $('.header-bottom__catalog-list').toggleClass('header-bottom__catalog-list--active');
    $('.header-bottom__catalog-btn').toggleClass('header-bottom__catalog-btn--active');
  });

});