$(document).ready(() => {
  $(".icon-description").hide();
  $("#success-alert").hide();

  toggleVisibility();
  $("form").submit(event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    if (isValid) {
      $("#success-alert").show();
      form.reset();
    } else {
      form.classList.add('was-validated');
      $("#success-alert").hide();
    }
  })
})
const toggleVisibility = () => {
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
};