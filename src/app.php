<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://fastcast4u.com/css/font-icons.css?cache=none" type="text/css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet">

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
    
    <main class="content">
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

    </main>
    <script src="//code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src="js/otterPlayer.js"></script>
</body>

</html> 