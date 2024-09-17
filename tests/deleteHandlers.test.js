// eslint-disable-next-line no-undef
const config = require("../config");

test("Should delete a kit and return status 200", async () => {
  let response;

  try {
    response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
      method: "DELETE",
    });
  } catch (error) {
    console.error(error);
  }

  expect(response.status).toBe(200);
  const data = await response.json();
  expect(data.ok).toBe(true);
});
