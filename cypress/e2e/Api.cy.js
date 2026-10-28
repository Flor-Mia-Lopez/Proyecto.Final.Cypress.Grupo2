// Caso ('API | Comprar carrito exitosamente')
describe('Casos de prueba de API', () => {

    it('API | Comprar carrito exitosamente', () => {

        cy.request({
            method: 'POST',
            url: 'https://app.bookdb.online/api/CheckOut/2138',
            failOnStatusCode: false,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZmxvcmltaWEiLCJzdWIiOiJVc2VyIiwianRpIjoiZGZlOGY0YTEtYTA3NC00YjMzLTlkYTctOTgyZWEyNjlkMzgyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsInVzZXJJZCI6IjIxMzgiLCJleHAiOjE3OTI3MDU0NjUsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.Q85mzWasIMSgrnYC6UiX7dyxy5aSqO_Q8WI97uMpa9E'
            },
            body: {
                orderDetails: [
                    {
                        book: {
                            bookId: 2,
                            title: 'Harry Potter and the Chamber of Secrets',
                            author: 'JKR',
                            category: 'Mystery',
                            price: 236,
                            coverFileName: '9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg'
                        },
                        quantity: 1
                    }
                ],
                cartTotal: 236
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });

    });

    it('API | Error al comprar carrito sin token', () => {

        cy.request({
            method: 'POST',
            url: 'https://app.bookdb.online/api/CheckOut/2138',
            failOnStatusCode: false,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: '',
            },
            body: {
                orderDetails: [
                    {
                        book: {
                            bookId: 2,
                            title: 'Harry Potter and the Chamber of Secrets',
                            author: 'JKR',
                            category: 'Mystery',
                            price: 236,
                            coverFileName: '9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg'
                        },
                        quantity: 1
                    }
                ],
                cartTotal: 236
            }
        }).then((response) => {
            expect(response.status).to.eq(401);
        });

    });
});

//caso exitoso ('API| Iniciar sesión de manera correcta')| Lopez Florencia Mia', () => {

it('API | Iniciar sesión exitosamente | Lopez Florencia Mia', () => {
    cy.request({
        method: 'POST',
        url: 'https://app.bookdb.online/api/login',
        failOnStatusCode: false,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: '',
        },
        body: {
            "username": "florimia",
            "password": "flor49216232"

        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        
    });
    
});

//caso fallidoit('API| Iniciar sesión con contraseña incorrecta | Lopez Florencia Mia', () => {
    it('API | Iniciar sesión exitosamente | Lopez Florencia Mia', () => {
    cy.request({
        method: 'POST',
        url: 'https://app.bookdb.online/api/login',
        failOnStatusCode: false,
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: '',
        },
        body: {
            "username": "florimia",
            "password": "flor1234"

        }
    }).then((response) => {
        expect(response.status).to.eq(401);
        
    });
    
})


//CASO DE PRUEBA: (API | Agregar libro a favoritos exitosamente)

JavaScript
describe('Casos de prueba de API', () => {

    it('API | Comprar carrito exitosamente', () => {

        cy.request({
            method: 'POST',
            url: 'https://app.bookdb.online/api/CheckOut/2138',
            failOnStatusCode: false,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZmxvcmltaWEiLCJzdWIiOiJVc2VyIiwianRpIjoiZGZlOGY0YTEtYTA3NC00YjMzLTlkYTctOTgyZWEyNjlkMzgyIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiVXNlciIsInVzZXJJZCI6IjIxMzgiLCJleHAiOjE3OTI3MDU0NjUsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.Q85mzWasIMSgrnYC6UiX7dyxy5aSqO_Q8WI97uMpa9E'
            },
            body: {
                orderDetails: [
                    {
                        book: {
                            bookId: 2,
                            title: 'Harry Potter and the Chamber of Secrets',
                            author: 'JKR',
                            category: 'Mystery',
                            price: 236,
                            coverFileName: '9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg'
                        },
                        quantity: 1
                    }
                ],
                cartTotal: 236
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });

    });

    //CASO DE PRUEBA: (API | Error al comprar carrito sin token)

    it('API | Error al comprar carrito sin token', () => {

        cy.request({
            method: 'POST',
            url: 'https://app.bookdb.online/api/CheckOut/2138',
            failOnStatusCode: false,
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                authorization: '',
            },
            body: {
                orderDetails: [
                    {
                        book: {
                            bookId: 2,
                            title: 'Harry Potter and the Chamber of Secrets',
                            author: 'JKR',
                            category: 'Mystery',
                            price: 236,
                            coverFileName: '9d8f4978-0ef8-42d0-873a-4eb583439237HP2.jpg'
                        },
                        quantity: 1
                    }
                ],
                cartTotal: 236
            }
        }).then((response) => {
            expect(response.status).to.eq(401);
        });

    });
});