describe('Explore Series Page', () => {
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
        cy.visit('http://localhost:3000', { headers: { "Accept-Encoding": "gzip, deflate" }});
        cy.get('#nav-series').click();
        cy.wait(1000);
    })
    it ('Should open the website and go to series list page', () => {
        clickShowMore();
        cy.get('#pagebody').scrollTo('bottom');
    });

    it ('Should open the modal when series is selected', () => {
        cy.get('#showbox-Younger').click();
        
        cy.get(`#modal-modal-title`).should('be.visible');
        cy.get(`#modal-modal-description`).should('be.visible');
        cy.get(`#interesting-fact-2015`).should('be.visible');

        cy.get('body').click(0,0);
    });

    it ('Should sort series by latest and oldest', () => {
        cy.get('#btn-sort-oldest').click();
        cy.wait(500);
        cy.get('#program-container').first().contains('Billy');
        cy.wait(500);
        cy.get('#btn-sort-latest').click();
        cy.get('#program-container').first().contains('Wolf');
    });
});
