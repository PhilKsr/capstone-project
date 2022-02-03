/// <reference types="Cypress"/>

const INPUT_SELECTOR = '[data-testid="item"]';

describe("Packing-list", () => {
  beforeEach(() => {
    cy.visit("/packing-list");
    cy.get('[name="formItem"]').type("Pillow{enter}");
  });

  it("It should render the a list item with typing enter.", () => {
    cy.get('[name="formItem"]').type("Pillow{enter}");
    cy.get('[data-testid="item"]').should("be.visible");
  });

  it("It should render a list item with click on button.", () => {
    cy.get('[name="formItem"]').type("Camera");
    cy.get('[data-testid="addButton"]').click();
    cy.get('[data-testid="item"]').last().should("be.visible");
  });

  it("It should add class line-through if item is checked.", () => {
    cy.get('[data-testid="check"]').click().should("be.checked");
    cy.get('[data-testid="item"]').should("have.class", "line-through");
    cy.get('[data-testid="item"]').should(
      "have.css",
      "text-decoration",
      "line-through rgb(255, 255, 255)"
    );
  });

  it("It should remove a list item with click on remove button", () => {
    cy.get(INPUT_SELECTOR).should("have.length", 1);
    cy.get('[name="delete"]').click();
    cy.get(INPUT_SELECTOR).should("have.length", 0);
  });

  it("It should edit an item on click", () => {
    cy.get('[name="delete"]').click();
    cy.get('[name="formItem"]').type("So{enter}");
    cy.get('[data-testid="item"]').click().type("cks");
    cy.get('[data-testid="item"]').should("have.value", "Socks");
  });
});
