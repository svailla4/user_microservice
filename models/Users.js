'use strict';

const { Model } = require('objection')

class Users extends Model {
    static get tableName() {
        return 'users'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            properties: {
                id: { type: 'integer' },
                password: { type: 'string' },
                email: { type: 'string' }
            }
        }
    }
}

module.exports = Users