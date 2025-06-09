import { faker } from '@faker-js/faker';
describe('Test goals on clickup', () => {
  it('Should sent Get_Tasks_simple request and return 200', () => {
    //url, method, header, body
    cy.sentRequest('list/901511896594/task', 'GET')
        .then((response) => {
          expect(response.status).to.eq(200)
        })
  })
  /*it('Should sent PUT request and return 200', () => {
    cy.updateTask()
        .then((response) => {
          expect(response.status).to.eql(204)
        })
  })
  it('Should sent POST request and return 200', () => {
    cy.createTask()
        .then((response) => {
          cy.log(response.duration)
          expect(response.status).to.eq(200)
          cy.wrap(response.body.id).as('taskId')
        })
    cy.get('@taskId').then((id) => {
      cy.sentRequest('task/' + id, 'GET')
          .then((response) => {
            expect(response.status).to.eq(200)
          })

      cy.sentRequest('task/' + id, 'DELETE')
          .then((response) => {
            expect(response.status).to.eql(204)
          })
    })
  })*/
  it('Should sent POST request and return 401', () => {
    cy.sentRequest_false('list/901511896594/task', 'POST',{"name": faker.internet.username()})
        .then((response) => {
          expect(response.status).to.eq(401)
        })
  })
  it('Should sent POST request and return 401', () => {
    cy.sentRequest_false('list/9015118965954454/task', 'POST',{"name": faker.internet.username()})
        .then((response) => {
          expect(response.status).to.eq(401)
        })
  })
  it('Should sent POST request and return 401', () => {
    cy.sentRequest_false('list/901511896594/task', 'POST')
        .then((response) => {
          expect(response.status).to.eq(401)
        })
  })
})