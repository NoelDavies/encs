<?php
session_start();
?>
<!DOCTYPE html>
<!-- saved from url=(0026)https://www.encs.eu/login/ -->
<html class=" js flexbox canvas canvastext webgl no-touch geolocation postmessage websqldatabase indexeddb hashchange history draganddrop websockets rgba hsla multiplebgs backgroundsize borderimage borderradius boxshadow textshadow opacity cssanimations csscolumns cssgradients cssreflections csstransforms csstransforms3d csstransitions fontface generatedcontent video audio localstorage sessionstorage webworkers applicationcache svg inlinesvg smil svgclippaths"><script async="" src="./ENCS __ Login_files/analytics.js"></script><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<meta content="width=device-width, initial-scale=1.0" name="viewport">
		

<title>ENCS :: Login</title>
<meta name="description" content="">
<meta name="generator" content="concrete5 - 5.6.2.1">
<script type="text/javascript">
var CCM_DISPATCHER_FILENAME = '/index.php';
var CCM_CID = 110;
var CCM_EDIT_MODE = false;
var CCM_ARRANGE_MODE = false;
var CCM_IMAGE_PATH = "/concrete/images";
var CCM_TOOLS_PATH = "/tools/required";
var CCM_BASE_URL = "https://www.encs.eu";
var CCM_REL = "";
</script>

<?php
if( !empty( $_SESSION ) && array_key_exists( 'message', $_SESSION ) ) {
	echo "<script>alert('" . $_SESSION['message'] . "');</script>";
}
?>

<link rel="stylesheet" type="text/css" href="./ENCS __ Login_files/ccm.base.css">
<script type="text/javascript" src="./ENCS __ Login_files/jquery.js"></script><style type="text/css"></style>
<script type="text/javascript" src="./ENCS __ Login_files/ccm.base.js"></script>
		<link href="https://www.encs.eu/themes/encs/asset/css/default.css" rel="stylesheet">
        <link rel="shortcut icon" type="image/png" href="https://www.encs.eu/login/favicon.png">
		<script src="./ENCS __ Login_files/modernizr-2.6.2.min.js" type="text/javascript"></script>
	</head>
	<body class="iks">
		<div id="layout">
			<header class="main">
				<div class="offset">
					<div class="column-wrapper">
						<div class="column half">
							<a class="logo" href="https://www.encs.eu/"></a>
						</div>
						<div class="column quarter">
							<nav class="main">
								<ul>
									<li><a href="https://www.encs.eu/">Home</a></li>
								</ul>
							</nav>
						</div>
											<div class="column quarter">
												<div class="login-container">
							<a class="trigger" href="" id="trigger-login"> You are not logged in <span>Sign in</span>
							</a>
							<form method="post" action="./login.php">
								<h2>Login Members platform</h2>
								<fieldset>
									<input name="uName" placeholder="email" type="text">
									<input name="uPassword" placeholder="password" type="password">
									<div class="control">
										<div class="left">
											<a href="https://www.encs.eu/login/forgot_password">Forgot your password?</a>
										</div>
										<div class="right">
											<button type="submit">Sign in</button>
										</div>
									</div>
								</fieldset>
							</form>
						</div>
											</div>					</div>
					<div class="side-background">
						<img src="./ENCS __ Login_files/backdrop-iks.jpg">
						<div class="curve white"></div>
					</div>
				</div>
			</header>
			<section class="sub-header">
				<div class="offset">
					<div class="column-wrapper">
						<div class="column half">
							<div class="container intro">
								<h1>Members platform</h1>
								<h2>To enter the members platform we request your e-mail and password →</h2>
							</div>
						</div>
						<div class="column half">
							<div class="container login">
								
								<h1>Login</h1>
								<form method="post" action="/login.php">
																		<div class="control">
										<label for="email">e-mail</label> <input id="" email""="" name="uName" type="text">
									</div>
									<div class="control">
										<label for="password">password</label> <input id="password" name="uPassword" type="password">
									</div>
									<div class="control forgot">
										<div><a href="https://www.encs.eu/login/forgot_password">forgot your password?</a></div>
									</div>
									<div class="control right">
										<button type="submit">Login</button>
									</div>
								</form>

															</div>
						</div>
					</div>
				</div>
			</section>
			<section class="body">
				<div class="offset">
					<div class="column-wrapper">
						<div class="column half"></div>
						<div class="column half">
							<div class="container no-member">
								<h2>Not a member yet?</h2>
																								→ <a href="https://www.encs.eu/members-platform">More information</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			<footer class="main">
				<div class="offset">
					<div class="slogan">
						European Network for Cyber Security
					</div>
				</div>
				<div class="offset">
										<div class="contact-form">
																		<h2 id="trigger-contact" class="asc">Contact</h2>
																		                        						<form method="post" id="contactForm">
							<div class="contact-info">
								Prinses Beatrixlaan 800<br>
								2595 BN The Hague<br>
								The Netherlands<br>
								T: +31 70 333 1168
							</div>
							<input id="contactName" name="contact[name]" placeholder="name" type="text" maxlength="200" value="">
							<input id="contactEmail" name="contact[email]" placeholder="e-mail" type="text" maxlength="200" value="">
							<input id="contactTelephone" name="contact[telephone]" placeholder="telephone" type="text" maxlength="50" value="">
							<textarea id="contactMessage" name="contact[message]" placeholder="message" maxlength="5000"></textarea>
                            <div><br><div>Click the image to see another captcha.</div><button type="submit" id="contactSubmit" name="contactSubmit" value="1">Send</button>
						</form>
											</div>
                    <script type="text/javascript">
                                            </script>										<div class="legal">
						© 2015 ENCS - <a href="https://www.encs.eu/disclaimer">Disclaimer</a>
                        • <a href="https://www.encs.eu/Terms_and_Conditions_ENCS.pdf" rel="publisher" target="_blank">Terms &amp; conditions</a>
					</div>
									</div>
			</footer>
											</div>		
		
		<script src="./ENCS __ Login_files/jquery.customSelect.min.js" type="text/javascript"></script>
		<script src="./ENCS __ Login_files/jquery.placeholder.js" type="text/javascript"></script>
		<script src="./ENCS __ Login_files/functions.js" type="text/javascript"></script>
		
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

            ga('create', 'UA-29726725-11', 'encs.eu');
            ga('send', 'pageview');

        </script>

	
</body></html>