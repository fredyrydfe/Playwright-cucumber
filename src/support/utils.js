class Utils {
	constructor(page) {
		this.page = page;
	}

	async waitForSelectorBeVisible(selector) {
		await this.page.waitForSelector(selector, {
			state: 'visible',
		});
	}
}

module.exports = Utils;
