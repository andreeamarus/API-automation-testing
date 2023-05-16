const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in/api";

describe("Register user endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("successful register user test", async () => {
    const requestBody = {
      email: "eve.holt@reqres.in",
      password: "pistol",
    };
    await spec()
      .post(`${baseUrl}/register`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(200)
      .expectResponseTime(5000)
  });

  it("unsuccessful register user test", async () => {
    const requestBody = {
        "email": "sydney@fife"
    }
    await spec()
      .post(`${baseUrl}/register`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(400)
      .expectResponseTime(5000)
  });
});
