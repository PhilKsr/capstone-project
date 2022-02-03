/// <reference types="Cypress"/>

const REMOVEROADTRIPBUTTON_SELECTOR = '[data-testid="removeRoadtrip"]';

describe("Roadtrip", () => {
  it("It should open the map with a click on add new roadtrip.", () => {
    cy.visit("/home");
    cy.get('[data-testid="createNewRoadtrip"]').click();
    cy.get('[name="roadtrip"]').should("be.visible");
  });

  it("It should show saving confirmation after save", () => {
    cy.get('[name="roadtrip"]').type("Cypress Adventure");
    cy.get('[data-testid="saveRoadtripButton"]').click();
    cy.get('[data-testid="confirmation"]').should("be.visible");
  });

  it("It should display the created roadtrip on collection page.", () => {
    cy.get('[data-testid="collectionLink"]').click();
    cy.get('[data-testid="removeRoadtrip"]').should("not.be.visible");
    cy.get('[data-testid="roadtrip"]')
      .last()
      .should("contain.html", "<h2>Cypress Adventure</h2>")
      .click();
  });

  it("It should remove roadtrip if remove button was clicked.", () => {
    cy.get(REMOVEROADTRIPBUTTON_SELECTOR).last().should("be.visible").click();
    cy.get('[data-testid="modal"]').should("be.visible");
    cy.get('[data-testid="confirmRemove"]').click();
    cy.get('[data-testid="collectionLink"]').click();
    cy.get('[data-testid="roadtrip"]')
      .last()
      .should("not.contain.html", "<h2>Cypress Adventure</h2>");
  });
});
