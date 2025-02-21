/// <reference types="cypress" />

describe("Testando aplicação", ()=>{

    it("Navega até a aplicação", ()=>{
        cy.visit('https://agenda-contatos-react.vercel.app')
        cy.title().should('eq', 'Agenda de contatos')
    })

    describe('Um novo contato é adicionado', ()=>{
        it("Preenche o formulário", ()=>{
            cy.visit('https://agenda-contatos-react.vercel.app')
            cy.get('input[placeholder="Nome"]').type('Matthew')
            cy.get('input[placeholder="E-mail"]').type('matthewzin123@mail.com')
            cy.get('input[placeholder="Telefone"]').type('4002-8922')
        })

        it("O formulário é enviado adicionando um novo contato", ()=>{
            cy.visit('https://agenda-contatos-react.vercel.app')
            cy.get('input[placeholder="Nome"]').type('Matthew')
            cy.get('input[placeholder="E-mail"]').type('matthewzin123@mail.com')
            cy.get('input[placeholder="Telefone"]').type('4002-8922')
            cy.get('button[type=submit').click()
            cy.get('ul.sc-eDDNvR li').contains('Matthew')
        })
    })

    describe('Edita um contato', ()=>{
        it("Acessa o modo de edição do contato", ()=>{
            cy.visit('https://agenda-contatos-react.vercel.app')
            cy.get('button.edit').eq(0).click()
            cy.get('input[placeholder="Nome"]').should('have.value', "Matthew")
        })

        it("Altera o campo nome e e-mail do contato", ()=>{
            cy.visit('https://agenda-contatos-react.vercel.app')
            cy.get('button.edit').eq(0).click()
            cy.get('input[placeholder="Nome"]').should('have.value', "Matthew")
            cy.get('input[placeholder="Nome"]').clear().type('Andrew')
            cy.get('input[placeholder="E-mail"]').clear().type('andrewzin123@mail.com')
        })
       
        it("Salva a edição do contato", ()=>{
            cy.visit('https://agenda-contatos-react.vercel.app')
            cy.get('button.edit').eq(0).click()
            cy.get('input[placeholder="Nome"]').should('have.value', "Matthew")
            cy.get('input[placeholder="Nome"]').clear().type('Andrew')
            cy.get('input[placeholder="E-mail"]').clear().type('andrewzin123@mail.com')
            cy.get('.alterar').click()
        })
    })

    describe("Remove um contato", ()=>{
        it('Deleta o primeiro contato', ()=>{
            cy.visit('https://agenda-contatos-react.vercel.app')
            cy.get('button.delete').eq(0).click()
        })
    })
})
