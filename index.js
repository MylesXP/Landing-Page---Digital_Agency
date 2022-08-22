//Navbar hamburger collapses when selecting or clicking on anything outside of it
$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
      $navbar.collapse("hide");
    }
  });
  
  //Navbar hamburger collapses when choice is selected
  $(".navbar-nav li a:not('.dropdown-toggle')").on("click", function () {
    $(".navbar-collapse").collapse("hide");
  });