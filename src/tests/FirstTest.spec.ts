import User from '@models/User'

test('it should be ok', () => {
  const user = new User()
  user.nome = 'Joao'
  expect(user.nome).toEqual('Joao')
})
