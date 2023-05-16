const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in/api";

describe("Login  user endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it(" succesful login user test", async () => {
    const requestBody = {
        "email": "eve.holt@reqres.in",
        "password": "cityslicka"
    };
    await spec()
      .post(`${baseUrl}/register`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(200)
      .expectResponseTime(5000)
  });

  it(" unsuccesful login user test", async () => {
    const requestBody = {
        "email": "peter@klaven"
    };

    await spec()
      .post(`${baseUrl}/register`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(400)
      .expectResponseTime(5000)
      
  });
});
