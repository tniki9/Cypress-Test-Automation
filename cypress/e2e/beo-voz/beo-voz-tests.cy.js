/// <reference types="cypress"/>

describe("User Registration and Ticket Booking", () => {
  it("Beo Voz - Registration Form", () => {
    cy.visit("https://webapi1.srbvoz.rs/ekarta/app/#!/login");
    cy.url().should("include", "app/#!/login");
    cy.get('[id="firstName"]').type("Ana");
    cy.get("#lastName").type("Petrovic");
    cy.get('[ng-model="date"]').select("1");
    cy.get('[ng-model="month"]').select("Feb");
    cy.get('[ng-model="year"]').select("1993");
    cy.get('[name="telefon"]').type("0655777788");
    cy.get('[name="email"]').type("petroana@testing.net");
    cy.get('[name="passwordr"]').clear();
    cy.get('[name="passwordr"]').type("567anaPe#");
    cy.get('[name="promo"]').check();
    cy.get('[name="info"]').click();
  });

  it("Promo and Info Checkbox Verification", () => {
    cy.visit("https://webapi1.srbvoz.rs/ekarta/app/#!/login");
    cy.get('[name="promo"]').check().should("be.checked");
    cy.get('[name="info"]').uncheck().should("not.be.checked");
  });

  it("Ticket Booking - Search and Select", () => {
    cy.visit("https://webapi1.srbvoz.rs/ekarta/app/#!/home");
    cy.get("#povratna").click();
    cy.get('[id="stanicaod"]').type("be");
    cy.get('a[title="Beograd Centar-PROKOP"]').click();
    cy.get('[id="stanicado"]').type("no");
    cy.get('a[title="Novi Sad"]').click();
    cy.get('[ng-click="open()"]').click();
    cy.get(".btn.btn-default.btn-sm.pull-right.uib-right").click();
    cy.get(".btn.btn-default.btn-sm.active").click();
    cy.get('[id="btntrazi"]').click();
  });
});
