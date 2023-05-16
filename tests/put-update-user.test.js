const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in/api";

describe("Update user endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("update existing user test", async () => {
    const postId = 2;

    const requestBody = {
      name: "morpheus",
      job: "change this",
    };

    await spec()
      .put(`${baseUrl}/users/${postId}`)
      .withHeaders("Content-Type", "application/json")
      .withBody(requestBody)
      .expectStatus(200)
      .expectResponseTime(5000)
      .expectBodyContains(requestBody.job);
  });
});
