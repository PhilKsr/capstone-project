/// <reference types="Cypress"/>

const ROADTRIP_SELECTOR = '[data-testid="roadtrip"]';
const COSTSBUTTON_SELECTOR = '[data-testid="costsButton"]';
const COSTLIST_SELECTOR = '[data-testid="costList"]';
const REMOVEBUTTON_SELECTOR = '[data-testid="removeCostButton"]';
const SERVER_URL = "http://localhost:4000";

describe("Costs", () => {
  beforeEach(() => {
    cy.visit("/collection").request(SERVER_URL + "/api/roadtrips");
    cy.get(ROADTRIP_SELECTOR).first().click();
    cy.get(COSTSBUTTON_SELECTOR).first().click();
  });

  it("It should show the costs popup.", () => {
    cy.get('[data-testid="costsContainer"]').should("be.visible");
  });

  it("It should add a cost with the form and increase the total amount", () => {
    cy.get('[data-testid="addCostButton"]').click();
    cy.get('[data-testid="addCostForm"]').should("be.visible");
    cy.get('[name="name"]').type("Tom");
    cy.get('[name="title"]').type("Groceries");
    cy.get('[name="cost"]').type("11");
    cy.get('[data-testid="addOneCostButton"]').click();
    cy.get('[data-testid="total"]').should("increase");
    cy.get('[data-testid="switch"]').click();
    cy.get(COSTLIST_SELECTOR).should("have.length", 3);
  });

  it("It should remove one cost item with click on remove button", () => {
    cy.get('[data-testid="switch"]').click();
    cy.get(REMOVEBUTTON_SELECTOR).last().click();
    cy.get(COSTLIST_SELECTOR).should("have.length", 2);
  });
});
