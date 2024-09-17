// eslint-disable-next-line no-undef
const config = require("../config");

test("Should return status code 200", async () => {
  let actualStatusCode;
  let data;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
    actualStatusCode = response.status;
    data = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualStatusCode).toBe(200);
  expect(Array.isArray(data)).toBe(true);
  expect(data.length).toBeGreaterThan(0);
});
