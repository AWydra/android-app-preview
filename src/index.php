<!DOCTYPE html>
<html lang="en">

<head>
    <?php
        include('head.php');
    ?>
    <title>FastCast4u | ANDROID APP PREVIEW</title>

    <style>
        .acctitle {
            font-size: 2rem;
            line-height: 1;
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
            <span class="divcenter mt-3">Easily create sub-accounts for individual stations in Centova Cast
                admin panel. You set the limits!</span>
        </header>
        <main class="container">
            <div class="accordion accordion-border clearfix">
                <div class="acctitle py-4">I have radio</div>
                <div class="acc_content px-3 clearfix">
                    <form action="#" method="get" class="row">
                        <div class="form-group col-12 col-sm-3">
                            <label for="client-server">Server</label>
                            <select class="form-control" id="client-server">
                                <option disabled>EUROPE</option>
                                <option>EU1</option>
                                <option>EU2</option>
                                <option>EU3</option>
                                <option>EU4</option>
                                <option>EU5</option>
                                <option>EU6</option>
                                <option>EU7</option>
                                <option>EU8</option>
                                <option>EU9</option>
                                <option>EU11</option>
                                <option disabled></option>
                                <option disabled>UNITED STATES of AMERICA</option>
                                <option>USA1</option>
                                <option>USA2</option>
                                <option>USA3</option>
                                <option>USA4</option>
                                <option>USA5</option>
                                <option>USA6</option>
                                <option>USA7</option>
                                <option>USA8</option>
                                <option>USA9</option>
                                <option>USA11</option>
                                <option>USA12</option>
                                <option>USA13</option>
                                <option>USA14</option>
                                <option>USA15</option>
                                <option>USA16</option>
                                <option>USA17</option>
                                <option>USA18</option>
                                <option disabled></option>
                                <option disabled>SINGAPORE</option>
                                <option>SG1</option>
                                <option>SG2</option>
                                <option disabled></option>
                                <option disabled>AUSTRALIA</option>
                                <option>AU1</option>
                            </select>
                        </div>
                        <div class="form-group col-12 col-sm-9">
                            <label for="client-username">Username</label>
                            <input type="text" class="form-control" id="client-username" placeholder="Enter username" />
                            <small class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <input class="button center button-rounded button-medium ml-3 whiteotter" id="client-btn"
                            type="submit" value="Next" />
                    </form>
                </div>

                <div class="acctitle py-4">I don't have radio</div>
                <div class="acc_content px-3 clearfix">
                    <form action="">
                        <div class="form-group col-12 col-sm-8">
                            <label for="username-form">Server link</label>
                            <input type="url" class="form-control" id="username-form" placeholder="Enter username" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                                else.</small>
                        </div>
                        <input class="button center button-rounded button-medium ml-3 whiteotter" type="submit"
                            value="Next" />
                    </form>
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
    </div>
    <!-- #wrapper end -->
</body>

</html>