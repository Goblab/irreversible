import { Ability } from 'ember-can';

export default Ability.extend({
  canView: function() {
    if (!this.get('session.user_id')){
      return false;    
    } else {
      return this.get('session.user.canViewCalendar');
    }
  }.property('session.user.canViewCalendar'),
});