module.exports = (app) => {
    const findAll = (filter = {}) => {
        return app.db('users').where(filter).select()
    };

    const save = (user) =>{
        if(!user.name) return { error: 'Nome é um atributo obrigatório' };      
        if(!user.email) return { error: 'Email é um atributo obrigatório' };
        if(!user.password) return { error: 'Senha é um atributo obrigatório' };

        const userDb = findAll({email: user.email})

        if(userDb && userDb.length > 0) return { error: 'Já existe um usuário com este email'}

        return app.db('users').insert(user, '*')
    }

    return { findAll, save }
}