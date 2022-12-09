
describe('teste - CNN site de noticias', () => { //suite de teste

  it('aceitar os cookies', () => { //caso de teste

    //localizador do botao de aceitar cookie
    var aceitarTodosID ="#onetrust-accept-btn-handler";

    //acesso a pagina da cnn brasil
    cy.visit('https://www.cnnbrasil.com.br/')

    //esperar o botao ficar visivel e clicar nele
    cy.get(aceitarTodosID, { timeout: 60000 })
      .should('be.visible')
      .click();

    //garantir que o  botao nao esta mais visivel
    cy.get(aceitarTodosID, { timeout: 10000 })
      .should('not.be.visible');

  })

  it('acessar uma noticia', () => {  //caso de teste

    //texto esperado para titulo da noticia
    var titleNoticia = 'Lula diz que pode enfrentar oposição dentro da máquina pública';
    //localizador do titulo
    var postTitle = '.post__title';

    //acessar pagina da noticia
    cy.visit('https://www.cnnbrasil.com.br/politica/lula-diz-que-pode-enfrentar-oposicao-dentro-da-maquina-publica/');

    //verificar se o titulo da noticia corresponde ao esperado
    cy.get(postTitle).contains(titleNoticia);
  })

})