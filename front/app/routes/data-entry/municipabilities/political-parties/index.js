import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "../../../../mixins/infinity-route";


export default Ember.Route.extend(InfinityRoute, AuthenticatedRouteMixin, {
  _listName: 'model',

  model: function() {
      return this.infinityModel("political-party", { perPage: 10, startingPage: 1, sort: 'name'});
  },

  actions: {
  	search: function () {
  		this.set('_listName', 'model.content');
  		this.get('controller').set('model', this.infinityModel("political-party", { perPage: 10, startingPage: 1, sort: 'name', query: this.get('controller.query')}))
  	},
  }
  
});

