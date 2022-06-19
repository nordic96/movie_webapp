describe('Explore Movies Page', () => {
    const clickShowMore = () => {
        cy.get('#pagebody').then($mainContainer => {
            const isVisible = $mainContainer.find('#btn-showmore').length;
            if (isVisible) {
                cy.get('#pagebody').scrollTo('bottom');
                cy.get('#btn-showmore').click();
                cy.wait(800);
                clickShowMore();
            }
        });
    };
    before(() => {
        cy.visit('http://localhost:3000');
        cy.get('#nav-movies').click();
        cy.wait(1000);
    })
    it ('Open the website and go to movies page', () => {
        clickShowMore();
        cy.get('#pagebody').scrollTo('bottom');
    });

    it ('Should open the modal when movie is selected', () => {
        cy.get('#showbox-Valiant').click();
        
        cy.get(`#modal-modal-title`).should('be.visible');
        cy.get(`#modal-modal-description`).should('be.visible');
        cy.get(`#interesting-fact-2005`).should('be.visible');
    });
});
