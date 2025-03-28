/// <reference types="cypress"/>

describe("Ikea Registration Test", () => {
  it("Registration", () => {
    cy.visit("https://www.ikea.com/rs/sr/profile/signup/");
    cy.origin("https://rs.accounts.ikea.com", () => {
      cy.get('[name="firstName"]').type("Anna");
      cy.get('[name="lastName"]').type("Davies");
      cy.get('[name="birthDate"]').type("03-11-1990");
      cy.get('[name="address"]').type("Nova 3, 11307 Beograd");
      cy.get('[id="family-signup-form-address-option-0"]').click();
      cy.get('[name="email"]').type("anna.davies@testing.net");
      cy.get('[name="password"]').type("anna12345Pass!");
      cy.get('[name="acceptTermsAndConditions"]').check();
      cy.get('[name="acceptPrivacyPolicy"]').check();
    });
  });
});
