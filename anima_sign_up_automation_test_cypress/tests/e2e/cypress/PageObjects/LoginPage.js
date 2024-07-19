import "cypress-xpath";
class Login {
  clickStandardLogin() {
    cy.get('[data-cy="standard-login-button"]', {
      timeout: 10000,
    })
      .should("be.visible")
      .click();
  }

  clickCreateAccount() {
    cy.get('[data-cy="create-account-button"]', {
      timeout: 10000,
    })
      .should("be.visible")
      .click();
  }

  insertLoginEmail(email) {
    cy.get('[data-cy="email-input"]', {
      timeout: 10000,
    })
      .should("be.visible")
      .type(email);
  }

  insertEmail(email) {
    cy.xpath("//input[@name='register-email']", {
      timeout: 10000,
    })
      .should("be.visible")
      .type(email);
  }

  insertPassword(password) {
    cy.xpath("//input[@name='register-password']", {
      timeout: 10000,
    })
      .eq(0)
      .should("be.visible")
      .type(password);
  }

  insertLoginPassword(password) {
    cy.get('[data-cy="password-input"]', {
      timeout: 10000,
    })
      .should("be.visible")
      .type(password);
  }

  insertConfermPassword(password) {
    cy.xpath("//input[@name='register-password']", {
      timeout: 10000,
    })
      .eq(1)
      .should("be.visible")
      .type(password);
  }

  clickCreateAccountButton() {
    cy.xpath("//button[contains(text(),'Create account')]", {
      timeout: 10000,
    })

      .should("be.visible")
      .click();
  }

  clickLoginButton() {
    cy.get('[data-cy="login-button"]', {
      timeout: 10000,
    })

      .should("be.visible")
      .click();
  }

  ValidateSignUpPage() {
    cy.get(".desktop-additional-info-title", {
      timeout: 20000,
    }).should("be.visible");
    cy.screenshot(str, {
      capture: "runner",
    });
  }

  insertFirstName(firstName) {
    cy.xpath("//input[@name='first_name']", {
      timeout: 10000,
    })
      .should("be.visible")
      .type(firstName);
  }

  insertLastName(lastName) {
    cy.xpath("//input[@name='last_name']", {
      timeout: 10000,
    })
      .should("be.visible")
      .type(lastName);
  }

  insertPostCodeGP(code) {
    cy.xpath("//input[@name='postcode']", {
      timeout: 10000,
    })
      .should("be.visible")
      .type(code);
  }

  insertGPPractice(name) {
    cy.xpath(
      "//body/app-root[1]/ion-app[1]/ion-split-pane[1]/ion-router-outlet[1]/app-additional-service-user-info[1]/ion-content[1]/div[2]/div[1]/div[4]/div[1]/ion-auto-complete[1]/ion-searchbar[1]/div[1]/input[1]",
      {
        timeout: 10000,
      }
    )
      .should("be.visible")
      .type(name);
    cy.xpath("//b[contains(text(),'" + name + "')]").click({ force: true });
    cy.screenshot(str, {
      capture: "runner",
    });
  }

  selectBirthday() {
    cy.get('[data-cy="dob_day"]', {
      timeout: 10000,
    })
      .should("be.visible")
      .select("01");
    cy.get('[data-cy="dob_month"]', {
      timeout: 10000,
    })
      .should("be.visible")
      .select("January");
    cy.get('[data-cy="dob_year"]', {
      timeout: 10000,
    })
      .should("be.visible")
      .select("1988");
  }

  selectSex() {
    cy.get('[data-cy="sex"]', {
      timeout: 10000,
    })
      .should("be.visible")
      .select("Male");
  }
}

export default Login;
