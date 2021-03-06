const otter = new Audio();
let connectInterval;

/* Functions */
function otterPlayer(stream, xml) {
  if (connectInterval) {
    clearInterval(connectInterval);
  }
  connect(xml);
  connectInterval = setInterval(function () {
    connect(xml);
  }, 10000);

  otter.src = stream;
  otter.volume = 0.5;

  $("#radio-station-name").text(title);

  $(".player-button").click(function () {
    $(".radio__buttons-play").toggleClass("hidden");
    $(".radio__buttons-pause").toggleClass("hidden");
  });

  $(".radio__buttons-play").click(function () {
    otter.load();
    otter.play();
  });

  $(".radio__buttons-pause").click(function () {
    otter.pause();
  });

  $(otter).on("waiting", function () {});

  $(otter).on("playing", function () {});
}

const connect = link => {
  let artist;
  let title;

  $.ajax({
    type: "GET",
    url: link,
    cache: false,
    dataType: "xml",
    success: function (xml) {
      $(xml)
        .find("response")
        .each(function () {
          $(this)
            .find("data")
            .each(function () {
              $(this)
                .find("item")
                .each(function () {
                  let listeners = $(this)
                    .find("listeners")
                    .text();
                  $("#listeners-count").text(`Listeners: ${listeners}`);
                  $(this)
                    .find("track")
                    .each(function () {
                      artist = $(this)
                        .find("artist")
                        .text();
                      title = $(this)
                        .find("title")
                        .first()
                        .text();
                      $("#artist").text(artist);
                      $("#artist").attr("title", artist);
                      $("#title").text(title);
                      $("#title").attr("title", title);
                    });
                });
            });
        });
    }
  }).done(function () {
    const data = encodeURIComponent(`${artist} ${title}`);
    $.ajax({
      url: `https://itunes.apple.com/search?term=${data}&media=music&limit=1`,
      dataType: "json"
    }).done(function (json) {
      if (json.resultCount > 0 && !$("#radio").hasClass("fixed-bg")) {
        const avatar = json.results[0].artworkUrl30.replace("30x30", "610x610");
        $(".radio").css("background-image", `url(\"${avatar}\")`);
      } else if ($("#radio").hasClass("custom-bg")) {
        //do nothing
      } else {
        $(".radio").css("background-image", `url("img/bg.png")`);
      }
    });
  });
};

function otterPlayerCustom(stream) {
  if (connectInterval) {
    clearInterval(connectInterval);
  }

  $.ajax({
    url: "api/artistAndTitleByStreamlink.php",
    method: "GET",
    dataType: "json",
    data: {
      streamlink: stream
    }
  }).done(function (stream) {
    customConnect(stream[0]);
    connectInterval = setInterval(function () {
      customConnect(stream[0]);
    }, 10000);

    otter.src = stream;
  });
  otter.volume = 0.5;

  $("#radio-station-name").text(title);

  $(".player-button").click(function () {
    $(".radio__buttons-play").toggleClass("hidden");
    $(".radio__buttons-pause").toggleClass("hidden");
  });

  $(".radio__buttons-play").click(function () {
    otter.load();
    otter.play();
  });

  $(".radio__buttons-pause").click(function () {
    otter.pause();
  });

  $(otter).on("waiting", function () {});

  $(otter).on("playing", function () {});
}

const customConnect = link => {
  $.ajax({
    url: "api/artistAndTitleByStreamlink.php",
    method: "GET",
    dataType: "json",
    data: {
      streamlink: link
    }
  }).done(function (track) {
    const title = track[1] ? track[1] : "Artist - Title";
    $("#track-container").text(title);
    const data = encodeURIComponent(title);

    if (track[1]) {
      $.ajax({
        url: `https://itunes.apple.com/search?term=${data}&media=music&limit=1`,
        dataType: "json"
      }).done(function (json) {
        if (json.resultCount > 0 && !$("#radio").hasClass("fixed-bg")) {
          const avatar = json.results[0].artworkUrl30.replace(
            "30x30",
            "610x610"
          );
          $(".radio").css("background-image", `url(\"${avatar}\")`);
        } else if ($("#radio").hasClass("custom-bg")) {
          //do nothing
        } else {
          $(".radio").css("background-image", `url("img/bg.png")`);
        }
      });
    }
  });
};