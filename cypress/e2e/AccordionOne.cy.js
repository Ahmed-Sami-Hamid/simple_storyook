describe("AccordionOne Complete End To End Test", () => {
  it("Should visit component and pass the whole e2e test", () => {
    cy.visit("iframe.html?args=&id=accordionone--primary&viewMode=story");
    cy.contains("Heading").parent().click();
    cy.contains("Content");
  });
});
