let iframe;
let iframeWindow;

const init = () => {
  const appFrame = document.querySelector("#phone-iframe");
  appFrame.addEventListener("load", () => {
    iframe = appFrame.contentDocument;
    iframeWindow = appFrame.contentWindow;
    navOtter();
    iframeWindow.appInit();
    iframeWindow.tabs();
  });
};
const zIndex = () => {
  const select = document.querySelectorAll(".icons-selector");
  for (let i = 0; i < select.length; i++) {
    select[i].style.zIndex = select.length - i;
  }
};

document.addEventListener("DOMContentLoaded", function() {
  const clientForm = document.querySelector("#client-btn");

  clientForm.addEventListener("click", ev => {
    const server = document.querySelector("#client-server").value;
    const username = document.querySelector("#client-username").value;

    ev.preventDefault();

    const arq = $.ajax({
      url: "getStreamAndXML.php",
      method: "GET",
      dataType: "json",
      data: { username: username, server: server },
      beforeSend: function() {
        $(".loading-spinner").css("display", "flex");
      },
      complete: function() {
        $(".loading-spinner").hide();
      }
    });

    arq.done(function(msg) {
      console.log(msg.xmlLink);
      console.log(msg.streamLink);
      $("main").load("appform.html", function() {
        $("#phone-iframe").attr(
          "src",
          `app.php?xml=${msg.xmlLink}&stream=${msg.streamLink}`
        );

        // Color picker
        jsc.init();

        // File input
        $(".image-input").fileinput({
          allowedFileTypes: ["image"],
          mainClass: "input-group-md",
          showUpload: false,
          previewFileType: "image",
          browseClass: "btn bgcolor whiteotter m-0",
          browseLabel: "Pick Image",
          browseIcon: '<i class="icon-picture"></i> ',
          removeClass: "btn btn-danger",
          removeLabel: "Delete",
          removeIcon: '<i class="icon-trash"></i> ',
          uploadIcon: '<i class="icon-upload"></i> '
        });

        // Sortable nav
        sortable(".otter-sort-container", {
          forcePlaceholderSize: true,
          placeholderClass: "ph-class",
          hoverClass: "bg-maroon yellow"
        });

        sortable(".otter-sort-item", {
          forcePlaceholderSize: true,
          placeholderClass: "ph-class",
          hoverClass: "bg-maroon yellow",
          acceptFrom: ".otter-sort-item"
        });

        // Show/hide upload
        $("#checkbox1").change(function() {
          if (this.checked) {
            $("#autoUpdate").fadeIn("slow");
          } else {
            $("#autoUpdate").fadeOut("slow");
          }
        });

        $(".iconpicker-select")
          .fontIconPicker({
            emptyIcon: false
          })
          .on("change", function() {
            navOtter();
          });
        zIndex();
        logoInput();
        coverInput();
      });
    });

    arq.fail(function(jqXHR, msg) {
      console.log(jqXHR, msg);
    });

    // $("main").load("appform.html");

    return false;
  });
});
