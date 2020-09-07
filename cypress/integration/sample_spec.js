describe("Finding streams", () => {
  it("Looking for a game and finding streams", () => {
    cy.visit("/");
    cy.get(".gamesContainer").contains("League of Legends").click();
    cy.get(".stream");
  });
});
