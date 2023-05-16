const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in/api"

const getSingleResourceSchema = require('../data/response/get-single-resource-response-schema.json');

describe("Get single resource endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("get single resource users test", async () => { 

    const postId = 2

    await spec()
      .get(`${baseUrl}/unknown/${postId}`)
      .expectStatus(200)
      .expectResponseTime(5000)
      .expectJsonSchema(getSingleResourceSchema);
  });

  it("try get unexisting resource users test", async () => { 

    const postId = 23

    await spec()
      .get(`${baseUrl}/unknown/${postId}`)
      .expectStatus(404)
      .expectResponseTime(5000)
  });
  
});
