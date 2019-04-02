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
         host: 'localhost'
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
        user:     'ibm_cloud_b8487dca_0efb_4b8c_83b4_d359ce0d2fb1',
        password: `3d62abeedc1d6b910c992df7ba559013f3a852fcd7146f3b2c1d2a2e75f3094c`,
        host: '7a713b4f-4453-48ca-aa4b-d483756de8d6.b2b5a92ee2df47d58bad0fa448c15585.databases.appdomain.cloud',
        port: '31998',
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
