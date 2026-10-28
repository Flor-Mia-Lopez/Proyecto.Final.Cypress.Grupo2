
//Caso de prueba: (FRONT |Agregar un libro a favoritos desde el menu y visualizar que aparezca en la lista de deseo | Lopez Florencia)

it('Agregar un libro a favoritos y visualizar que aparezca en la lista de deseo | Lopez Florencia', () => {

    cy.request({
      method: 'DELETE',
      url: 'https://app.bookdb.online/api/Wishlist/2138',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZmxvcmltaWEiLCJzdWIiOiJVc2VyIiwianRpIjoiNzI5NmI0MGEtNGZiYi00ZTkzLWIyY2EtOGUyYWFiMjBiNzE4IiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsInVzZXJJZCI6IjIxMzgiLCJleHAiOjE3OTI2ODI2NzQsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.j1yrYHLYedDVOCAl-vBO-bQ4uGNplqlA1YbusSgp7mQ'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)})
    
    //Acción paso 1:
    cy.visit('https://app.bookdb.online/login')
    cy.get('input[formcontrolname="username"]').type('florimia')
    cy.get('input[formcontrolname="password"]').type('Flor49216232')
    cy.get('app-login button').contains('Login').click()

    //Respuesta del sistema paso 1:
    cy.url().should('include', 'https://app.bookdb.online/')
    cy.get('app-book-card').contains('Harry Potter').should('be.visible')
    cy.get('#mat-badge-content-1').contains('0').should('be.visible')

    //Acción paso 2:
    cy.get('.favourite-unselected').first().click();

    //Respuesta del sistema paso 2:
    cy.contains('Added to Wishlist').should('be.visible')
    cy.get('#mat-badge-content-1').contains('1').should('be.visible')

    //Acción paso 3:
    cy.get('.mat-icon.notranslate.mat-badge.mat-badge-warn.material-icons.mat-ligature-font.mat-icon-no-color.mat-badge-overlap.mat-badge-above.mat-badge-after.mat-badge-medium').contains('favorite').click()
       

//Respuesta del sistema paso 3
    cy.contains('Harry Potter and the Chamber of Secrets').should('be.visible');
  })


//Caso de prueba: (FRONT | Comprar carrito exitosamente y visualizar orden de compra )
JavaScript
describe('Casos de prueba de FRONT', () => {

  it.only('Comprar carrito exitosamente y visualizar orden de compra', () => {

    //Precondicion
    cy.request({
      method: 'DELETE',
      url: 'https://app.bookdb.online/api/shoppingcart/2138',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: ''
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
    })

    //Accion paso 1:
    cy.visit('https://app.bookdb.online/login')
    cy.get('input[formcontrolname="username"]').type('florimia')
    cy.get('input[formcontrolname="password"]').type('flor49216232')
    cy.get('app-login button').contains('Login').click()

    //Respuesta del sistema paso 1:
    cy.url().should('include', 'https://app.bookdb.online/')
    cy.get('app-book-card').contains('Harry Potter and the Chamber of Secrets').should('be.visible')
    cy.get('#mat-badge-content-0').contains('0').should('be.visible')

    //Accion paso 2:
    cy.get('button').contains('Add to Cart').click()

    //Respuesta del sistema paso 2:
    cy.contains('One Item added to cart').should('be.visible')
    cy.get('#mat-badge-content-0').contains('1').should('be.visible')

    //Accion paso 3:
    cy.get('.mdc-icon-button.mat-mdc-icon-button.mat-mdc-button-base.mat-unthemed').contains('shopping_cart').click()



    //respusta del sistema paso 3
    cy.contains('Harry Potter and the Chamber of Secrets').should('be.visible');


    //Accion paso 4:
    cy.get('.mdc-button__label').contains('CheckOut').click();


    //respuesta del sistema paso 4
    cy.contains('Check Out').should('be.visible');
    cy.contains('Harry Potter and the Chamber of Secrets').should('be.visible');

    cy.get('mat-card-content').contains('Name').should('be.visible')
    cy.get('mat-card-content').contains('Address Line 1').should('be.visible')
    cy.get('mat-card-content').contains('Address Line 2').should('be.visible')
    cy.get('mat-card-content').contains('Pincode').should('be.visible')
    cy.get('mat-card-content').contains('State').should('be.visible')

    //accion paso 5:
  
    cy.get('input[placeholder="Name"]').type('Florencia')
    cy.get('input[placeholder="Address Line 1"]').type('Boedo 1234')
    cy.get('input[placeholder="Address Line 2"]').type('CABA')
    cy.get('input[placeholder="Pincode"]').type('123456')
    cy.get('input[placeholder="State"]').type('Buenos Aires')
    cy.get('mat-card-content button').contains('Place Order').click()

    //respuesta del sistema paso 5
      cy.contains('Order placed successfully!!!').should('be.visible')
      cy.contains('My Orders').should('be.visible')

      //accion paso 6:
      cy.get('tr.example-element-row').first().click()


      //respuesta del sistema paso 6
      cy.get('table.details-table').contains('Harry Potter and the Goblet of Fire').should('be.visible')
    
  })

})
  