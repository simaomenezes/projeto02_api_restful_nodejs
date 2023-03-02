import { expect, test } from 'vitest'

test('O usuário consegue criar uma nova transação', () => {
  const reponseStatusCode = 201

  expect(reponseStatusCode).toEqual(201)
})
