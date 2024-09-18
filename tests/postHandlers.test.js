// eslint-disable-next-line no-undef
const config = require("../config");

const requestBody = {
  products: [
    { id: 5, quantity: 1 },
    { id: 4, quantity: 5 },
  ],
};

// Test 1: Check the status code
test("Should return status code 200", async () => {
  let response;
  try {
    response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
  } catch (error) {
    console.error(error);
  }

  expect(response.status).toBe(200);
});

// Test 2: Check the response body for expected data
test("Should return valid data in response body", async () => {
  let response;
  let data;

  try {
    response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    data = await response.json();
    console.log("Response data:", data);
  } catch (error) {
    console.error(error);
  }

  expect(data).toBeDefined(); // Ensure response data is defined

  // Check for values in the response
  expect(data["Everything You Need"]["Sprite Soft Drink"]).toBe(true);

  // Check for the presence of "Food City" and "Gourmet Popcorn Kernels"
  if (
    data["Food City"] &&
    data["Food City"]["Gourmet Popcorn Kernels"] !== undefined
  ) {
    expect(data["Food City"]["Gourmet Popcorn Kernels"]).toBe(false);
  } else {
    console.warn(
      "Gourmet Popcorn Kernels or Food City not found in the response"
    );
  }
});
