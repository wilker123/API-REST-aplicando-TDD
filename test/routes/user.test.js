const request = require('supertest')

const app = require('../../src/app')

const email = `${Date.now()}@email.com`;

test('Deve listar todos os usuarios', () => {
    return request(app).get('/users').then((res) => {
        expect(res.status).toBe(200)
        expect(res.body.length).toBeGreaterThan(0)
    })
})

test('Deve inserir usuario com sucesso', () => {

    return request(app).post('/users').send({
        name: 'Rebeca', 
        email, 
        password: '12345'
    }).then((res) => {
        expect(res.status).toBe(201)
        expect(res.body.name).toBe('Rebeca')
    })
}) 

test('Não deve inserir usuário sem nome', () => {
    return request(app).post('/users').send({ 
        email: 'jose@gmail.com', 
        password: '12345' 
    })
    .then((res) => {
        expect(res.status).toBe(400);
        expect(res.body.error).toBe('Nome é um atributo obrigatório')
    })
})

test('Não deve inserir usuário sem email', async () => {
    const result = await request(app).post('/users').send({
        name: 'José Wilker', 
        password: '12345',
    });
    expect(result.status).toBe(400)
    expect(result.body.error).toBe('Email é um atributo obrigatório')
})

test('Não deve inserir usuário sem senha', (done) =>{
    request(app).post('/users')
    .send({ name: 'José Wilker', email: 'jose@gmail.com' })
    .then((res) => {
        expect(res.status).toBe(400)
        expect(res.body.error).toBe('Senha é um atributo obrigatório')
        done();
    });
});

test('Não deve inserir usuário com email existente', () => {
    return request(app).post('/users')
    .send({ name: 'José Wilker', email, password: '12345'})
    .then((res) => {
        expect(res.status).toBe(400)
        expect(res.body.error).toBe('Já existe um usuário com este email')
    })
})