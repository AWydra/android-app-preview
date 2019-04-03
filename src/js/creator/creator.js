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
        $(".screen iframe").attr(
          "src",
          `app.php?xml=${msg.xmlLink}&stream=${msg.streamLink}`
        );
      });
    });

    arq.fail(function(jqXHR, msg) {
      alert(`Enter valid data
Request failed: ${msg}`);
    });

    // $("main").load("appform.html");

    return false;
  });
});
