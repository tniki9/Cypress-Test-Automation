describe("WebDriver University Contact Form Tests", () => {
  it("should submit contact form for John Johnson", () => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.fillContactForm(
      "John",
      "Johnson",
      "infoinfo@atelstra.com",
      "Special request"
    );
  });

  it("should submit contact form for Alice Williams", () => {
    cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
    cy.fillContactForm(
      "Alice",
      "Williams",
      "alice.williams@testing.net",
      "Inquiry about services"
    );
  });
});
