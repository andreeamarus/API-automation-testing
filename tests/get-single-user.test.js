const { spec, request } = require("pactum");

const baseUrl = "https://reqres.in/api";

const getSingleUserSchema= require('../data/response/get-single-user-response-schema.json')

describe("Get single user endpoint test suite", () => {
  before(() => {
    request.setDefaultTimeout(5000);
  });

  it("Get single user test", async () => {
    const postId = 2;

    const requestBody = {
      data: {
        email: "janet.weaver@reqres.in",
        first_name: "Janet",
        last_name: "Weaver",
        avatar: "https://reqres.in/img/faces/2-image.jpg",
      },
      support: {
        url: "https://reqres.in/#support-heading",
        text: "To keep ReqRes free, contributions towards server costs are appreciated!",
      },
    };

    await spec()
      .get(`${baseUrl}/users/${postId}`)
      .expectStatus(200)
      .expectResponseTime(5000)
      .expectBodyContains(requestBody.support) //if i try with requestBody.data is not working
      .expectJsonSchema(getSingleUserSchema);
  });


});
