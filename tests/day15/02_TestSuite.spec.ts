import { test } from "@playwright/test";

test.describe('Test Suite', async () => {
    test.describe.configure({ mode: 'serial', retries: 2, timeout: 50000 });
    test.beforeAll('Before All', async () => {
        console.log('Before All');
    });
    test.beforeEach('Before Each', async () => {
        console.log('Before Each');
    });
    test('Test One', async () => {
        console.log('Test One Executed');
    })
    test('Test Two', async () => {
        console.log('Test Two Executed');
    })
    test.afterEach('After Each', async () => {
        console.log('After Each');
    });
    test.afterAll('After All', async () => {
        console.log('After All');
    });

});