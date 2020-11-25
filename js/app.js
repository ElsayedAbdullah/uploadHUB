$(document).ready(function () {
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
