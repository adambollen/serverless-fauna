const clientProp = require('./client')
const collectionProp = require('./collection')
const indexProp = require('./fauna')
const functionProp = require('./function')
const roleProp = require('./role')

module.exports = {
  type: 'object',
  required: ['client'],
  additionalProperties: false,
  properties: {
    client: clientProp,
    collections: {
      type: 'object',
      patternProperties: {
        '.*': collectionProp,
      },
    },
    indexes: {
      type: 'object',
      patternProperties: {
        '.*': indexProp,
      },
    },
    functions: {
      type: 'object',
      patternProperties: {
        '.*': functionProp,
      },
    },
    roles: {
      type: 'object',
      patternProperties: {
        '.*': roleProp,
      },
    },
  },
}