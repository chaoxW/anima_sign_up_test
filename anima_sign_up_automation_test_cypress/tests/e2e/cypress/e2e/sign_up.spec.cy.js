import Login from "../../PageObjects/LoginPage";
import { faker, fi } from "@faker-js/faker";

const login = new Login();

describe("Sign up account", () => {
  let email = faker.internet.email();
  let password = faker.internet.password({ length: 10 });
  let firstName = faker.person.firstName();
  let lastName = faker.person.lastName();
  let postCodeGP = "WC1N 1PD";
  let practice = "THE BLOOMSBURY SURGERY";
  it("Validate custom clinic apps", () => {
    cy.visit(Cypress.env("baseUrl"));
    login.clickStandardLogin();
    login.insertLoginEmail(Cypress.env("email"));
    login.insertLoginPassword(Cypress.env("password"));
    login.clickLoginButton();
    login.ValidateSignUpPage();
    login.insertFirstName(firstName);
    login.insertLastName(lastName);
    login.selectBirthday();
    login.selectSex();
    login.insertPostCodeGP(postCodeGP);
    login.insertGPPractice(practice);
  });
});
