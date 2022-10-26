$(document).ready(function () {
  $("#design-description").hide();
  $("#dev-description").hide();
  $("#product-description").hide();
  
  $("#design-icon").click(function () {
    $(this).toggle();
    $("#design-description").toggle();
  });
  $("#dev-icon").click(function () {
    $(this).toggle();
    $("#dev-description").toggle();
  });
  $("#product-icon").click(function () {
    $(this).toggle();
    $("#product-description").toggle();
  });

  $("#design-description").click(function () {
    $(this).toggle();
    $("#design-icon").toggle();
  });
  $("#dev-description").click(function () {
    $(this).toggle();
    $("#dev-icon").toggle();
  });
  $("#product-description").click(function () {
    $(this).toggle();
    $("#product-icon").toggle();
  });
})
