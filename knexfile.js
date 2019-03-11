// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  dockerCompose:{
      client: 'postgresql',
      connection: {
         port: "5432",
         database: 'user_database',
         user:     'admin',
         password: 'password',
         host: 'postgres'
      },
      pool: {
          min: 2,
          max: 10
      },
      migrations: {
          tableName: 'knex_migrations'
      }
  },

  production: {
    client: 'postgresql',
    connection: {
        database: 'ibmclouddb',
        user:     'admin',
        password: `${process.env.PROD_POSTGRES_ADMIN_PASSWORD}`,
        host: 'e09e908c-b26a-4e42-a7b5-6a27f46ca760.d7deeff0d58745aba57fa5c84685d5b4.databases.appdomain.cloud',
        port: '30870',
        ssl: true
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
