//parallax efect
//untuk parallax efek yang diabout
$(window).on("load", function () {
  $(".pKiri").addClass("pMuncul");
  $(".pKanan").addClass("pMuncul");
});
//akhir efek yang di about

$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  //kecapatan yang berbeda pada jumbotron(efek parallax yang kedua)
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 2 + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 1.2 + "%)",
  });
  //akhir efek yang jumbotron

  //landing page atau elemen pada portofolio
  if (wScroll > $(".portofolio").offset().top - 250) {
    $(".portofolio .thumbnail").each(function (i) {
      setTimeout(function () {
        $(".portofolio .thumbnail").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
  //akhir efek yang portofolio
});
