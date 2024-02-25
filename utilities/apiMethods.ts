import { APIRequestContext } from "playwright";
import AuthGenDetails from '../tests/marathon_two/salesforceLoginDetailsNew.json'
import { expect } from "@playwright/test";

export class APIUtilities {

    readonly request: APIRequestContext;

    constructor(request: APIRequestContext) {
        this.request = request;
    }

    async verifyStatusCode(expected: number, actual: number) {
        expect(actual).toBe(expected)
    }

    async getAccesstoken(instanceURL: string) {
        const response = await this.request.post(instanceURL, {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            form: {
                client_id: AuthGenDetails.clientId,
                client_secret: AuthGenDetails.clientSecret,
                username: AuthGenDetails.sf_username,
                password: AuthGenDetails.sf_password,
                grant_type: AuthGenDetails.grantType,
            }

        });
        const responseBody = await response.json();

        return {
            accessToken: responseBody.access_token,
            instanceURL: responseBody.instance_url,
            tokenType: responseBody.token_type
        }

    }

}