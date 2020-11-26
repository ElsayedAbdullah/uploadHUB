$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 33) {
      $("header .navbar").addClass("nav-fixed");
    } else {
      $("header .navbar").removeClass("nav-fixed");
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

  // $(".faq .dropdown-menu li").on("click", function () {
  //   $(this).addClass("active").siblings().removeClass("active");
  //   $(".tab-content > div").hide();
  //   $(".faq .dropdown .btn").text($(this).text());
  //   $($(this).data("content")).fadeIn();
  // });

  initFileUploader("#zdrop");

  function initFileUploader(target) {
    var previewNode = document.querySelector("#zdrop-template");
    previewNode.id = "";
    var previewTemplate = previewNode.parentNode.innerHTML;
    previewNode.parentNode.removeChild(previewNode);

    var zdrop = new Dropzone(target, {
      url: "upload.php",
      // maxFiles: 5,
      // maxFilesize: 30,
      previewTemplate: previewTemplate,
      previewsContainer: "#previews",
      clickable: "#browse, #add-more-btn"
    });

    zdrop.on("addedfile", function (file) {
      $(".preview-container").show();
      $(".fileuploader").hide();
      $("#add-more").show();
    });
    zdrop.on("removedfile", function (file) {
      if ($("#previews").children().length == 0) {
        $(".fileuploader").show();
        $("#add-more").hide();
      }
    });

    zdrop.on("dragenter", function () {
      $(".fileuploader").addClass("active");
    });

    zdrop.on("dragleave", function () {
      $(".fileuploader").removeClass("active");
    });

    zdrop.on("drop", function () {
      $(".fileuploader").removeClass("active");
      $(".fileuploader").hide();
    });
  }

  $(".select-folder").select2({
    placeholder: "Select Folder",
    allowClear: false
  });
});
