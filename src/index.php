<?php
session_start();
require_once 'functions/isUnauthorized.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php
    include('../head.php');
    ?>
	<title>FastCast4u | MOBILE APP CREATOR</title>
	<link rel="stylesheet" href="//marvelapp.github.io/devices.css/assets/devices.min.css"/>
	<link rel="stylesheet" href="//fastcast4u.com/css/otterIcons.css"/>
	<link rel="stylesheet" href="//fastcast4u.com/css/components/bs-filestyle.css"/>
	<link rel="stylesheet" href="//fastcast4u.com/css/fontpicker.css"/>
	<link rel="stylesheet"
		  href="//codeb.it/fonticonpicker/themes/grey-theme/jquery.fonticonpicker.grey.min.css?v=2.0.0"/>

	<style>
		.acctitle {
			font-size: 2rem;
			line-height: 1;
		}

		.marvel-device.note8 {
			min-width: 340px;
			width: 340px;
			height: 669px;
			top: 100px;
		}

		.marvel-device.note8 .camera {
			left: 45px;
		}

		.marvel-device.note8 .sensors {
			left: 90px;
		}

		.marvel-device.note8 .more-sensors {
			left: 245px;
		}

		.screen iframe {
			width: 100%;
			height: 100%;
		}

		.loading-spinner {
			top: 0;
			left: 0;
			background-color: rgba(0, 0, 0, 0.1);
		}

		.loading-spinner img {
			animation: rolling 1s linear infinite;
		}

		@keyframes rolling {
			0% {
				-webkit-transform: rotate(0deg);
				transform: rotate(0deg);
			}

			100% {
				-webkit-transform: rotate(360deg);
				transform: rotate(360deg);
			}
		}

		.file-footer-buttons {
			display: none;
		}

		.text-muted{
			font-size: .95rem;
		}

		.otter-sort-container,
		.otter-sort-item {
			list-style: none;
			width: 100%;
		}

		.otter-sort-container {
			padding: 30px 0;
		}

		.otter-sort-container > .navy {
			margin: 0 0 20px;
			padding: 20px;
			border: solid #777 2px;
			border-radius: 10px;
		}

		.otter-sort-item {
			min-height: 50px;
		}

		.otter-sort-item > .navy {
			margin: 0 0 20px;
			padding: 5px 10px;
			background-color: #2e8ece;
			color: white;
		}

		.otter-sort-item > .navy input {
			padding: 3px;
			background-color: transparent;
			color: white;
			border: none;
			border-bottom: solid white 2px;
		}

		::-webkit-input-placeholder {
			color: white;
		}

		::-moz-placeholder {
			color: white;
		}

		:-ms-input-placeholder {
			color: white;
		}

		.navy h4 {
			margin: 0 0 10px;
		}

		.navy h4 input {
			padding: 3px;
			border: none;
			border-bottom: solid #ddd 2px;
		}

		.icons-selector .selector-popup {
			width: 276px;
		}

		.fip-icons-container {
			color: black;
		}

		.icons-selector {
			top: 50%;
			transform: translateY(-50%);
			z-index: 3;
		}

		.icons-selector .selector-button {
			width: 25px;
		}

		.icons-selector .selector {
			width: 66px;
			height: 30px;
		}

		.icons-selector .selected-icon {
			width: 40px;
		}

		.icons-selector .selected-icon i {
			line-height: 30px;
		}

		.icons-selector .selector-button i {
			line-height: 28px;
		}

		::placeholder {
			color: white;
		}

		.remove {
			position: absolute;
			top: 0;
			right: 0;
			background: transparent;
			border: none;
			outline: none;
			color: red;
			font-size: 1.5rem;
			cursor: pointer;
		}

		.remove--item {
			color: white;
			font-size: 1.1rem;
		}
	
    .bad-validation{
      background-color: rgba(255,0,0,.9) !important;
    }

    .bad-validation-img{
      border: solid red 2px;
    }
	</style>
