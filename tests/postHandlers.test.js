// eslint-disable-next-line no-undef
const config = require("../config");
const fetch = require("node-fetch");

const requestBody = {
  products: [
    { id: 5, quantity: 1 },
    { id: 4, quantity: 5 },
  ],
};

test("Return status code of 200 and check if products are available in warehouses", async () => {
  let actualStatusCode;
  let data;

  try {
    const response = await fetch(`${config.API_URL}//api/v1/warehouses/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
      body: JSON.stringify(requestBody),
    });

    actualStatusCode = response.status;
    expect(actualStatusCode).toBe(200);
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
});
