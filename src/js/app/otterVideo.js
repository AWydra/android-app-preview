document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".tv__video");
  const play = document.querySelector(".tv__play");
  const pause = document.querySelector(".tv__pause");

  play.addEventListener("click", () => {
    video.play();
    play.classList.toggle("hidden");
    pause.classList.toggle("hidden");
  });

  pause.addEventListener("click", () => {
    video.pause();
    play.classList.toggle("hidden");
    pause.classList.toggle("hidden");
  });
});
