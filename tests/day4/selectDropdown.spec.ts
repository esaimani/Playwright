import { chromium, test } from "@playwright/test";


test('TC001 Creating a new lead', async () => {

    //setup
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();

    //Test steps
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Login
    await page.locator("#username").fill("Demosalesmanager");
    await page.locator("[id='password']").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();

    //Click CRM/SFA
    await page.locator("text=CRM/SFA").click();

    //Click Lead
    await page.getByRole('link', { name: 'Leads', exact: true }).click();


    //Click on create lead
    await page.locator("text=Create Lead").click();

    //Enter company name
    await page.fill("#createLeadForm_companyName", "Esai Pvt Ltd");

    //Enter Firstname
    await page.fill("#createLeadForm_firstName", "Esaimani");

    //Enter Lastname
    await page.fill("#createLeadForm_lastName", "Navamani");

    //Print source vales from dropdown
    const dropdown = page.locator("#createLeadForm_dataSourceId");

    const ddCount = await dropdown.count();

    for (let i = 0; i < ddCount; i++) {
        console.log(await dropdown.nth(i).innerText());
    }

    dropdown.selectOption({ index: 5 });

    await page.selectOption('#createLeadForm_industryEnumId', { value: "IND_SOFTWARE" });

    await page.selectOption("#createLeadForm_ownershipEnumId", { label: "Partnership" });

    await page.waitForTimeout(5000);

    //Click Submit
    await page.click(".smallSubmit");

    //Verify the status
    const status = await page.innerText("#viewLead_statusId_sp");
    console.log(`The status of the lead is ${status}`);


})






