let iframe;
let iframeWindow;

const init = () => {
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
  $("#checkbox1").change(() => {
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
    .on("change", () => {
      navOtter();
    });
  appName();
  zIndex();
  logoInput();
  coverInput();
  appInput();
  launchScreenLogo();
  document.querySelector(".section-add").addEventListener("click", addSection);
  document.querySelectorAll(".remove").forEach(el => {
    el.addEventListener("click", removeSection);
  });

  document.querySelectorAll(".item-add").forEach(el => {
    el.addEventListener("click", addItem);
  });

  const formSubmit = document.querySelector("#form-submit");
  formSubmit.addEventListener("click", otterSend);

  document
    .querySelectorAll(
      'input:not([type="file"]):not(.file-caption-name):not(.icons-search-input)'
    )
    .forEach(el => el.addEventListener("input", validationListeners));
};
const zIndex = () => {
  const select = document.querySelectorAll(".icons-selector");
  for (let i = 0; i < select.length; i++) {
    select[i].style.zIndex = select.length - i;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const clientForm = document.querySelector("#client-btn");
  //const demoForm = document.querySelector("#demo-btn");

  clientForm.addEventListener("click", ev => {
    const select = document.querySelector("#client-server").value;
    const json = JSON.parse(select);

    ev.preventDefault();

    const arq = $.ajax({
      url: "getStreamAndXML.php",
      method: "GET",
      dataType: "json",
      data: {
        username: json.username,
        server: json.host
      },
      beforeSend: () => {
        $(".loading-spinner").css("display", "flex");
      },
      complete: () => {
        $(".loading-spinner").hide();
      }
    });

    arq.done(msg => {
      $("main").load("appform.html", () => {
        $("#phone-iframe").attr(
          "src",
          `app.php?xml=${msg.xmlLink}&stream=${msg.streamLink}`
        );

        const appFrame = document.querySelector("#phone-iframe");
        appFrame.onload = () => {
          iframe = appFrame.contentDocument;
          iframeWindow = appFrame.contentWindow;
          navOtter();
          iframeWindow.appInit();
          iframeWindow.tabs();
          liveTV();
        };

        //Data for inputs
        document.querySelector("#customerName").value = msg.username;
        document.querySelector("#customerEmail").value = msg.email;
        document.querySelector("#forUsername").value = msg.givenUsername;
        document.querySelector("#forHost").value = msg.givenServer;

        //Remove bug with clicking enter and deleting section
        document
          .querySelector(".otter-sort-container")
          .addEventListener("keydown", ev => {
            if (ev.keyCode == 13) {
              ev.preventDefault();
            }
          });

        init();
      });
    });

    arq.fail(jqXHR => {
      const response = jqXHR.responseText;

      if (response === "WrongData") {
        Swal.fire({
          type: "error",
          title: "Stream cannot be found",
          text: "Please enter a valid username"
        });
      } else if (response === "WrongUser") {
        Swal.fire({
          type: "error",
          title: "Invalid username",
          text: "Please check your Centova username and try again"
        });
      } else {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "Something went wrong! We will fix it asap."
        });
      }
    });

    // $("main").load("appform.html");

    return false;
  });

  // demoForm.addEventListener("click", ev => {
  //   ev.preventDefault();

  //   const arq = $.ajax({
  //     url: "getStreamAndXML.php",
  //     method: "GET",
  //     dataType: "json",
  //     data: { username: "wydra", server: "eu6.fastcast4u.com" },
  //     beforeSend: () => {
  //       $(".loading-spinner").css("display", "flex");
  //     },
  //     complete: () => {
  //       $(".loading-spinner").hide();
  //     }
  //   });

  //   arq.done(msg => {
  //     $("main").load("appform.html", () => {
  //       $("#phone-iframe").attr(
  //         "src",
  //         `app.php?xml=${msg.xmlLink}&stream=${msg.streamLink}`
  //       );

  //       const appFrame = document.querySelector("#phone-iframe");
  //       appFrame.onload = () => {
  //         iframe = appFrame.contentDocument;
  //         iframeWindow = appFrame.contentWindow;
  //         navOtter();
  //         iframeWindow.appInit();
  //         iframeWindow.tabs();
  //         liveTV();
  //       };

  //       init();

  //       document.querySelector("#form-submit").remove();
  //       document.querySelector("form").removeAttribute("action");
  //     });
  //   });
  // });
});
