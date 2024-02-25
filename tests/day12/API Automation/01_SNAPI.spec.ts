// import { chromium, expect, test } from "@playwright/test";
// import { stat } from "fs";

// test('Service Now API-Create Incident', async ({ request }) => {


//     //Create New Incident 
//     const incidentResponse = await request.post('https://dev195354.service-now.com/api/now/table/incident',
//         {
//             headers: {
//                 "Content-Type": "application/json",
//                 "Authorization": "Basic YWRtaW46U2VydmljZW5vd0AyMDI0",

//             },
//             data: {
//                 "short_description": "New Incident 002 Created through Playwright"
//             }
//         }

//     );

//     //Get Response Details
//     const incidentResponseBody = await incidentResponse.json();
//     const statusCode = incidentResponse.status();
//     const incidentNumber = incidentResponseBody.result.task_effective_number;
//     console.log(incidentResponseBody);

//     //print the status code
//     console.log(`Status Code is ${statusCode}`);

//     //Print Incident Number
//     console.log(`Incident Number is ${incidentNumber}`);

//     expect(statusCode, 'Expected Response code should be 201').toBe(201);
//                                            https://dev195354.service-now.com/api/now/table/{tableName}/{sys_id}
//     const getIncident = await request.get(`https://dev195354.service-now.com/api/now/table/incident/${incidentNumber}`, {
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": "Basic YWRtaW46U2VydmljZW5vd0AyMDI0",
//         },

//     });

//     const getIncidentResponseBody = await getIncident.json();
//     console.log(getIncidentResponseBody);

//     expect(getIncidentResponseBody.statusCode()).toBe(200);


// })

