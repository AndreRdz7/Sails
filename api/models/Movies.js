/**
 * Movies.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    rating: {
      type: 'string'
    },
    release_date: {
      type: 'ref',
      columnType: 'datetime'
    },
    reviews: {
      collection:'reviews',
      via: 'rmovie'
    },
  },


};

