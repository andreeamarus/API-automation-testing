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
      .expectStatus(204)
      .expectResponseTime(5000)

      await spec()
      .get(`${baseUrl}/users/${postId}`)
      .expectStatus(200)  //on a real site should be 404(error: user not found)
      .expectResponseTime(5000)
  });

  it("delete unexisting user test", async () => {
    const postId = 23;

    await spec()
      .delete(`${baseUrl}/users/${postId}`)
      .expectStatus(204) //on a real site should be 404(error: user not found)
      .expectResponseTime(5000);
   });
});
