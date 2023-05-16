const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in/api";

describe("Create new user endpoint test suite", () => {
    before(() => {
        request.setDefaultTimeout(5000);
    });

    it("create new user test", async () => {
        const requestBody = {
            name: "morpheus",
            job: "leader",
        };

        await spec()
            .post(`${baseUrl}/users`)
            .withHeaders("Content-Type", "application/json")
            .withBody(requestBody)
            .expectStatus(201)
            .expectResponseTime(5000)
            .expectBodyContains(requestBody.job);
    });
});
