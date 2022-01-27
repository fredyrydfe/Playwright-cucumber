const { Given, Then, When } = require('@cucumber/cucumber');

const { expect } = require('@playwright/test');

When(/^the user enters the username "([^"]*)"$/, async function (args1) {
	await this.login.enterUsername(args1);
});

When(/^the user enters the password "([^"]*)"$/, async function (args1) {
	await this.login.enterPassword(args1);
});

When(/^the user submits the login form with empty fields$/, async function () {
	await this.login.pressLoginButton();
});

Then(/^the user should see the error message "([^"]*)"$/, async function (args1) {
	await this.login.pressLoginButton();
    await this.utils.waitForSelectorBeVisible(this.login.errorMessagetext);
    expect(await this.login.getErrorMessage()).toBeVisible();
    expect(await this.login.getErrorMessage()).toHaveText(args1);
});

Then(/^the user should see the Books page$/, async function () {
	await this.login.pressLoginButton();
	await this.page.waitForLoadState();
	expect(this.page.url()).toBe(`https://sahitest.com/demo/training/books.htm`);
});