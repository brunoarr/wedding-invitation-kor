// function addanimation() {
//   var element = document.getElementById("swipe");
//   element.classList.add("animated");
// }

$(window).scroll(function() {
  var hT = $("#swipe").offset().top,
    hH = $("#swipe").outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
  if (wS > hT + hH - wH) {
    const element = document.querySelector("#swipe");
    element.classList.add("animated", "slideOutLeft");
    element.addEventListener("animationend", function() {
      element.classList.remove("slideOutLeft");
    });
  }
});
