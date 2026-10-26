class DashboardPage {

    constructor(page) {
        this.page = page;

        this.dashboardHeading = page.locator("//h6[text()='Dashboard']");
        this.userDropdown = page.locator(".oxd-userdropdown-tab");
        this.logoutButton = page.getByRole("menuitem", { name: "Logout" });
    }

    async verifyDashboard() {
        await this.dashboardHeading.waitFor({ state: "visible" });
        return await this.dashboardHeading.isVisible();
    }

    async logout() {
        await this.userDropdown.click();
        await this.logoutButton.click();
    }

    async isDashboardVisible() {
        return await this.dashboardHeading.isVisible();
    }
}

module.exports = { DashboardPage };