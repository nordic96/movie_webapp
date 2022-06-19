describe('Explore Movies Page', () => {
    before(() => {
        cy.visit('http://localhost:3000', { headers: { "Accept-Encoding": "gzip, deflate" }});
    
        cy.get('.App').should('be.visible');
        cy.get('.App-header').should('be.visible');
    
        cy.get('.NavMenu').should('have.length', 4);        
        cy.wait(1000);
    })
    it('Should display all components', () => {
        cy.get('#root').find('footer').should('be.visible');
    });
});
