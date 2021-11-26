/// <reference types="cypress"/>

describe("Cypress", () => {
	it("opens the app", () => {
		cy.visit("http://localhost:3000");
	});
	it("contains main title", () => {
		cy.contains("Simplify work and get more done.");
	});
	it("click on get started redirect to dashboard", () => {
		cy.get("#get-started").click();
		cy.url().should("include", "/dashboard");
	});
	// it("click on add project", () => {
	// 	cy.get("#add-project").click();
	// });
	it("click on user icon", () => {
		cy.get("#user-btn").click();
	});

	it("logs ou on click and redirect to main", () => {
		cy.get("#logout").click();
		cy.url().should("include", "/");
	});
});
