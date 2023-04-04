describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com/');
    cy.get(".gLFyf").type("cypress{enter}");
    cy.wait(10000);
    cy.get('#result-stats')
      .invoke('text')
      .then((text) => {
        cy.log(text)
        var splittext = text.split('(')[1]
        cy.log(splittext)

        var splittext1 = splittext.split(' ')[0]
        cy.log(splittext1) //logs seconds as string
        if (splittext1 > 1) {
          throw new Error('The condition was not met!')
        }


      })

  })
})