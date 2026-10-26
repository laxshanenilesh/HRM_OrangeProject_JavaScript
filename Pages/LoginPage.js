class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator('input[name="username"]');
        this.password = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');

        this.errorMessage = page.locator('.oxd-alert-content-text');
        this.requiredMessage = page.locator('.oxd-input-field-error-message');
    }

    async open(baseUrl) {
        await this.page.goto(baseUrl);
    }

    async login(username, password)
  {
    
    await this.username.fill(username);
    await this.password.fill(password);

    console.log("Username entered:", username);
    console.log("Password entered");

    await this.loginButton.click({ timeout: 10000 });

    console.log("Login button clicked");
}

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }

    async getRequiredMessages() {
        return await this.requiredMessage.allTextContents();
    }

    async isLoginPageVisible() {
        return await this.loginButton.isVisible();
    }
}

module.exports = { LoginPage };