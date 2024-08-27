window.extBaseScript = document.currentScript || document.querySelector('script[data-ext-base-url]');
window.extBaseUrl = window.extBaseScript.getAttribute('data-ext-base-url');
window.loginScreenDiv = document.createElement('div');
window.loginScreenStyles = document.createElement('style');
window.loginScreenStyles.innerHTML = `
	body{
		box-sizing: border-box;
		margin: 0px;
		padding: 0px;
		overflow: hidden;
	}
	.george-login-wrapper {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
		margin: 0;
		font-family: Arial, sans-serif;
		display: flex;
		height: 100vh;
		width: 100%;
		overflow: hidden;
	}
	body *{
		box-sizing: border-box;
	}

	.left-container {
		width: 100%;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
		padding: 0 20px;
	}

	.left-container img {
		width: 96px;
	}
	.left-container h1 {
		font-size: 130%;
		font-weight: bold;
		color: #0a285c;
		margin: 24px 0px;
	}

	.left-container p {
		text-align: center;
		line-height: 1.5;
		font-size: 100%;
		color: #333;
		margin: 0px;
	}

	.left-container input[type="text"] {
		width: 100%;
		padding: 10px;
		margin: 5px 0px 20px 0px;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 16px;
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		box-sizing: border-box;
		background-color: #2870ed;
		color: white;
		padding: 10px 20px;
		margin: 15px 0px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		font-size: 16px;
		width: 100%;
		text-decoration: none;
	}
	.button:hover {
		background-color: #0b5ed7;
	}

	a:not(.button) {
		color: #2870ed;
		font-size: 90%;
		font-weight: bold;
		text-decoration: none;
		margin-top: 10px;
		display: block;
	}
	a:not(.button):hover {
		text-decoration: underline;
	}
	
	.qr-placeholder img{
		width: 80%;
		margin: 0 auto;
	}


	.login-wrapper{
		max-width: 400px;
	}

	.right-container {
		width: 50%;
		background-color: #ff6130;
		display: none;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: white;
		padding: 0 20px;
		position: relative;
	}

	@media only screen and (min-width: 992px){
		.right-container {
			display: flex;
		}
		.left-container{
			width: 50%;
		}
	}

	.right-container img {
		width: 216px;
		margin: 0 auto;
	}

	.right-container p {
		position: absolute;
		max-width: 9rem;
		left: 4rem;
		right: 1rem;
		bottom: 4rem;
		font-size: 2rem !important;
		line-height: 1.5;
	}

	.footer {
		position: absolute;
		bottom: 0;
		width: 100%;
		background-color: #2870ed;
		color: white;
		text-align: center;
		padding: 8px 0px 6px 0px;
		font-size: 14px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.footer a {
		color: white;
		margin: 0 11px;
		text-decoration: none;
	}

	.footer-logo{
		height: 26px;
		margin-left: 45px;
	}

	.footer-links{
		display: none;
		justify-content: end;
		align-items: center;
		list-style-type: none;
		margin: 0px;
		padding: 0px 40px 0px 0px;
	}
	@media only screen and (min-width: 768px){
		.footer-links{
			display: flex;
		}
		.footer {
			justify-content: space-between;
		}
	}
	.footer-links li{
		list-style-type: none;
		padding: 0px;
		margin: 0px;
	}
	
	.modal-wrapper{
		background-color: rgba(0,0,0,0.3);
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
	.login-successful{
		color:green;
		/*border:1px solid green;*/
		border-radius:16px;
		padding: 35px;
		display:flex;
		align-items: center;
		justify-content: center;
		max-width: 400px;
		background-color: #fff;
	}
	.login-successful svg{
		margin-right: 15px;
		border: 2px solid green;
		border-radius: 50%;
		padding: 3px;
	}
	.login-successful-message b{
		margin-bottom: 7px;
		display: block;
	}
	.login-successful-message{
	    text-align: left;
	}
	
	left-container .e-wallet-login-text img{
		width: 100%;
	}
	
	.e-wallet-login{
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}
	.e-wallet-login>div:first-child{
		padding-right: 10px;
		text-align: right;
	}
	.e-wallet-login>div:last-child{
		padding-left: 10px; 
	}
	.e-wallet-login>div{
		width: 50%;
	}
	.e-wallet-login-text{
		color: rgb(10, 40, 91);
		font-weight: bold;
	}
	.e-wallet-login-text img{
		width: 100%;
		margin-bottom: 20px;
	}
	.qr-code-loading{
		width: 100%;
		min-height: 162px;
		background: #f0f0f0;
		border-radius: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
		
    }
	.qr-code-placeholder{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.qr-code-placeholder img{
		width: 100%;
	}
	.login-choice-divider{
		margin: 30px 0px;
		font-size: 80%;			
	}
	
	@media only screen and (max-width:400px){
		.hidden-mobile{
			display: none;
		}
	}
	
	.george-dashboard{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 999;
		margin: 0;
		height: 100vh;
		width: 100%;
		overflow: hidden;
		background-color: #fff;
	}
	.george-dashboard img{
		width: 100%;
	}
`;

