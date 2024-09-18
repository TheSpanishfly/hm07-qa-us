// eslint-disable-next-line no-undef
const config = require("../config");

// Test 1: Check the status code
test("Should return status code 200", async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
      method: "DELETE",
    });

    expect(response.status).toBe(200);
  } catch (error) {
    console.error("Error during DELETE request:", error);
    throw error;
  }
});

// Test 2: Check the response data
test("Should return valid response data", async () => {
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
      method: "DELETE",
    });

    const data = await response.json();

    expect(data.ok).toBe(true);
  } catch (error) {
    console.error("Error during DELETE request:", error);
    throw error;
  }
});
