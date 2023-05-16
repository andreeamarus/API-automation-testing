const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in/api";

describe("Delete user endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("delete existing user test", async () => {
    const postId = 2;

    await spec()
      .delete(`${baseUrl}/users/${postId}`)
      .withHeaders("Content-Type", "application/json")
      .expectStatus(204)
      .expectResponseTime(5000)
  });
});
