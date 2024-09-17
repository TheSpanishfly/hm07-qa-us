// eslint-disable-next-line no-undef
const config = require("../config");

const requestBody = {
  price: 175,
};

test("Status code should be 200 and update product price", async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    const actualStatusCode = response.status;
    const data = await response.json();
  } catch (error) {
    console.error(error);

    expect(actualStatusCode).toBe(200);
    expect(data.ok).toBe(true);
  }
});
