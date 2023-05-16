const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in/api"

const getAllUsersSchema = require('../data/response/get-users-list-respons-schema.json');

describe("Get all users endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("get all users test", async () => { 

    await spec()
      .get(`${baseUrl}/users`)
      .expectStatus(200)
      .expectResponseTime(5000)
      .expectJsonSchema(getAllUsersSchema);
  });
});
