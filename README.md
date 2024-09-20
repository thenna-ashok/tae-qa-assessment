# Playwright-API-Demo

## **Overview:**

API is the acronym for Application Programming Interface, which is a software intermediary that allows two applications to talk to each other. This API framework is developed using Playwright with Typescript.

### **Some of the key features of this framework:**

1. It generates HTML and JSON report with all the step details. Report will be automatically opened on the browser after the test execution
2. This also has an example to validate response body using json schema
3. Test execution can be triggered from command line
4. Can be easily integrated to CI/CD pipeline
5. It also has a base setup to deploy this application to a docker container

## **Required Setup :**

- [Node.js](https://nodejs.org/en/download/package-manager)
- [Playwright](https://playwright.dev/docs/intro)
- [VS Code Editor](https://code.visualstudio.com/download)

## **Prerequisite :**

Spin the docker container as per the instruction so that the API's under tests are accessible

## **Running Test:**

Open the terminal and navigate to the application folder.
Run the below npx command.

npx playwright test

Once the execution completes report will be generated in below folder.

**/jsonReports:**
