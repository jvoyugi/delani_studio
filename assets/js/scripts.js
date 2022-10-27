$(document).ready(() => {

  $(".icon-description").hide();

  $("#design-icon").click(event => {
    $(event.currentTarget).toggle();
    $("#design-description").toggle();
  });
  $("#dev-icon").click(event => {
    $(event.currentTarget).toggle();
    $("#dev-description").toggle();
  });
  $("#product-icon").click(event => {
    $(event.currentTarget).toggle();
    $("#product-description").toggle();
  });

  $("#design-description").click(event => {
    $(event.currentTarget).toggle();
    $("#design-icon").toggle();
  });
  $("#dev-description").click(event => {
    $(event.currentTarget).toggle();
    $("#dev-icon").toggle();
  });
  $("#product-description").click(event => {
    $(event.currentTarget).toggle();
    $("#product-icon").toggle();
  });
})
