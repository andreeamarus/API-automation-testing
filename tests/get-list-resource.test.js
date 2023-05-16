const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in/api"

const getListResourceSchema = require('../data/response/get-list-resource-response-schema.json');

describe("Get list resource endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("get list resource users test", async () => { 

    await spec()
      .get(`${baseUrl}/unknown`)
      .expectStatus(200)
      .expectResponseTime(5000)
      .expectJsonSchema(getListResourceSchema);
  });
});
