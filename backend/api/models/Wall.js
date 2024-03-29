/**
* Wall.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	user: {
  		model:'user',
      via: 'wall'
  	},
  	
  	group: {
  		model: 'group',
      via: 'wall'
  	},

    event: {
      model: 'event',
      via: 'wall'
    },    

  	entries: {
  		model: 'entry',
  		via: 'wall'
  	}
  }
};

