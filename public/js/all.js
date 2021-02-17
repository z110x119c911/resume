"use strict";

$(document).ready(function () {
  $('#page_top').click(function () {
    $('html,body').animate({
      scrollTop: $('#about').offset().top
    }, 500);
  });
  $('#about_btn').click(function () {
    $('html,body').animate({
      scrollTop: $('#about').offset().top
    }, 500);
  });
  $('#experience_btn').click(function () {
    $('html,body').animate({
      scrollTop: $('#experience').offset().top
    }, 500);
  });
  $('#skills_btn').click(function () {
    $('html,body').animate({
      scrollTop: $('#skills').offset().top
    }, 500);
  });
  $('#interests_btn').click(function () {
    $('html,body').animate({
      scrollTop: $('#interests').offset().top
    }, 500);
  });
  $('#introduction_btn').click(function () {
    $('html,body').animate({
      scrollTop: $('#introduction').offset().top
    }, 500);
  });
});
//# sourceMappingURL=all.js.map
