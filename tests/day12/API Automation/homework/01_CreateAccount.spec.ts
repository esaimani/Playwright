import { test } from "@playwright/test";
import path from "path";
import fs from "fs";
import { APIUtilities } from "../../../../utilities/apiMethods";

// const sfLoginDetails = JSON.parse(fs.readFileSync(path.join(__dirname, 'salesforceLoginDetailsNew.json'), "utf-8"));

test('SF Account Creation via API', async ({ page, request }) => {

    const apiUtility = new APIUtilities(request);
    const response = await apiUtility.getAccesstoken('https://login.salesforce.com/services/oauth2/token');

    const accountResponse = await request.post(`${response.instanceURL}/services/data/v59.0/sobjects/Account`, {
        headers: {
            "Authorization": 'Bearer ' + response.accessToken,
            "Content-Type": "application/json",
        },
        data: {
            "name": "Sathiya Pvt Ltd"
        }
    });

    await apiUtility.verifyStatusCode(accountResponse.status(), 201);
    // expect(accountResponse.status()).toBe(201);

    const accountResponseBody = await accountResponse.json();
    console.log(accountResponseBody);
    const accountId = accountResponseBody.id;


    //patch the existing details

    const updateAccResponse = await request.patch(`${response.instanceURL}/services/data/v59.0/sobjects/Account/${accountId}`, {
        headers: {
            "Authorization": 'Bearer ' + response.accessToken,
            "Content-Type": "application/json",
        },
        data: {
            "name": "Sathiya HDFC Bank Ltd",
            "accountNumber": 658965789562,
            "type": "Software",
            "industry": "IT",
            "rating": "5",
            "phone": "5896541235",
            "ownership": "self"
        }
    });
    await apiUtility.verifyStatusCode(updateAccResponse.status(), 204);

    const deleteResponse = await request.delete(`${response.instanceURL}/services/data/v59.0/sobjects/Account/${accountId}`, {
        headers: {
            "Authorization": 'Bearer ' + response.accessToken,
            "Content-Type": "application/json",
        }
    });

    await apiUtility.verifyStatusCode(deleteResponse.status(), 204);

});



