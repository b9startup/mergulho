const path = require('path');

module.exports = {
    development: {
        client: 'postgresql',
        connection: {
            database: 'b9startup',
            user: 'postgres',
            password: 'docker',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: path.join(
                __dirname,
                'src',
                'app',
                'database',
                'migrations'
            ),
            tableName: 'b9_users',
        },
    },

    staging: {
        client: 'postgresql',
        connection: {
            database: 'b9startup',
            user: 'postgres',
            password: 'docker',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: path.join(
                __dirname,
                'src',
                'app',
                'database',
                'migrations'
            ),
            tableName: 'b9_users',
        },
    },

    production: {
        client: 'postgresql',
        connection: {
            database: 'b9startup',
            user: 'postgres',
            password: 'docker',
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: path.join(
                __dirname,
                'src',
                'app',
                'database',
                'migrations'
            ),
            tableName: 'b9_users',
        },
    },
};
