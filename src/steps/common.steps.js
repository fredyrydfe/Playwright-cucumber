const {
	Given,
	Then,
	When,
	Before,
	After,
	BeforeAll,
	AfterAll,
	setDefaultTimeout,
} = require('@cucumber/cucumber');

const { chromium, firefox, webkit } = require('playwright');

const Login = require('../pages/login.page');
const Utils = require('../support/utils');

const config = {
	headless: false
};

let browser = null;

setDefaultTimeout(15 * 1000);

BeforeAll(async function () {
	switch (process.env.BROWSER) {
		case 'firefox':
			browser = await firefox.launch(config);
			break;
		case 'webkit':
			browser = await webkit.launch(config);
			break;
		default:
			browser = await chromium.launch(config);
			break;
	}
});

Before(async function () {
	this.context = await browser.newContext();
	this.page = await this.context.newPage();

	this.login = new Login(this.page);
	this.utils = new Utils(this.page);
});

After(async function () {
	await this.page.close();
	await this.context.close();
});

AfterAll(async function () {
	await browser.close();
});

Given(/^the User is on the Login page$/, async function () {
	await this.page.goto('https://sahitest.com/demo/training/login.htm');
});
