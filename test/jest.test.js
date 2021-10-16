test('Devo conhecer todas as assertivas do jest', () => {
    let number = null
    expect(number).toBeNull()// esse test espera que o valor seja nulo
    number = 10
    expect(number).not.toBeNull()// esse test espera que o valor seja não nulo
    expect(number).toBe(10)// esse test espera que o valor da variavel seja igual ao que é informado
    expect(number).toEqual(10)// mesma coisa que o toBe, verificar igualdade
    expect(number).toBeGreaterThan(9)// verifica se o valor da variavel é maior que 9
    expect(number).toBeLessThan(11)// verifica se o valor da variavel é menor que 11
})

test('Devo saber trabalhar com objetos', () => {
    const obj = { name: 'Jose', email: 'jose@gmail.com' }
    expect(obj).toHaveProperty('name')// verifica se no obj tem a property name
    expect(obj).toHaveProperty('name', 'Jose')// também é possível verificar com este comando o valor dentro da property
    expect(obj.name).toBe('Jose')

    const obj2 = { name: 'Jose', email: 'jose@gmail.com' }
    //expect(obj).toBe(obj2) o toBe não aceita, pois apesar de parecerem iguais, os objetos são diferentes
    expect(obj).toEqual(obj2)// o toEqual aceita
})