// Responsive nav
$(document).ready(function() {
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

// Smooth Scrolling
$(".cf a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});
