var owl = $('.owl-carousel');
owl.owlCarousel({
  items: 1,
  loop: true,
  smartSpeed: 700
});
$('.slider__but-right').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.slider__but-left').click(function() {
    owl.trigger('prev.owl.carousel');
})