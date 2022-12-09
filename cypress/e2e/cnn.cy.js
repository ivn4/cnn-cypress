describe('teste - CNN site de noticias', () => {

  it('aceitar os cookies', () => {

    var aceitarTodosID ="#onetrust-accept-btn-handler";

    cy.visit('https://www.cnnbrasil.com.br/')

    cy.get(aceitarTodosID, { timeout: 60000 })
      .should('be.visible')
      .click();

    cy.get(aceitarTodosID, { timeout: 10000 })
      .should('not.be.visible');

  })

  it('acessar uma noticia', () => {

    var titleNoticia = 'Lula diz que pode enfrentar oposição dentro da máquina pública';
    var postTitle = '.post__title';

    cy.visit('https://www.cnnbrasil.com.br/politica/lula-diz-que-pode-enfrentar-oposicao-dentro-da-maquina-publica/');

    cy.get(postTitle).contains(titleNoticia);
  })

})