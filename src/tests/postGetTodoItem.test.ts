import { test, expect } from "@playwright/test";
import Ajv from "ajv";

// Verify POST API call
test.describe("Create a Todo Item", () => {
  test("Check the Create Todo API", async ({ request }) => {
    await test.step("Create a Todo Item with description", async () => {
      // To generate random description
      const itemDesc = "Item" + Math.floor(Math.random() * 1000) + 1;

      // POST request body param
      const response = await request.post("/api/todoItems", {
        data: {
          description: itemDesc,
        },
      });

      // validate the response
      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(201);
    });
  });
});

// Verify GET API call
test.describe("Retrieve Todo Item", () => {
  test("Check the Todo Item GET API", async ({ request }) => {
    await test.step("Retrieve TodoItem", async () => {
      const response = await request.get("/api/todoItems");
      expect(response.ok()).toBeTruthy();
      expect(response.status()).toBe(200);

      // Validate the response against the schema file
      const responseJSON = await response.json();
      const ajv = new Ajv();
      const valid = ajv.validate(
        require("../../src/schemas/response-schema.json"),
        responseJSON
      );

      // Output the errors text
      if (!valid) {
        console.error("AJV Validation Errors:", ajv.errorsText());
      }

      // If the JSON is valid, the variable is "true"
      expect(valid).toBe(true);
    });
  });
});
