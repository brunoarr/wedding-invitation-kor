<<<<<<< HEAD
=======
function openEnvelop() {
  $(".envelop-container").css({ opacity: "0" });
  setTimeout(function() {
    $(".envelop-container").css({ display: "none" });
    $(".main-container").css({ display: "block" });
  }, 1000);

}

$(".button2").click(function() {
   openEnvelop();
});
>>>>>>> e07478d81d01e6e5ef78c3419a9b9b58c7f5bb3d
