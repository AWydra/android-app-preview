<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">
    <link rel="stylesheet" href="https://fastcast4u.com/css/font-icons.css?cache=none" type="text/css">
    <meta name="author" content="AWydra">

    <title>Android App</title>
</head>

<body>
    <header class="navbar">
        <button class="navbar__hamburger">
            <span class="navbar__hamburger-inner"></span>
            <span class="navbar__hamburger-inner"></span>
            <span class="navbar__hamburger-inner"></span>
        </button>
        <h1>FastCast4u Demo App</h1>
    </header>
    <aside class="navigation">
        <div class="navigation__img">
            <img src="https://fastcast4u.com/images/logo_fb.png" alt="">
        </div>
        <nav class="navigation__menu">
            <section class="navigation__category">
                <hr>
                <h2>Home</h2>
                <ul>
                    <li>
                        <button class="navigation__item">
                            <img src="img/signal.png" alt="" class="navigation__icon">
                            <h3>FastCast4u Radio</h3>
                        </button>
                    </li>
                    <li style="display: none;">
                        <button class="navigation__item">
                            <img src="img/microphone.png" alt="" class="navigation__icon">
                            <h3>Podcasts</h3>
                        </button>
                    </li>
                    <li>
                        <button class="navigation__item">
                            <img src="img/tv.png" alt="" class="navigation__icon">
                            <h3>Live TV</h3>
                        </button>
                    </li>
                </ul>
            </section>

            <section class="navigation__category">
                <hr>
                <h2>Social Media</h2>
                <ul>
                    <li>
                        <button class="navigation__item">
                            <img src="img/fb.png" alt="" class="navigation__icon">
                            <h3>Facebook</h3>
                        </button>
                    </li>
                    <li>
                        <button class="navigation__item">
                            <img src="img/twitter.png" alt="" class="navigation__icon">
                            <h3>Twitter</h3>
                        </button>
                    </li>
                    <li>
                        <button class="navigation__item">
                            <img src="img/instagram.png" alt="" class="navigation__icon">
                            <h3>Instagram</h3>
                        </button>
                    </li>
                </ul>
            </section>

            <section class="navigation__category">
                <hr>
                <h2>Content</h2>
                <ul>
                    <li>
                        <button class="navigation__item">
                            <img src="img/web.png" alt="" class="navigation__icon">
                            <h3>Your website</h3>
                        </button>
                    </li>
                    <li>
                        <button class="navigation__item">
                            <img src="img/web.png" alt="" class="navigation__icon">
                            <h3>Added website</h3>
                        </button>
                    </li>
                    <li>
                        <button class="navigation__item">
                            <img src="img/wordpress.png" alt="" class="navigation__icon">
                            <h3>Your wordpress blog</h3>
                        </button>
                    </li>
                </ul>
            </section>

            <section class="navigation__category">
                <hr>
                <h2>Misc</h2>
                <ul>
                    <li>
                        <button class="navigation__item">
                            <img src="img/settings.png" alt="" class="navigation__icon">
                            <h3>Settings</h3>
                        </button>
                    </li>
                </ul>
            </section>
        </nav>
    </aside>
    <main class="content">
        <section class="radio">
            <div class="content__artist">
                <h2>Now playing</h2>
                <h3><span id="artist">Artist</span> - <span id="title">Title</span></h3>
            </div>
            <div class="content__buttons centered">
                <button class="content__buttons-play player-button p-0">
                    <i class="icon-play"></i>
                </button>
                <button class="content__buttons-pause player-button p-0 hidden">
                    <i class="icon-pause"></i>
                </button>
                <img src="https://fastcast4u.com/radio-directory/images/rolling.png" alt="Loading status bar" class="rolling hidden" id="loading-spinner">
            </div>
        </section>

    </main>
    <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>