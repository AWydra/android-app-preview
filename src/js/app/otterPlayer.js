$(document).ready(function() {
  const otter = new Audio();
  let connectInterval;

  /* Functions */
  function otterPlayer(stream, xml) {
    if (connectInterval) {
      clearInterval(connectInterval);
    }
    connect(xml);
    connectInterval = setInterval(function() {
      connect(xml);
    }, 20000);

    otter.src = stream;
    otter.volume = 0.5;

    $("#radio-station-name").text(title);

    $(".player-button").click(function() {
      $(".radio__buttons-play").toggleClass("hidden");
      $(".radio__buttons-pause").toggleClass("hidden");
    });

    $(".radio__buttons-play").click(function() {
      otter.load();
      otter.play();
    });

    $(".radio__buttons-pause").click(function() {
      otter.pause();
    });

    $(otter).on("waiting", function() {});

    $(otter).on("playing", function() {});
  }

  const connect = link => {
    $.ajax({
      type: "GET",
      url: link,
      cache: false,
      dataType: "xml",
      success: function(xml) {
        $(xml)
          .find("response")
          .each(function() {
            $(this)
              .find("data")
              .each(function() {
                $(this)
                  .find("item")
                  .each(function() {
                    let listeners = $(this)
                      .find("listeners")
                      .text();
                    $("#listeners-count").text(`Listeners: ${listeners}`);
                    $(this)
                      .find("track")
                      .each(function() {
                        let artist = $(this)
                          .find("artist")
                          .text();
                        let title = $(this)
                          .find("title")
                          .first()
                          .text();
                        let imageurl =
                          "https://fastcast4u.com/radio-directory/proxy.php?proxy=" +
                          $(this)
                            .find("imageurl")
                            .text();
                        imageurl =
                          imageurl.search("nocover.png") > 0
                            ? "img/bg.png"
                            : imageurl;
                        $(".radio").css(
                          "background-image",
                          "url(" + imageurl + ")"
                        );
                        $("#artist").text(artist);
                        $("#artist").attr("title", artist);
                        $("#title").text(title);
                        $("#title").attr("title", title);
                      });
                  });
              });
          });
      }
    });
  };

  otterPlayer(
    "https://eu6.fastcast4u.com/proxy/wydra?mp=/;",
    "https://eu6.fastcast4u.com:2199/rpc/wydra/streaminfo.get?x=1"
  );
});
