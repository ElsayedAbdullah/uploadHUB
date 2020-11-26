$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 33) {
      $("header .navbar").addClass("nav-fixed");
    } else {
      $("header .navbar").removeClass("nav-fixed");
    }
    if ($(this).scrollTop() >= 33 && $(this).width() > 992) {
      $("body").css("padding-top", "108px");
    } else {
      $("body").css("padding-top", "0");
    }
  });

  $(".navbar .toggler").click(function (event) {
    if (!event.detail || event.detail == 1) {
      //activate on first click only to avoid hiding again on double clicks
      $(".navbar").toggleClass("navbar-show-mobile");
      $(this).toggleClass("change");
      $("body, html").toggleClass("overlay");
      $(".navbar-collapse").toggleClass("show");
    }
    return false;
  });

  // when click in anywhere in document close the navbar menu and clear the overlay from the body
  $("body").on("click", function (e) {
    var $currEl = $(e.currentTarget);
    if (!$currEl.is(".navbar") && !$currEl.closest(".navbar").length) {
      $(".navbar .toggler").removeClass("change");
      $("html,body").removeClass("overlay");
      $(".navbar-collapse").removeClass("show");
      $(".navbar").removeClass("navbar-show-mobile");
    }
  });
  // stop propagation (closing navbar when click inside it) when click on navbar when the menu open in mobile screen
  $(".navbar").on("click", function (e) {
    e.stopPropagation();
  });

  // tooltip in credentials in dashboard page
  $(".link button").on("click", function () {
    $(this).prev("input").select();
    document.execCommand("copy");
    if ($(window).width() > 768) {
      $(this).text("Copied!");
    }
  });

  $(".link button").on("mouseleave", function () {
    if ($(window).width() > 767) {
      $(this).text("Copy");
    }
  });

  function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }

  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }

  // $(".faq .dropdown-menu li").on("click", function () {
  //   $(this).addClass("active").siblings().removeClass("active");
  //   $(".tab-content > div").hide();
  //   $(".faq .dropdown .btn").text($(this).text());
  //   $($(this).data("content")).fadeIn();
  // });
});
