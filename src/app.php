<?php
$xml = $_GET['xml'];
$stream = $_GET['stream'];
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="css/style.css" />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://fastcast4u.com/css/font-icons.css?cache=none"
      type="text/css"
    />
    <meta name="author" content="AWydra" />

    <title>Android App</title>
  </head>

  <body>
    <section class="notificationbar">
      <article class="notificationbar__item">
        <i class="icon-wifi-full"></i>
        <i class="icon-soundcloud"></i>
        <i class="icon-line2-envelope"></i>
      </article>
      <article class="notificationbar__item">
        <i class="icon-line2-bubbles"></i>
        <i class="icon-line2-energy"></i>
        <span>13:37</span>
      </article>
    </section>
    <header class="navbar">
      <button class="navbar__hamburger" id="otter-btn">
        <span class="navbar__hamburger-inner"></span>
        <span class="navbar__hamburger-inner"></span>
        <span class="navbar__hamburger-inner"></span>
      </button>
      <h1 class="navbar__title">FastCast4u Demo App</h1>
    </header>
    <aside class="navigation" id="otter-nav">
      <div class="navigation__img">
        <img src="https://fastcast4u.com/images/logo.png" alt="" />
      </div>
      <nav class="navigation__menu">
        <section class="navigation__category">
          <hr />
          <h2>Home</h2>
          <ul>
            <li>
              <a href="#radio" class="navigation__item tabs is-active">
                <img src="img/signal.png" alt="" class="navigation__icon" />
                <h3>FastCast4u Radio</h3>
              </a>
            </li>
            <li style="display: none;">
              <button class="navigation__item">
                <img src="img/microphone.png" alt="" class="navigation__icon" />
                <h3>Podcasts</h3>
              </button>
            </li>
            <li>
              <a href="#tv" class="navigation__item tabs">
                <img src="img/tv.png" alt="" class="navigation__icon" />
                <h3>Live TV</h3>
              </a>
            </li>
          </ul>
        </section>

        <section class="navigation__category">
          <hr />
          <h2>Social Media</h2>
          <ul>
            <li>
              <a href="#fb" class="navigation__item tabs">
                <img src="img/fb.png" alt="" class="navigation__icon" />
                <h3>Facebook</h3>
              </a>
            </li>
            <li>
              <a href="#twitter" class="navigation__item tabs">
                <img src="img/twitter.png" alt="" class="navigation__icon" />
                <h3>Twitter</h3>
              </a>
            </li>
            <li>
              <a href="#instagram" class="navigation__item tabs">
                <img src="img/instagram.png" alt="" class="navigation__icon" />
                <h3>Instagram</h3>
              </a>
            </li>
          </ul>
        </section>

        <section class="navigation__category">
          <hr />
          <h2>Content</h2>
          <ul>
            <li>
              <a href="#web" class="navigation__item tabs">
                <img src="img/web.png" alt="" class="navigation__icon" />
                <h3>Your website</h3>
              </a>
            </li>
            <li>
              <a href="#customweb" class="navigation__item tabs">
                <img src="img/web.png" alt="" class="navigation__icon" />
                <h3>Added website</h3>
              </a>
            </li>
            <li>
              <a href="#wordpress" class="navigation__item tabs">
                <img src="img/wordpress.png" alt="" class="navigation__icon" />
                <h3>Your wordpress blog</h3>
              </a>
            </li>
          </ul>
        </section>

        <section class="navigation__category">
          <hr />
          <h2>Misc</h2>
          <ul>
            <li>
              <a href="#settings" class="navigation__item tabs">
                <img src="img/settings.png" alt="" class="navigation__icon" />
                <h3>Settings</h3>
              </a>
            </li>
          </ul>
        </section>
      </nav>
    </aside>
    <div class="main-overlay hidden"></div>
    <main class="content">
      <section class="radio tab-content" id="radio">
        <div class="radio__artist animated fadeOutDown hidden">
          <h2>Now playing</h2>
          <h3>
            <span id="artist">Artist</span> - <span id="title">Title</span>
          </h3>
        </div>
        <div class="radio__buttons centered">
          <button class="radio__buttons-play player-button p-0">
            <i class="icon-play"></i>
          </button>
          <button class="radio__buttons-pause player-button p-0 hidden">
            <i class="icon-pause"></i>
          </button>
          <img
            src="https://fastcast4u.com/radio-directory/images/rolling.png"
            alt="Loading status bar"
            class="rolling hidden"
            id="loading-spinner"
          />
        </div>
      </section>

      <section class="tv tab-content" id="tv" style="display:none;">
        <video
          class="tv__video"
          src="//eu10.fastcast4u.com/mp4s/fastcast4u.mp4"
        ></video>
        <div class="tv__btns-container">
          <i class="tv__play icon-play"></i>
          <i class="tv__pause icon-pause hidden"></i>
          <button class="tv__fullscreen">Toggle Fullscreen</button>
        </div>
      </section>

      <section class="web tab-content" id="web" style="display:none;">
        <h2 class="web__heading">
          Your Content will be displayed here in the App
        </h2>
        <p class="web__content">Preview is unavailable in App Creator</p>
      </section>

      <section class="settings tab-content" id="settings" style="display:none;">
        <article class="settings__article">
          <h3 class="settings__heading">General</h3>
          <ul class="settings__list">
            <li class="settings__item">
              <h4 class="settings__title">Show side menu on start</h4>
              <p class="settings__description">Yes/No</p>
              <label class="settings__checkbox">
                <input type="checkbox" />
                <span></span>
              </label>
            </li>
            <li class="settings__item">
              <h4 class="settings__title">Text size</h4>
              <p class="settings__description">
                Preferred text size for articles and posts
              </p>
            </li>
          </ul>
        </article>

        <article class="settings__article">
          <h3 class="settings__heading">Other</h3>
          <ul class="settings__list">
            <li class="settings__item">
              <h4 class="settings__title">About</h4>
              <p class="settings__description">
                Information about our application
              </p>
            </li>
            <li class="settings__item">
              <h4 class="settings__title">Open-source licenses</h4>
              <p class="settings__description">
                Licence details for open-source software
              </p>
            </li>
            <li class="settings__item">
              <h4 class="settings__title">Rate this app</h4>
              <p class="settings__description">
                Help other users enjoy this application
              </p>
            </li>
          </ul>
        </article>
      </section>
    </main>
    <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="js/main.js"></script>
    <script>
      otterPlayer("<?=$stream?>", "<?=$xml?>");
    </script>
  </body>
</html>
