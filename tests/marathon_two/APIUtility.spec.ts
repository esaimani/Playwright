import { BrowserContext, chromium } from "@playwright/test";

const clientId = '3MVG9pRzvMkjMb6n7NoCTzJO_m6t4D8iqVZvBaRsjtSzYbrEtYa4ItfEWhYouL9_af71IVOOeOKihluljAMmq';
const clientSecret = 'D7E726EE8F175BE265CC7A634D366987B3DB85DF7D8A1AAC9DF724B01B319FC1';
const sf_username = 'isainew@gmail.com';
const sf_password = 'Salesforce@2024';
const grantType = 'password';

async function getSFAccessToken() {
    const browser = await chromium.launch({ headless: true });
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;
    const AccessTokenResponse = await apiRequestContext.post('https://login.salesforce.com/services/oauth2/token', {
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        form: {
            client_id: clientId,
            client_secret: clientSecret,
            username: sf_username,
            password: sf_password,
            grant_type: grantType,
        }
    });
    //Get Response Details
    const AccessTokenResponseBody = await AccessTokenResponse.json();
    return {
        accessToken: AccessTokenResponseBody.access_token,
        instanceURL: AccessTokenResponseBody.instance_url,
        tokenType: AccessTokenResponseBody.token_type
    };


    async function creatLead() {

    }

} export { getSFAccessToken }

