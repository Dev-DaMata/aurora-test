const { defineConfig } = require('cypress')
const pg = require('pg');
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      on('task', {
        // create a task - take 2 params, first being config, second is sql 
        READFROMDB({ dbConfig, sql }) {
          // create a client using the config argument object
          const client = new pg.Pool(dbConfig)
          // return the results from the sql 
          return client.query(sql);
        }
      })
    }
  },
  DBAPP: {
    user: process.env.DBAPP_USER,
    password: process.env.DBAPP_PASSWORD,
    host: process.env.DBAPP_HOST,
    port: process.env.DBAPP_PORT,
    database: process.env.DBAPP_DATABASE,
    ssl: {
      rejectUnauthorized: process.env.DBAPP_SSL_REJECT_UNAUTHORIZED === 'true'
    }
  },

  DBAUTH: {
    user: process.env.DBAUTH_USER,
    password: process.env.DBAUTH_PASSWORD,
    host: process.env.DBAUTH_HOST,
    port: process.env.DBAUTH_PORT,
    database: process.env.DBAUTH_DATABASE,
    ssl: {
      rejectUnauthorized: process.env.DBAUTH_SSL_REJECT_UNAUTHORIZED === 'true'
    }
  }
});
