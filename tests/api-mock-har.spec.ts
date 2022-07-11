import test from "@playwright/test";

test("Track all requests", async ({page}) => {
    await page.routeFromHAR('har/api-requests.har', {
        update: false
    })
    await page.goto(`https://bookcart.azurewebsites.net/`, {
        waitUntil: "domcontentloaded"
    })
    await page.waitForTimeout(2000);
});
