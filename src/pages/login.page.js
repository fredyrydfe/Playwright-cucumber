class Login {
	constructor(page) {
		this.page = page;

		// selectors
		this.usernameField = '//input[@name="user"]';
		this.passwordField = '//input[@name="password"]';
		this.loginButton = '//input[@value="Login"]';
		this.errorMessagetext = '#errorMessage';
	}

	async enterUsername(value) {
		await this.page.fill(this.usernameField, value);
	}

	async enterPassword(value) {
		await this.page.fill(this.passwordField, value);
	}

	async pressLoginButton() {
		await this.page.click(this.loginButton);
	}

	async getErrorMessage() {
		await this.page.locator(this.errorMessagetext);
	}
}

module.exports = Login;
