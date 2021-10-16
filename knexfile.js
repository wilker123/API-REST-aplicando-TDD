module.exports = {
    test: {
        client: 'pg',
        version: '8.7.1',
        connection: {
            host: '127.0.0.1',
            user: 'postgres',
            password: 'softwaredb',
            database: 'barriga',
        },
        migrations: {
            directory: 'src/migrations',
        },
    },
}