window.loginScreenDiv.innerHTML = `
	<div class="george-login-wrapper">
		<div class="left-container">
			<div class="login-wrapper">
				<img src="https://login.sparkasse.at/sts/images/clients/george-logo-bright-blue.svg" alt="George" />
				<h1>George Login</h1>
				<div class="login-options">
					<div class="e-wallet-login">
						<div class="e-wallet-login-text">
							<img src="${window.extBaseUrl}img/eidas-logos.png" alt="eIDAS EU Logos" />
							For login via<br class="hidden-mobile">
							EU Digital Identity Wallet<br class="hidden-mobile">
							scan the QR code<br class="hidden-mobile">
							
							<a href="javascript:void();">
								Do you need more info<br class="hidden-mobile">
								about login via eWallet?
							</a>
						</div>
						<div class="qr-code-placeholder">
							<div class="qr-code-loading">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25" height="25"><circle cx="25" cy="25" r="20" stroke-width="5" stroke="#3498db" fill="none" stroke-dasharray="90,20"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/></circle></svg>						
							</div>
						</div>
					</div>
					<div class="login-choice-divider">OR</div>
					<a class="button" href="https://login.sparkasse.at/sts/oauth/authorize?client_id=georgeclient&response_type=token&lang=en">Login via user number / username</a>
				</div>
				<div class="qr-placeholder"></div>
			</div>
		</div>
	
		<div class="right-container">
			<img src="https://login.sparkasse.at/sts/images/george-logo-white.svg" alt="George Logo" />
			<p>Simple<br>Smart<br>Personal</p>
		</div>
	
		<div class="footer">
			<div>
				<img class="footer-logo" src="https://login.sparkasse.at/sts/images/logos/EB-SPK_Logo_screen_white.svg" alt="Erste Bank und Sparkassen Logo" />
			</div>
			<ul class="footer-links">
				<li id="linkItem-0" class="nav-item">
					<a id="link-0" href="https://www.sparkasse.at/tiny/impressum-george-en" class="nav-link px-2 py-2 text-center" target="_blank">Imprint</a>
				</li>
				<li id="linkItem-1" class="nav-item">
					<a id="link-1" href="https://www.sparkasse.at/tiny/datenschutz-george-en" class="nav-link px-2 py-2 text-center" target="_blank">Privacy</a>
				</li>
				<li id="linkItem-2" class="nav-item">
					<a id="link-2" href="https://www.sparkasse.at/tiny/gbg-george-en" class="nav-link px-2 py-2 text-center" target="_blank">Terms &amp; Conditions</a>
				</li>
				<li id="linkItem-3" class="nav-item">
					<a id="link-3" href="https://www.sparkasse.at/tiny/service-kontakt-george-en" class="nav-link ps-2 pe-0 py-2 text-center" target="_blank">Contact &amp; Services</a>
				</li>
			</ul>
		</div>
	</div>
`;


/* Click event - Login using eWallet */
/*window.loginAction = () => {
	// select PID data on Verifier and proceed to QR generation
	document.querySelector('#mat-radio-3 label').click();
	document.querySelector('vc-body-actions button').click();

	// btn loading
	window.loginScreenDiv.querySelector('.e-wallet-button').innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="25" height="25"><circle cx="25" cy="25" r="20" stroke-width="5" stroke="#3498db" fill="none" stroke-dasharray="90,20"><animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/></circle></svg>';

	let waitForQrInterval = setInterval(() => {
		let qrCode = document.querySelector('#qrcode img');
		if(qrCode){
			// QR code found in DOM
			window.loginScreenDiv.querySelector('.qr-placeholder').innerHTML = '<p>Scan the QR code with you eWallet app.</p><br>';
			window.loginScreenDiv.querySelector('.qr-placeholder').append(qrCode);
			window.loginScreenDiv.querySelector('.login-options').style.display = 'none';
			window.clearInterval(waitForQrInterval);
		}
	}, 500);
};*/

window.autoLoadQrCode = () => {
	// select PID data on Verifier and proceed to QR generation
	document.querySelector('#mat-radio-3 label').click();
	document.querySelector('vc-body-actions button').click();

	let waitForQrInterval = setInterval(() => {
		let qrCode = document.querySelector('#qrcode img');
		if(qrCode){
			// QR code found in DOM
			window.loginScreenDiv.querySelector('.qr-code-placeholder').innerHTML = '';
			window.loginScreenDiv.querySelector('.qr-code-placeholder').append(qrCode);
			window.clearInterval(waitForQrInterval);
		}
	}, 500);
};

/* EVENT - Successfuly received PID data */
window.successWatcherInterval = window.setInterval(() => {
	if (!!document.querySelector('.qr-code .show-result h6') && !!document.querySelector('.qr-code .show-result mat-list')) {

		/* hide login options */
		window.loginScreenDiv.querySelector('.login-options').style.display = 'none';

		/* show login successful */
		window.loginScreenDiv.querySelector('.qr-placeholder').innerHTML = `
			<div class="login-successful">
				<svg style="margin-right:15px;" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 7L10 17l-5-5"/></svg>
				<div class="login-successful-message"><b>Login was successfull!</b>Welcome to George Internet Banking!</div>
			</div>
		`;

		/* show George Dashboard */
		window.loginScreenDiv.innerHTML = `
			<div class="george-dashboard">
				<img src="${window.extBaseUrl}img/george-dashboard.jpg" alt="George Dashboard" />
				<div class="modal-wrapper">
					<div class="login-successful">
						<svg style="margin-right:15px;" xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M20 7L10 17l-5-5"/></svg>
						<div class="login-successful-message"><b>Login was successfull!</b>Welcome to George Internet Banking!</div>
					</div>
				</div>
			</div>
		`;

		window.clearInterval(window.successWatcherInterval);
	}
}, 300);


/* attach styles and HTML to the document */
document.querySelector('head').append(window.loginScreenStyles);
document.querySelector('body').append(window.loginScreenDiv);

/* auto load QR code on page load */
window.onload = function(){
	window.autoLoadQrCode();
};
