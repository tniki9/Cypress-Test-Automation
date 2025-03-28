/// <reference types="cypress" />

describe("Automation Store Tests", () => {
  it("Submit contact us form with valid data", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".info_links_footer > :nth-child(5) > a").click();
    cy.get("#ContactUsFrm_first_name").type("Alison");
    cy.get("#ContactUsFrm_email").type("alison25@aol.com");
    cy.get("#ContactUsFrm_enquiry").type("Order enquiry");
    cy.get("[title='Submit']").click();
  });

  it("Verify contact form inputs", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('[href$="contact"]').click();
    cy.get('[name="first_name"]').type("John").should("have.value", "John");
    cy.get('[id="ContactUsFrm_email"]')
      .type("johninfo@testr.com")
      .should("have.value", "johninfo@testr.com");
    cy.get('[name="enquiry"]')
      .type("Additional information needed")
      .should("have.value", "Additional information needed");
    cy.get('[title="Submit"]').should("not.have.attr", "disabled");
    cy.get('[title="Submit"]').click();
    cy.get('[class="maintext"]').should("contain.text", "Contact Us");
  });

  it("Verify successful submission and page URL", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('[href$="contact"]').click();
    cy.get("#ContactUsFrm_first_name").type("Brian");
    cy.get('[id="ContactUsFrm_email"]')
      .type("bri30@inffo.com")
      .should("have.value", "bri30@inffo.com");
    cy.get('[name="enquiry"]')
      .type("Order number 235 never received")
      .should("have.value", "Order number 235 never received");
    cy.get('[title="Submit"]').click();
  });

  it("Navigate through products and go back", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('[class="fixed_wrapper"]')
      .find('[class="prdocutname"]')
      .eq(3)
      .click();
    cy.go("back");
    cy.get('[class="prdocutname"]').eq(5).click();
    cy.go("back");
    cy.contains("Skinsheen Bronzer Stick").click();
    cy.go("back");
    cy.get('[class="prdocutname"]').contains("Acqua Di Gio Pour Homme").click();
  });

  it("Navigate to Benefit Bella Bamba product page", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('[class="prdocutname"]').each((nazivElementa) => {
      if (nazivElementa.text() === "Benefit Bella Bamba") {
        cy.wrap(nazivElementa).click();
      }
    });

    cy.url().should("include", "product");
  });

  it("Verify product add to cart attribute", () => {
    cy.visit("https://automationteststore.com");
    cy.get('[class="thumbnail"]')
      .find('[class="productcart"]')
      .invoke("attr", "title")
      .as("cart");
    cy.get("@cart").should("include", "Add to Cart");
  });

  it("Calculation of the total price of all products", () => {
    cy.visit("https://automationteststore.com/");

    let total = 0;

    cy.get('[class="oneprice"]')
      .each((priceElement) => {
        let priceText = priceElement.text();
        let price = priceText.split("$")[1];
        total = total + Number(price);
        cy.log(priceText);
      })
      .then(() => {
        cy.log("Total price is: $" + total);
      });
  });
});
