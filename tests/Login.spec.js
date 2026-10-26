
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../Pages/LoginPage");
const { DashboardPage } = require("../Pages/DashboardPage");

const env = require("../Config/env");
const testData = require("../ReadData/testData.json");

for (const data of testData.loginTests) {

    test(data.testName, async ({ page }) => {

        const login = new LoginPage(page);
        const dashboard = new DashboardPage(page);

        console.log("Base URL:", env.baseUrl);

        await login.open(env.baseUrl);

        console.log("Title:", await page.title());
        console.log("URL:", page.url());

        await login.login(data.username, data.password);

        if (data.expectedResult === "success") {

            await expect(dashboard.dashboardHeading).toBeVisible();

        } else if (data.expectedResult === "failure") {

            await expect(login.errorMessage)
                .toContainText("Invalid credentials");

        } else if (data.expectedResult === "validation") {

            await expect(login.requiredMessage).toHaveCount(2);
        }

        console.log(data.testName + " - Passed");
    });
}
