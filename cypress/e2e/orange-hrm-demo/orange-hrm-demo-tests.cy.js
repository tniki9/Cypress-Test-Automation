describe("OrangeHRM Login and Reset Password Tests", () => {
  beforeEach(() => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("Login with valid credentials", () => {
    cy.get('[name="username"]').type("Admin");
    cy.get('[name="password"]').type("admin123");
    cy.get(".orangehrm-login-button").click();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });

  it("Navigate to Forgot Password page", () => {
    cy.get(".orangehrm-login-forgot-header").click();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode"
    );
  });

  it("Reset password link sent for valid username", () => {
    cy.get(".orangehrm-login-forgot-header").click();
    cy.get('[name="username"]').type("Admin");
    cy.get(".orangehrm-forgot-password-button--reset").click();
    cy.contains("Reset Password link sent successfully").should("be.visible");
  });

  it("Clicking cancel button redirects to the login page", () => {
    cy.get(".orangehrm-login-forgot-header").click();
    cy.get(".orangehrm-forgot-password-button--cancel").click();
    cy.url().should(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  });

  it("Empty username field displays required error message", () => {
    cy.get(".orangehrm-login-forgot-header").click();
    cy.get(".orangehrm-forgot-password-button--reset").click();
    cy.contains("Required").should("be.visible");
  });

  afterEach(() => {
    cy.clearCookies();
  });
});
