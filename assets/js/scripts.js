$(document).ready(() => {
  $(".icon-description").hide();
  $(".portfolio-text").hide();
  $("#success-alert").hide();

  toggleVisibility();
  toggleTextOnHover();
  $("form").submit(event => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    const isValid = form.checkValidity();
    form.classList.add('was-validated');
    if (isValid) {
      const formData = new FormData(form);
      $("#success-alert").html(`Hello ${formData.get("name")}, we have successfully received your message. We'll get in touch shortly.`)
      $("#success-alert").show();
      form.reset();
      form.classList.remove('was-validated');
    } else {
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

const toggleTextOnHover = () => {
  $("#work4").hover(() => $("#work4 .portfolio-text").show(), () => $("#work4 .portfolio-text").hide());
  $("#work3").hover(() => $("#work3 .portfolio-text").show(), () => $("#work3 .portfolio-text").hide());
  $("#work2").hover(() => $("#work2 .portfolio-text").show(), () => $("#work2 .portfolio-text").hide());
  $("#work1").hover(() => $("#work1 .portfolio-text").show(), () => $("#work1 .portfolio-text").hide());
  $("#work5").hover(() => $("#work5 .portfolio-text").show(), () => $("#work5 .portfolio-text").hide());
  $("#work6").hover(() => $("#work6 .portfolio-text").show(), () => $("#work6 .portfolio-text").hide());
  $("#work7").hover(() => $("#work7 .portfolio-text").show(), () => $("#work7 .portfolio-text").hide());
  $("#work8").hover(() => $("#work8 .portfolio-text").show(), () => $("#work8 .portfolio-text").hide());
}