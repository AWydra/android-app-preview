<!DOCTYPE html>
<html lang="en">
  <head>
    <?php
        include('head.php');
    ?>
    <title>FastCast4u | ANDROID APP PREVIEW</title>
    <link
      rel="stylesheet"
      href="//marvelapp.github.io/devices.css/assets/devices.min.css"
    />
    <link
      rel="stylesheet"
      href="//fastcast4u.com/css/components/bs-filestyle.css"
    />

    <style>
      .acctitle {
        font-size: 2rem;
        line-height: 1;
      }

      .marvel-device.note8 {
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

      .otter-sort-container,
      .otter-sort-item {
        list-style: none;
        width: 100%;
      }

      .otter-sort-container {
        padding: 30px 0;
      }

      .otter-sort-container > li {
        margin: 0 0 20px;
        padding: 20px;
        border: solid #777 2px;
        border-radius: 10px;
      }

      .otter-sort-item {
        min-height: 50px;
      }

      .otter-sort-item > li {
        margin: 0 0 20px;
        padding: 5px 10px;
        background-color: #2e8ece;
        color: white;
      }

      .otter-sort-item > li input {
        padding: 3px;
        background-color: transparent;
        color: white;
        border: none;
        border-bottom: solid white 2px;
      }

      .navy h4 {
        margin: 0 0 10px;
      }

      .navy h4 input {
        padding: 3px;
        border: none;
        border-bottom: solid #ddd 2px;
      }
    </style>
  </head>

  <body>
    <?php
        include('menu.php');
    ?>

    <!-- Document Wrapper
============================================= -->
    <div id="wrapper" class="clearfix w-100">
      <header class="heading-block center col-12 pt-5" style="margin: 0 auto;">
        <h1>ANDROID APP PREVIEW</h1>
        <span class="divcenter mt-3"
          >Easily create sub-accounts for individual stations in Centova Cast
          admin panel. You set the limits!</span
        >
      </header>
      <main class="container">
        <div class="accordion accordion-border position-relative clearfix">
          <div class="acctitle py-4">I have radio</div>
          <div class="acc_content px-3 clearfix">
            <form action="#" method="get" class="row">
              <div class="form-group col-12 col-sm-3">
                <label for="client-server">Server</label>
                <select class="form-control" id="client-server">
                  <option disabled>EUROPE</option>
                  <option value="eu1.fastcast4u.com">EU1</option>
                  <option value="eu2.fastcast4u.com">EU2</option>
                  <option value="eu3.fastcast4u.com">EU3</option>
                  <option value="eu4.fastcast4u.com">EU4</option>
                  <option value="eu5.fastcast4u.com">EU5</option>
                  <option value="eu6.fastcast4u.com">EU6</option>
                  <option value="eu7.fastcast4u.com">EU7</option>
                  <option value="eu8.fastcast4u.com">EU8</option>
                  <option value="eu9.fastcast4u.com">EU9</option>
                  <option value="eu11.fastcast4u.com">EU11</option>
                  <option disabled></option>
                  <option disabled>UNITED STATES of AMERICA</option>
                  <option value="usa1.fastcast4u.com">USA1</option>
                  <option value="usa2.fastcast4u.com">USA2</option>
                  <option value="usa3.fastcast4u.com">USA3</option>
                  <option value="usa4.fastcast4u.com">USA4</option>
                  <option value="usa5.fastcast4u.com">USA5</option>
                  <option value="usa6.fastcast4u.com">USA6</option>
                  <option value="usa7.fastcast4u.com">USA7</option>
                  <option value="usa8.fastcast4u.com">USA8</option>
                  <option value="usa9.fastcast4u.com">USA9</option>
                  <option value="usa11.fastcast4u.com">USA11</option>
                  <option value="usa12.fastcast4u.com">USA12</option>
                  <option value="usa13.fastcast4u.com">USA13</option>
                  <option value="usa14.fastcast4u.com">USA14</option>
                  <option value="usa15.fastcast4u.com">USA15</option>
                  <option value="usa16.fastcast4u.com">USA16</option>
                  <option value="usa17.fastcast4u.com">USA17</option>
                  <option value="usa18.fastcast4u.com">USA18</option>
                  <option disabled></option>
                  <option disabled>SINGAPORE</option>
                  <option value="sg1.fastcast4u.com">SG1</option>
                  <option value="sg2.fastcast4u.com">SG2</option>
                  <option disabled></option>
                  <option disabled>AUSTRALIA</option>
                  <option value="au1.fastcast4u.com">AU1</option>
                </select>
              </div>
              <div class="form-group col-12 col-sm-9">
                <label for="client-username">Username</label>
                <input
                  type="text"
                  class="form-control"
                  id="client-username"
                  placeholder="Enter username"
                />
                <small class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                >
              </div>
              <input
                class="button center button-rounded button-medium ml-3 whiteotter"
                id="client-btn"
                type="submit"
                value="Next"
              />
            </form>
          </div>

          <div class="acctitle py-4">I don't have radio</div>
          <div class="acc_content px-3 clearfix">
            <form action="">
              <div class="form-group col-12 col-sm-8">
                <label for="username-form">Server link</label>
                <input
                  type="url"
                  class="form-control"
                  id="username-form"
                  placeholder="Enter username"
                />
                <small id="emailHelp" class="form-text text-muted"
                  >We'll never share your email with anyone else.</small
                >
              </div>
              <input
                class="button center button-rounded button-medium ml-3 whiteotter"
                type="submit"
                value="Next"
              />
            </form>
          </div>
          <div
            class="loading-spinner position-absolute w-100 h-100 justify-content-center align-items-center"
            style="display: none;"
          >
            <img
              src="//fastcast4u.com/radio-directory/images/station-spinner.png"
              alt=""
            />
          </div>
        </div>
      </main>

      <!-- Footer
    ============================================= -->
      <footer id="footer" class="dark">
        <?php
        include('footer.php');
        ?>
      </footer>
      <!-- #footer end -->

      <script src="js/creator.js"></script>
      <script src="//fastcast4u.com/js/jscolor.js"></script>
      <script src="//fastcast4u.com/js/components/bs-filestyle.js"></script>
      <script src="https://lukasoppermann.github.io/html5sortable/html5sortable.js"></script>
    </div>
    <!-- #wrapper end -->
  </body>
</html>
