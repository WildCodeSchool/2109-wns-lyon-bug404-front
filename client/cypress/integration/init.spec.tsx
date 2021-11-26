/// <reference types="cypress"/>

describe("Cypress", () => {
	it("opens the app", () => {
		cy.visit("http://localhost:3000");
	});
});