</head>

<body style="overflow-x: hidden;">
<?php
include('../menu.php');

/*<form method="POST" action="functions/logout.php">
      <input type="submit" value="Wyloguj mnie kurdeee!">
  </form>*/

?>

<!-- Document Wrapper
============================================= -->
<div id="wrapper" class="clearfix w-100">
	<header class="heading-block center col-12 pt-5" style="margin: 0 auto;">
		<h1>MOBILE APP CREATOR</h1>
        <span class="divcenter mt-3"
          >Create and Preview your own Mobile App</span
        >
      </header>
	<main class="container">
		<div class="accordion accordion-border position-relative clearfix">
			<div class="acctitle py-4">Select your Radio Server</div>
			<div class="acc_content px-3 clearfix">
				<form action="#" method="get" class="row align-items-start flex-column">
					<div class="form-group col-12 col-md-8">
						<label for="client-server">Account</label>
						<select class="form-control" id="client-server">
                            <?php foreach ($_SESSION['app_creator_radios'] as $radio): ?>
								<option value='{"username":"<?= $radio['username'] ?>","host":"<?= $radio['host'] ?>"}'><?= $radio['username'] ?></option>
                            <?php endforeach; ?>
						</select>
						<small class="form-text text-muted">For a Multi-Stream App select one Server and add next streams in Creator</small>
					</div>
					<!--<div class="form-group col-12 col-sm-9">
                      <label for="client-username">Username</label>
                      <input
                        type="text"
                        class="form-control"
                        id="client-username"
                        placeholder="Enter username"
                      />
                    </div>-->
					<input class="button center button-rounded button-medium ml-3 whiteotter" id="client-btn"
						   type="submit" value="Next"/>
				</form>
			</div>

			<div class="acctitle py-4">Use Stream URL</div>
            <div class="acc_content px-3 clearfix">
              <form action="">
                <div class="form-group col-12 col-md-8">
                  <label for="username-form">Stream link</label>
                  <input
                    type="url"
                    class="form-control"
                    id="username-form"
                    placeholder="Example: https://yourserver.com:port/stream or https://proxy-link"
                  />
                  <small class="form-text text-muted"
                    >For a Multi-Stream App put one URL and add next stream URLs in Creator</small
                  >
                </div>
								<input
									id="customStreamBtn"
                  class="button center button-rounded button-medium ml-3 whiteotter"
                  type="submit"
                  value="Next"
                />
              </form>
            </div>

			<!-- <div class="acctitle py-4">Demo</div>
            <div class="acc_content px-3 clearfix">
              <form action="">
                <div class="form-group col-12 col-sm-8">
                  <input
                    type="hidden"
                    class="form-control"
                    id="username-form"
                    placeholder="Enter username"
                  />
                </div>
                <input
                  id="demo-btn"
                  class="button center button-rounded button-medium ml-3 whiteotter"
                  type="submit"
                  value="Use demo link"
                />
              </form>
            </div> -->
			<div class="loading-spinner position-absolute w-100 h-100 justify-content-center align-items-center"
				 style="display: none;">
				<img src="//fastcast4u.com/radio-directory/images/station-spinner.png" alt=""/>
			</div>
		</div>
		<div class="w-100 d-flex justify-content-end mb-5">
		<a href="functions/logout.php">Log out</a>
	</div>
	</main>

	<!-- Footer
  ============================================= -->
	<footer id="footer" class="dark">
        <?php
        include('../footer.php');
        ?>
	</footer>
	<!-- #footer end -->



	<script src="js/creator.js"></script>
	<script src="//fastcast4u.com/js/jscolor.js"></script>
	<script src="//fastcast4u.com/js/components/bs-filestyle.js"></script>
	<script src="//fastcast4u.com/radio-directory/js/sweetalert2.js"></script>
	<script src="//lukasoppermann.github.io/html5sortable/html5sortable.js"></script>
	<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
</div>
<!-- #wrapper end -->
</body>
</html>
