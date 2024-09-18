// eslint-disable-next-line no-undef
const config = require("../config");

const updatedProduct = {
  price: 175,
};

// Test 1: Check the status code
test("Should return status code 200", async () => {
  let responseStatusCode;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    responseStatusCode = response.status;
  } catch (error) {
    console.error("Error during PUT request:", error);
  }

  expect(responseStatusCode).toBe(200); // Assert that the status code is 200
});

// Test 2: Check the response body for valid data
test("Should return valid data", async () => {
  let response;
  let data;

  try {
    response = await fetch(`${config.API_URL}/api/v1/products/7`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    // Check if the response is JSON
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      data = await response.json(); // Parse the JSON response
    } else {
      // Handle non-JSON response, log the text for debugging
      const textResponse = await response.text();
      console.error("Non-JSON response received:", textResponse);
    }
  } catch (error) {
    console.error("Error during PUT request:", error);
  }

  expect(data).toBeDefined(); // Assert that the data is defined
  if (data) {
    expect(data.ok).toBe(true); // Assert the `ok` property is true
  }
});
