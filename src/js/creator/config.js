const sendConfig = () => {
  const form = document.querySelector("#preview-form");
  const data = new FormData(form);
  data.append("saveOnly", "true");

  jQuery.ajax({
    url: "server.php",
    type: "POST",
    data: data,
    processData: false,
    contentType: false,
    success: function() {
      console.log("Send");
    }
  });
};
